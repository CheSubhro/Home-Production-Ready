
import React, { useState, useEffect  } from 'react';
import { Grid, Typography, Link, TextField, Button, Box, Container,Divider,Paper,Zoom,Stack,IconButton,Badge,Tooltip } from '@mui/material';
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuBookIcon from '@mui/icons-material/MenuBook'; // Blog
import NewReleasesIcon from '@mui/icons-material/NewReleases'; // News
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'; // Shop
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'; // Trust
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // Awards
import PublicIcon from '@mui/icons-material/Public'; // Global
import AppleIcon from '@mui/icons-material/Apple';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'; // Placeholder for Play Store
import { GitHub, Telegram, Subscriptions } from '@mui/icons-material'; 
// import GitHubIcon from "@mui/icons-material/GitHub"; // Github
// import TelegramIcon from "@mui/icons-material/Telegram"; // Telegram
// import TranslateIcon from '@mui/icons-material/Translate'; // Language Switcher 1
// import PaymentsIcon from '@mui/icons-material/Payments'; // Currency Switcher 1
// import SensorsIcon from '@mui/icons-material/Sensors'; // Live icon (State Section)
// import GroupIcon from '@mui/icons-material/Group'; // State Section
// import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'; // Accessibility Options


/* ==== Start  Security Badges ==== */
import LockIcon from '@mui/icons-material/Lock';
import ShieldIcon from '@mui/icons-material/Shield';
import VerifiedIcon from '@mui/icons-material/Verified';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaymentsIcon from '@mui/icons-material/Payments';
/* ==== End Security Badges ==== */

/* ==== Start Dark Mode Toggle ==== */

// import WbSunnyIcon from '@mui/icons-material/WbSunny'; // Sun
// import DarkModeIcon from '@mui/icons-material/DarkMode'; // Moon

/* ==== End Dark Mode Toggle ==== */

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'; // Back to Top Button

import { Facebook, Twitter, Instagram, Home, Info, Phone, Send, RssFeed } from '@mui/icons-material';
import "./Footer.css";
import companyDetails from "../../../config/site.jsx";
import FooterMap from "./FooterMap.jsx"; // Map 
import BackToTop from "./BackToTop.jsx"; // Back To top


const Footer = () => {

    const iconMap = {
        Home: <HomeIcon fontSize="small" color="primary" />,
        Info: <InfoIcon fontSize="small" color="primary" />,
        Phone: <PhoneIcon fontSize="small" color="primary" />,
        Lock: <LockIcon fontSize="small" />,
        Shield: <ShieldIcon fontSize="small" />,
        Check: <VerifiedIcon fontSize="small" />,
        CreditCard: <CreditCardIcon fontSize="small" />,
        Payments: <PaymentsIcon fontSize="small" />
    };

    const socialIconMap = {
        Facebook: <FacebookIcon />,
        Twitter: <TwitterIcon />,
        Instagram: <InstagramIcon />
    };

    const badges = [
        { id: 1, label: "Trusted by 1M+ Users", icon: <VerifiedUserIcon />, color: '#4caf50' },
        { id: 2, label: "Top Rated 2026", icon: <EmojiEventsIcon />, color: '#ffcc00' },
        { id: 3, label: "Global Reach", icon: <PublicIcon />, color: '#2196f3' }
    ];

    // const communityIconMap = {
    //     github: <GitHubIcon />,
    //     telegram: <TelegramIcon />
    // };

    const iconMapComm = {
        Github: <GitHub />,
        Telegram: <Telegram />,
        Discord: <Box component="span" sx={{fontWeight:'bold'}}>D</Box> // Or use a SVG for Discord
    };

    // const [activeLang, setActiveLang] = useState('eng'); // Language Switcher 1
    // const [activeCurrency, setActiveCurrency] = useState('INR'); // Currency Switcher 1
    // const formattedUsers = companyDetails.liveStats.users.toLocaleString(); // Stats Section
    // const [isDark, setIsDark] = useState(true); // Dark Mode Toggle

    /*==== Start DARK MODE TOGGLE — Dynamic & Beautiful ====*/
    const [mode, setMode] = useState(companyDetails.themeToggle.default); 

    useEffect(() => {
        if (mode === "Dark") {
          document.body.classList.add("dark-mode");
          document.body.classList.remove("light-mode");
        } else {
          document.body.classList.add("light-mode");
          document.body.classList.remove("dark-mode");
        }
    }, [mode]);

    /*==== End DARK MODE TOGGLE — Dynamic & Beautiful ====*/

    /*==== Start Back to Top Button ====*/
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate how far the user has scrolled
            const scrolled = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrolled / height) * 100;
            
            setScrollPercentage(progress);
            setIsVisible(scrolled > 300); // Show after 300px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    /*==== End Back to Top Button ====*/

    return (
        <>
            <Box component="footer" className="footer-root">
                <Container maxWidth="lg">
                    <Grid container spacing={4} sx={{ mb: 4 }}>
                        
                        {/* 1. Company Info */}
                        <Grid item xs={12} md={4}>
                            <Box display="flex" alignItems="center" gap={1} mb={1}>
                                <img src={companyDetails.logo} alt="Logo" className="footer-logo" />
                                <Typography variant="h6" fontWeight="bold" color="primary.main">
                                    {companyDetails.name}
                                </Typography>
                            </Box>
                            <Typography variant="body2" className="tagline">
                                {companyDetails.tagline}
                            </Typography>
                            <Typography variant="body2" className="tagline">
                                {companyDetails.address}
                            </Typography>
                            <Typography variant="body2" className="tagline">
                                {companyDetails.email}
                            </Typography>
                            
                            <Box mt={2} className="status-container">
                                <span className="pulse-dot"></span>
                                <Typography variant="caption">All Systems Operational</Typography>
                            </Box>
                        </Grid>


                        {/* 2. Quick Links — Dynamic */}
                        {/* <Grid item xs={6} md={2}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Explore
                        </Typography>

                        {companyDetails.quickLinks.map((link, index) => (
                            <Link 
                            key={index}
                            href={link.path}
                            color="inherit"
                            display="block"
                            underline="hover"
                            >
                            → {link.label}
                            </Link>
                        ))}
                        </Grid> */}

                        {/* 2. Quick Links — Dynamic Pill Style */}
                        {/* <Grid item xs={6} md={2}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Navigate
                        </Typography>

                        <Box display="flex" flexDirection="column" gap={1}>
                            {companyDetails.quickLinks.map((link, index) => (
                            <Button 
                                key={index}
                                variant="outlined"
                                size="small"
                                sx={{ borderRadius: "20px" }}
                                href={link.path}
                            >
                                {link.label}
                            </Button>
                            ))}
                        </Box>
                        </Grid> */}


                        {/* 2. Quick Links — Minimal Style (DYNAMIC) */}
                        {/* <Grid item xs={6} md={2}>
                            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                Quick Access
                            </Typography>

                            <Box display="flex" flexDirection="column" gap={1}>
                                {companyDetails.quickLinks.map((link, index) => (
                                <Link 
                                    key={index}
                                    href={link.path}
                                    underline="hover"
                                    sx={{ fontWeight: 500 }}
                                >
                                    → {link.label}
                                </Link>
                                ))}
                            </Box>
                        </Grid> */}


                        {/* 2. Quick Links — Icon Style */}
                        <Grid item xs={6} md={2}>
                            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                Quick Links
                            </Typography>

                            {companyDetails.quickLinks.map((link, index) => (
                                <Box key={index} display="flex" alignItems="center" gap={1} mb={1}>
                                {iconMap[link.icon]}
                                <Link href={link.path} underline="hover">
                                    {link.label}
                                </Link>
                                </Box>
                            ))}
                        </Grid>

                        {/* 5. Legal — Dynamic & Unique */}
                        <Grid item xs={6} md={2}>
                            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                Legal
                            </Typography>
                            <Box
                                sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                                "& a": {
                                    textDecoration: "none",
                                    transition: "all 0.2s ease",
                                    position: "relative",
                                    pl: 1.5,
                                    "&:hover": {
                                    color: "primary.main",
                                    transform: "translateX(4px)",
                                    },
                                    "&::before": {
                                    content: '"•"',
                                    position: "absolute",
                                    left: 0,
                                    color: "primary.main",
                                    }
                                }
                                }}
                            >
                                {companyDetails.legalLinks.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.path}
                                    color="inherit"
                                    variant="body2"
                                >
                                    {item.label}
                                </Link>
                                ))}
                            </Box>
                        </Grid>

                        {/* 3. Menu — Dynamic & Unique */}
                        <Grid item xs={6} md={2}>
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ letterSpacing: "0.4px" }}
                        >
                            Menu
                        </Typography>

                        <Box
                            sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1.2,
                            }}
                        >
                            {companyDetails.menuLinks.map((item, index) => (
                            <Box
                                key={index}
                                className="menu-item"
                                sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                cursor: "pointer",
                                }}
                            >
                                <Link
                                href={item.path}
                                underline="none"
                                sx={{
                                    color: "#e5e7eb",
                                    transition: "all 0.2s ease",
                                }}
                                >
                                {item.label}
                                </Link>

                                {/* Small badge beside menu item */}
                                <Box className="menu-badge">{item.badge}</Box>
                            </Box>
                            ))}
                        </Box>
                        </Grid>

                        {/* FOLLOW US — Dynamic & Unique */}
                        <Grid item xs={6} md={2}>
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ letterSpacing: "0.4px" }}
                        >
                            Follow Us
                        </Typography>

                        <Box
                            sx={{
                            display: "flex",
                            gap: 1.5,
                            mt: 1
                            }}
                        >
                            {companyDetails.socialLinks.map((item, index) => (
                            <Box
                                key={index}
                                className="social-circle"
                                component="a"
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {socialIconMap[item.icon]}
                            </Box>
                            ))}
                        </Box>
                        </Grid>


                        {/*  Newsletter & FOMO */}
                        <Grid item xs={12} md={4}>
                            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                {companyDetails.newsletter.title}
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 2, color: "#aaa" }}>
                                {companyDetails.newsletter.subtitle}
                            </Typography>

                            <Box className="newsletter-box">
                                <TextField 
                                variant="outlined" 
                                size="small" 
                                placeholder={companyDetails.newsletter.placeholder}
                                className="newsletter-input"
                                fullWidth
                                />
                                <Button 
                                variant="contained" 
                                color="error"
                                className="newsletter-btn"
                                >
                                {companyDetails.newsletter.buttonText}
                                </Button>
                            </Box>
                        </Grid>

                        {/*  Newsletter — New Modern Design */}

                        {/* <Grid item xs={12} md={4}>
                            <Typography 
                                variant="subtitle1" 
                                fontWeight="bold" 
                                gutterBottom 
                                sx={{ letterSpacing: "0.4px" }}
                            >
                                {companyDetails.newsletter.title}
                            </Typography>

                            <Typography 
                                variant="body2" 
                                sx={{ mb: 2, color: "#aaa", maxWidth: 320 }}
                            >
                                {companyDetails.newsletter.subtitle}
                            </Typography>

                            <Box className="newsletter-card">
                                <TextField 
                                variant="outlined" 
                                size="small" 
                                placeholder={companyDetails.newsletter.placeholder} 
                                className="newsletter-input-modern"
                                fullWidth
                                />

                                <Button 
                                variant="contained" 
                                className="newsletter-pill-btn"
                                >
                                Subscribe
                                </Button>
                            </Box>

                            <Typography variant="caption" sx={{ mt: 1, display: "block", color: "#777" }}>
                                No spam — only valuable insights.
                            </Typography>
                        </Grid> */}

                        {/*  App download buttons */}
                        <Box className="app-section-root">
                            <Typography variant="subtitle2" className="section-header">
                                EXPERIENCE ON MOBILE
                            </Typography>
                                
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
                                {companyDetails.appLinks.map((app) => (
                                    <Button
                                        key={app.platform}
                                        href={app.url}
                                        target="_blank"
                                        className="store-button"
                                        startIcon={
                                            app.icon === "Apple" ? 
                                            <AppleIcon sx={{ fontSize: '32px !important' }} /> : 
                                            <PlayArrowIcon sx={{ fontSize: '32px !important' }} />
                                        }
                                    >
                                        <Box className="store-text-wrapper">
                                            <Typography className="store-subtitle">
                                                {app.subtitle}
                                            </Typography>
                                            <Typography className="store-platform">
                                                {app.platform}
                                            </Typography>
                                        </Box>
                                    </Button>
                                ))}
                            </Stack>
                        </Box>

                        {/* COMMUNITY —  Github. Telegram */}
                        {/* <Grid item xs={6} md={2}>
                            <Typography 
                                variant="subtitle1" 
                                fontWeight="bold" 
                                gutterBottom 
                                sx={{ letterSpacing: "0.4px" }}
                            >
                                {companyDetails.communityLinks.title}
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 1.5, color: "#aaa", fontSize: "0.8rem" }}>
                                {companyDetails.communityLinks.subtitle}
                            </Typography>

                            <Box display="flex" flexDirection="column" gap={1}>
                                {companyDetails.communityLinks.links.map((item, index) => (
                                <Box
                                    key={index}
                                    component="a"
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="community-item"
                                    sx={{ "--brand": item.color }}
                                >
                                    {communityIconMap[item.icon]}

                                    <Typography variant="body2" className="community-label">
                                    {item.name}
                                    </Typography>
                                </Box>
                                ))}
                            </Box>
                        </Grid> */}

                        {/* COMMUNITY 2 —  Github. Telegram  */}
                        <Box className="community-root">
                            <Typography variant="subtitle2" className="section-header">
                                JOIN THE COMMUNITY
                            </Typography>
                            
                            <Stack direction="row" flexWrap="wrap" gap={2} sx={{ mt: 2 }}>
                                {companyDetails.communityLinks.map((item) => (
                                    <Link 
                                        key={item.label} 
                                        href={item.url} 
                                        underline="none" 
                                        className="community-card"
                                        sx={{ '--brand-color': item.color }}
                                    >
                                        <Box className="community-icon">{iconMapComm[item.icon]}</Box>
                                        <Box>
                                            <Typography className="community-label">{item.label}</Typography>
                                            <Typography className="community-status">Online</Typography>
                                        </Box>
                                    </Link>
                                ))}
                            </Stack>
                        </Box>
                    </Grid>
                    
                    {/* Awards / Trust badges */}
                    <Box className="trust-root">
                        <Typography variant="caption" className="trust-header">
                            RECOGNIZED EXCELLENCE
                        </Typography>
                        
                        <Stack direction="row" spacing={3} className="badge-container">
                            {badges.map((badge) => (
                                <Tooltip key={badge.id} title={badge.label} arrow>
                                    <Box className="trust-card" sx={{ '--accent': badge.color }}>
                                        <Box className="badge-icon-wrapper">
                                            {badge.icon}
                                        </Box>
                                        <Box className="badge-text-area">
                                            <Typography variant="h6" className="badge-number">
                                                {badge.id === 1 ? "1M+" : badge.id === 2 ? "#1" : "50+"}
                                            </Typography>
                                            <Typography variant="caption" className="badge-label">
                                                {badge.label.split(' ').slice(1).join(' ')}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Tooltip>
                            ))}
                        </Stack>
                    </Box>

                    {/* Awards / Trust badges 2 */}            
                    {/* <Box mt={2} className="trust-badges">
                        {companyDetails.trustBadges.map((badge, index) => (
                            <Box key={index} className="trust-chip">
                            <span className="badge-icon">{badge.icon}</span>
                            <Typography variant="caption">
                                {badge.label}
                            </Typography>
                            </Box>
                        ))}
                    </Box> */}

                    {/* Interactive Map (office location) */}
                    <Grid item xs={12}>
                        <FooterMap />
                    </Grid>

                    {/* Interactive Map2 (office location) */}    
                    {/* <Grid item xs={12}>
                        <iframe
                            src={companyDetails.mapIframe}
                            width="100%"
                            height="220"
                            style={{ border: 0, borderRadius: "12px" }}
                            loading="lazy"
                        />
                    </Grid> */}

                    {/* LanguageSwitcher 1 */}  

                    {/* <Box className="lang-section-root">
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
                            <TranslateIcon sx={{ fontSize: 16, color: '#ffcc00' }} />
                            <Typography variant="caption" sx={{ color: '#888', letterSpacing: '1px', fontWeight: 700 }}>
                                SELECT LANGUAGE
                            </Typography>
                        </Stack>

                        <Box className="lang-pill-container">
                            {companyDetails.languages.map((lang) => (
                                <ButtonBase
                                    key={lang.code}
                                    onClick={() => setActiveLang(lang.code)}
                                    className={`lang-item ${activeLang === lang.code ? 'active' : ''}`}
                                >
                                    <Typography className="lang-short">{lang.short}</Typography>
                                    <Typography className="lang-full">{lang.label}</Typography>
                                </ButtonBase>
                            ))}
                            <Box 
                                className="lang-slider" 
                                sx={{ 
                                    transform: `translateX(${
                                        activeLang === 'eng' ? '0%' : 
                                        activeLang === 'beng' ? '100%' : '200%'
                                    })` 
                                }} 
                            />
                        </Box>
                    </Box> */}

                    {/* LANGUAGE SWITCHER — Dynamic & Beautiful */}
                    <Grid item xs={6} md={2}>
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ letterSpacing: "0.4px" }}
                        >
                            {companyDetails.languages2.title}
                        </Typography>

                        <Box className="lang-switcher">
                            {companyDetails.languages2.options.map((lang) => (
                            <Box
                                key={lang.code}
                                className={`lang-chip ${
                                companyDetails.languages2.current === lang.code
                                    ? "active-lang"
                                    : ""
                                }`}
                            >
                                <span className="flag">{lang.flag}</span>
                                <Typography variant="caption" className="lang-label">
                                {lang.label}
                                </Typography>
                            </Box>
                            ))}
                        </Box>
                    </Grid>

                    {/* CURRENCY SWITCHER — Dynamic & Beautiful */}
                    <Grid item xs={6} md={2}>
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ letterSpacing: "0.4px" }}
                        >
                            {companyDetails.currency.title}
                        </Typography>

                        <Box className="currency-switcher">
                            {companyDetails.currency.options.map((cur) => (
                            <Box
                                key={cur.code}
                                className={`currency-chip ${
                                companyDetails.currency.current === cur.code
                                    ? "active-currency"
                                    : ""
                                }`}
                            >
                                <Typography variant="caption" className="currency-symbol">
                                {cur.symbol}
                                </Typography>

                                <Typography variant="caption" className="currency-label">
                                {cur.code}
                                </Typography>
                            </Box>
                            ))}
                        </Box>
                    </Grid>

                    {/* CURRENCY SWITCHER 1 — Dynamic & Beautiful */}            
                    {/* <Box className="currency-section-root">
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
                            <PaymentsIcon sx={{ fontSize: 16, color: '#ffcc00' }} />
                            <Typography variant="caption" sx={{ color: '#888', letterSpacing: '1px', fontWeight: 700 }}>
                                CURRENCY
                            </Typography>
                        </Stack>

                        <Box className="currency-grid">
                            {companyDetails.currencies.map((curr) => (
                                <ButtonBase
                                    key={curr.code}
                                    onClick={() => setActiveCurrency(curr.code)}
                                    className={`currency-card ${activeCurrency === curr.code ? 'active' : ''}`}
                                >
                                    <Typography className="currency-symbol">{curr.symbol}</Typography>
                                    <Typography className="currency-code">{curr.code}</Typography>
                                    
                                    
                                    {activeCurrency === curr.code && (
                                        <Box className="active-dot" />
                                    )}
                                </ButtonBase>
                            ))}
                        </Box>
                    </Box> */}

                    {/* Small stats section */}
                    {/* <Box className="stats-root">
                        <Stack 
                            direction="row" 
                            spacing={3} 
                            divider={<Divider orientation="vertical" flexItem sx={{ bgcolor: '#333', height: '15px', alignSelf: 'center' }} />}
                        >
                            <Box className="stat-item">
                                <Box className="live-indicator-dot" />
                                <Typography className="stat-value">
                                    {companyDetails.liveStats.matches}
                                </Typography>
                                <Typography className="stat-label">Live Matches</Typography>
                            </Box>

                            <Box className="stat-item">
                                <GroupIcon sx={{ fontSize: 14, color: '#888', mr: 0.5 }} />
                                <Typography className="stat-value">
                                    {formattedUsers}
                                </Typography>
                                <Typography className="stat-label">Active Now</Typography>
                            </Box>
                        </Stack>
                    </Box> */}

                    {/* SMALL STATS 1 — Dynamic & Beautiful */}
                    <Box mt={2} className="stats-wrapper">
                        <Typography variant="subtitle2" sx={{ mb: 1, letterSpacing: "0.4px" }}>
                            {companyDetails.stats.title}
                        </Typography>

                        <Box className="stats-row">
                            {companyDetails.stats.items.map((stat, index) => (
                            <Box key={index} className="stat-card">
                                <span className="stat-icon">{stat.icon}</span>

                                <Box>
                                <Typography variant="caption" className="stat-label">
                                    {stat.label}
                                </Typography>
                                <Typography variant="body2" className="stat-value">
                                    {stat.value}
                                </Typography>
                                </Box>
                            </Box>
                            ))}
                        </Box>
                    </Box>

                    {/* Accessibility Option */}
                    {/* <Box className="accessibility-root">
                        <Tooltip 
                            title="Open Settings" 
                            placement="top"
                            componentsProps={{
                                tooltip: {
                                    sx: { bgcolor: '#ffcc00', color: '#000', fontWeight: 'bold' }
                                }
                            }}
                        >
                            <Link 
                                href={companyDetails.accessibility.path} 
                                underline="none" 
                                className="access-link-wrapper"
                            >
                                <Box className="access-icon-box">
                                    <AccessibilityNewIcon sx={{ fontSize: 18 }} />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography className="access-text">
                                        {companyDetails.accessibility.label}
                                    </Typography>
                                    <Stack direction="row" spacing={1}>
                                        <Box className="access-dot-indicator" />
                                        <Typography className="access-subtext">ADA Compliant</Typography>
                                    </Stack>
                                </Box>
                            </Link>
                        </Tooltip>
                    </Box> */}

                    {/* ACCESSIBILITY 1 — Dynamic & Beautiful */}
                    <Grid item xs={6} md={2}>
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ letterSpacing: "0.4px" }}
                        >
                            {companyDetails.accessibility.title}
                        </Typography>

                        <Box className="accessibility-card">
                            <Typography variant="body2" className="accessibility-label">
                            {companyDetails.accessibility.label}
                            </Typography>

                            <Typography variant="caption" className="accessibility-desc">
                            {companyDetails.accessibility.description}
                            </Typography>

                            <Link
                            href={companyDetails.accessibility.url}
                            underline="none"
                            className="accessibility-link"
                            >
                            Open settings →
                            </Link>
                        </Box>
                    </Grid>

                    {/* Security Badges  */ }
                    {/* <Box className="security-root">
                        <Typography variant="caption" className="security-header">
                            SECURE INFRASTRUCTURE
                        </Typography>
                        
                        <Stack direction="row" spacing={2} sx={{ mt: 1, flexWrap: 'wrap', gap: 1 }}>
                            {companyDetails.securityBadges.map((badge) => (
                                <Tooltip key={badge.name} title={`${badge.name} Verified`} arrow>
                                    <Box className="security-card" sx={{ '--brand': badge.color }}>
                                        {iconMap[badge.icon]}
                                        <Typography className="badge-name">{badge.name}</Typography>
                                    </Box>
                                </Tooltip>
                            ))}
                            
                            <Divider orientation="vertical" flexItem sx={{ bgcolor: '#333', mx: 1 }} />

                            {companyDetails.paymentMethods.map((pay) => (
                                <Tooltip key={pay.name} title={`Pay with ${pay.name}`} arrow>
                                    <Box className="payment-card" sx={{ '--brand': pay.color }}>
                                        {iconMap[pay.icon]}
                                    </Box>
                                </Tooltip>
                            ))}
                        </Stack>
                    </Box> */}

                    {/* SECURITY BADGES — Dynamic & Beautiful */}
                    <Grid item xs={12} md={4}>
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ letterSpacing: "0.4px" }}
                        >
                            {companyDetails.securityBadges.title}
                        </Typography>

                        <Box className="security-grid">
                            {companyDetails.securityBadges.items.map((badge, index) => (
                            <Box key={index} className="security-card">
                                <span className="security-icon">{badge.icon}</span>

                                <Box>
                                <Typography variant="body2" className="security-label">
                                    {badge.label}
                                </Typography>
                                <Typography variant="caption" className="security-desc">
                                    {badge.description}
                                </Typography>
                                </Box>
                            </Box>
                            ))}
                        </Box>
                    </Grid>

                    {/* Dark Mode Toggle */}            
                    {/* <Box className="theme-root">
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Typography variant="caption" className="theme-label">
                                {isDark ? "STAY DARK" : "GO LIGHT"}
                            </Typography>

                            <Box 
                                className={`theme-switch-track ${isDark ? 'dark' : 'light'}`}
                                onClick={() => setIsDark(!isDark)}
                            >
                                <Box className="theme-thumb">
                                    {isDark ? (
                                        <DarkModeIcon sx={{ fontSize: 14, color: '#fff' }} />
                                    ) : (
                                        <WbSunnyIcon sx={{ fontSize: 14, color: '#000' }} />
                                    )}
                                </Box>
                                
                                <Box className="theme-bg-elements">
                                    {isDark ? <span className="stars">★ ★</span> : <span className="clouds">☁</span>}
                                </Box>
                            </Box>
                        </Stack>
                    </Box> */}

                    {/* DARK MODE TOGGLE — Dynamic & Beautiful */}
                    <Grid item xs={6} md={2}>
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ letterSpacing: "0.4px" }}
                        >
                            {companyDetails.themeToggle.title}
                        </Typography>

                        <Box className="theme-toggle">
                            <Box
                            className={`theme-chip ${mode === "Light" ? "active-theme" : ""}`}
                            onClick={() => setMode("Light")}
                            >
                            🌤️ Light
                            </Box>

                            <Box
                            className={`theme-chip ${mode === "Dark" ? "active-theme" : ""}`}
                            onClick={() => setMode("Dark")}
                            >
                            🌙 Dark
                            </Box>
                        </Box>
                    </Grid>

                    <hr className="footer-divider" />

                    {/* Copyright Bottom Bar */}
                    <Grid container justifyContent="space-between" alignItems="center" className="footer-bottom">
                        <Grid item>
                            <Typography variant="body2">
                                &copy; {companyDetails.year} <strong>{companyDetails.name}</strong> • Built with ❤️ in Bengaluru
                                {/* &copy; {companyDetails.startYear}–{companyDetails.year} */}
                            </Typography>
                        </Grid>
                    </Grid>

                    {/*  Back to Top Button */ }
                    {/* <Zoom in={isVisible}>
                        <Box className="back-to-top-container" onClick={scrollToTop}>
                            <svg className="progress-ring" width="50" height="50">
                                <circle
                                    className="progress-ring__circle"
                                    stroke="#ffcc00"
                                    strokeWidth="3"
                                    fill="transparent"
                                    r="22"
                                    cx="25"
                                    cy="25"
                                    style={{
                                        strokeDasharray: `${2 * Math.PI * 22}`,
                                        strokeDashoffset: `${2 * Math.PI * 22 - (scrollPercentage / 100) * (2 * Math.PI * 22)}`,
                                    }}
                                />
                            </svg>
                            <IconButton className="top-icon-btn">
                                <KeyboardArrowUpIcon sx={{ color: '#fff' }} />
                            </IconButton>
                        </Box>
                    </Zoom> */}

                    {/*  Back to Top Button Beutiful */ }
                    <BackToTop threshold={300} /> 
                    
                </Container>
            </Box>
        </>
    )
}

export default Footer