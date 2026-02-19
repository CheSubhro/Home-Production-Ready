
import React from 'react'
import Hero from './Hero'
import Features from './Features'
import CategorySection from './CategorySection'
import AboutBrand from './AboutBrand'
import VideoBanner from './VideoBanner'
import Testimonials from './Testimonials'
import FeaturedSlider from './FeaturedSlider'
import ProductGrid from './ProductGrid'
import InstagramFeed from './InstagramFeed'
import {productsData} from './data'
import './Home.css'



const Home = () => {
    return (
        <>
            <div className="home-container">
                {/*  Hero Section (Banner) */}
                <Hero />

                {/* Brand Features */}
                <Features /> 

                {/*  Category Section */}
                <CategorySection />

                {/* Brand About */}
                <AboutBrand/>

                {/* Video Banner / Promotion */}
                <VideoBanner/>

                {/* Customer Testimonials/reviews */}
                <Testimonials/>

                {/* Featured Collection Slider */}
                <FeaturedSlider title="TRENDING COLLECTIONS" products={productsData} />

                {/*  Featured Product Grid */}
                <ProductGrid title="BEST SELLERS" products={productsData}/>
                
                {/*  Another Section (Optional) */}
                <ProductGrid title="NEW ARRIVALS" products={productsData} />

                {/* Instagram Lookbook Grid */}
                <InstagramFeed/>
                
            </div>
        </>
    )
}

export default Home