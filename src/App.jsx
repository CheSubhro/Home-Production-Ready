import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './component/page/Home/Home'
import Header from './component/page/Header/Header';
import Footer from './component/page/Footer/Footer'
import NotFound from './component/page/NotFound'
import { CssBaseline, Box } from '@mui/material';

function App() {

	return (
		<>
			<Router>
            <CssBaseline /> 
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    height: '100vh',
                    width: '100vw' 
                }}>
                    <Header />

                    <Box component="main" sx={{ 
                        flex: '1 0 auto', 
                        width: '100%' 
                    }}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Box>

                    <Footer />
                </Box>
            </Router>
		</>
	)
}

export default App
