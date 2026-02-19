// src/config/site.jsx

const companyDetails = {
    name: "HeaderProd",
    logo: "/assets/logo.png",   
    tagline: "Built for fans. Powered by data.",
    address: "Bengaluru, India",
    email: "contact@xyz.com",
    year: new Date().getFullYear(),
    startYear: 2023, // you want a range like: 2023–2026

    quickLinks: [
        { label: "Home", path: "/home", icon: "Home" },
        { label: "About", path: "/about", icon: "Info" },
        { label: "Contact", path: "/contact", icon: "Phone" }
    ],

    legalLinks: [
        { label: "Privacy Policy", path: "/privacy" },
        { label: "Terms of Service", path: "/terms" },
        { label: "Conditions", path: "/conditions" },
        { label: "RSS Feed", path: "/rss.xml" }
    ],

    menuLinks: [
        { label: "Blog", path: "/blog", badge: "New" },
        { label: "News", path: "/news", badge: "Live" },
        { label: "Shop", path: "/shop", badge: "Hot" }
    ],

    socialLinks: [
        { label: "Facebook", url: "https://facebook.com", icon: "Facebook" },
        { label: "Twitter", url: "https://twitter.com", icon: "Twitter" },
        { label: "Instagram", url: "https://instagram.com", icon: "Instagram" }
    ],
    newsletter: {
        title: "Subscribe to updates",
        subtitle: "Subscribe to weekly sports insights",
        placeholder: "Enter your email",
        buttonText: "Join"
    },
    map: {
        lat: 12.9716,
        lng: 77.5946,
        zoom: 13,
        label: "FooterProd Office, Bengaluru"
    },
    mapIframe:
    "https://www.google.com/maps?q=Bengaluru&output=embed",
    
    trustBadges: [
        { label: "Trusted by 1M+ users", icon: "🏆" },
        { label: "Secure & Privacy First", icon: "🔐" },
        { label: "Rated 4.9/5", icon: "⭐" }
    ],

    appLinks: [
        { 
            platform: "App Store", 
            url: "https://apple.com/app", 
            subtitle: "Download on the", 
            icon: "Apple" 
        },
        { 
            platform: "Google Play", 
            url: "https://play.google.com/store", 
            subtitle: "Get it on", 
            icon: "PlayStore" 
        }
    ],

    // communityLinks: {
    //     title: "Community",
    //     subtitle: "Join the conversation",
    //     links: [
          
    //       {
    //         name: "GitHub",
    //         url: "https://github.com",
    //         icon: "github",
    //         color: "#ffffff"
    //       },
    //       {
    //         name: "Telegram",
    //         url: "https://t.me",
    //         icon: "telegram",
    //         color: "#24A1DE"
    //       }
    //     ]
    // }

    communityLinks: [
        { label: "Discord", url: "https://discord.gg/...", icon: "Discord", color: "#5865F2" },
        { label: "Github", url: "https://github.com/...", icon: "Github", color: "#ffffff" },
        { label: "Telegram", url: "https://t.me/...", icon: "Telegram", color: "#26A5E4" }
    ],

    // languages: [
    //     { code: 'eng', label: 'English', short: 'EN' },
    //     { code: 'beng', label: 'বাংলা', short: 'BN' },
    //     { code: 'hindi', label: 'हिन्दी', short: 'HI' }
    // ],

    languages2: {
        title: "Language",
        current: "EN",
        options: [
          { code: "EN", label: "English", flag: "🇬🇧" },
          { code: "BN", label: "বাংলা", flag: "🇮🇳" },
          { code: "HI", label: "हिंदी", flag: "🇮🇳" }
        ]
    },

    currency: {
        title: "Currency",
        current: "INR",
        options: [
          { code: "INR", symbol: "₹", label: "Indian Rupee" },
          { code: "USD", symbol: "$", label: "US Dollar" },
          { code: "EUR", symbol: "€", label: "Euro" }
        ]
    },

    // currencies: [
    //     { code: 'INR', symbol: '₹', label: 'Rupee' },
    //     { code: 'USD', symbol: '$', label: 'Dollar' },
    //     { code: 'BDT', symbol: '৳', label: 'Taka' }
    // ]
    
    // liveStats: {
    //     matches: 12,
    //     users: 85430
    // }

    stats: {
        title: "Platform Stats",
        items: [
          { label: "Live matches today", value: 12, icon: "🔥" },
          { label: "Active users", value: "85,430", icon: "👥" }
        ]
    },

    // accessibility: {
    //     label: "Accessibility Options",
    //     path: "/accessibility",
    //     features: ["Screen Reader Friendly", "High Contrast Sync", "Keyboard Navigation"]
    // }

    accessibility: {
        title: "Accessibility",
        label: "Accessibility Options",
        description: "Customize your viewing experience",
        url: "/accessibility"
    },
    // securityBadges: [
    //     { name: "SSL Secure", icon: "Lock", color: "#4CAF50" },
    //     { name: "ISO 27001", icon: "Shield", color: "#2196F3" },
    //     { name: "GDPR", icon: "Check", color: "#FF9800" }
    // ],
    // paymentMethods: [
    //     { name: "Visa", icon: "CreditCard", color: "#1A1F71" },
    //     { name: "Stripe", icon: "Payments", color: "#635BFF" }
    // ],

    securityBadges: {
        title: "Security & Compliance",
        items: [
          {
            label: "SSL Secured",
            icon: "🔐",
            description: "Encrypted connection"
          },
          {
            label: "Visa Verified",
            icon: "💳",
            description: "Secure payments"
          },
          {
            label: "Stripe Protected",
            icon: "⚡",
            description: "PCI compliant"
          },
          {
            label: "ISO Certified",
            icon: "📜",
            description: "Global standards"
          },
          {
            label: "GDPR Compliant",
            icon: "🇪🇺",
            description: "User privacy first"
          }
        ]
    },
      themeOptions: {
        modes: ["Dark", "Light"],
        default: "Dark"
    },
    themeToggle: {
        title: "Appearance",
        modes: ["Light", "Dark"],
        default: "Dark"
      }
      
};


  
  export default companyDetails;
  