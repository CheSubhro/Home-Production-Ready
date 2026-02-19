
import React,{ useState,useEffect } from 'react';
import { AppBar, Toolbar, Container,
         IconButton,Box,Badge } from '@mui/material';
import { Logo, NavMenu, HeaderActions, WishlistAction, 
        MobileMenu,DynamicSearch,AuthModal,
        AnnouncementBar } from './HeaderComponents';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import "./Header.css";


const Header = () => {

    const [searchActive, setSearchActive] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [wishlistCount, setWishlistCount] = useState(5); // Dynamic Wishlist Count
    const [scrolled, setScrolled] = useState(false); // Shrink on Scroll
    const [authOpen, setAuthOpen] = useState(false); // Modal state for login and signup

    useEffect(() => {
        const handleScroll = () => {
          // if scroll 50px  then true 
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
    };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { 
          id: 1, 
          label: 'MEN', 
          link: '/men',
          subMenu: ['Sneakers', 'Boots', 'Running Shoes', 'Formal Shoes'] 
        },
        { 
          id: 2, 
          label: 'WOMEN', 
          link: '/women',
          subMenu: ['Sneakers', 'Heels', 'Flats', 'Sports'] 
        },
        { id: 3, label: 'NEW ARRIVALS', link: '/new' },
        { id: 4, label: 'COMBOS', link: '/combos' },
    ];

    return (
        <>
            <AnnouncementBar />  {/* For Announcement */} 

            <AppBar position="sticky" elevation={scrolled ? 4 : 0} 
                className={`main-appbar ${scrolled ? 'shrunk' : ''}`}
            >
                <Container maxWidth="xl">
                    <Toolbar className="header-toolbar">

                        {/* Hamburger for mobile and Logo */}
                        <Box className="header-section left">
                            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                                <IconButton onClick={() => setDrawerOpen(true)}>
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        <Logo />
                        </Box>

                    {/*  Center: Navigation Menu */}
                    <Box className="header-section center">
                        {!searchActive && (
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <NavMenu items={navItems} />
                            </Box>
                        )}
                        {/* Search active holeo eta ekhon center-ei thakbe */}
                        <DynamicSearch isActive={searchActive} setIsActive={setSearchActive} />
                    </Box>

                    {/*  Right: Icons */}
                    <Box className="header-section right">
                        <Box className={`actions-container ${searchActive ? 'hide-on-mobile' : ''}`}>
                            <IconButton 
                                sx={{ display: { xs: 'none', sm: 'flex' } }}
                                onClick={() => setAuthOpen(true)}
                            >
                                <PersonOutlineIcon />
                            </IconButton>
                            <WishlistAction count={wishlistCount} />
                            <IconButton>
                                <Badge badgeContent={2} color="error">
                                    <ShoppingBagOutlinedIcon />
                                </Badge>
                            </IconButton>
                        </Box>
                    </Box>

                    </Toolbar>
                </Container>
                {/* Mobile Drawer */}
                <MobileMenu 
                    open={drawerOpen} 
                    onClose={() => setDrawerOpen(false)} 
                    items={navItems} 
                />
            </AppBar>

            {/* Auth Modal Trigger */}
            <AuthModal 
                open={authOpen} 
                handleClose={() => setAuthOpen(false)} 
            />
        </>
    )
}

export default Header