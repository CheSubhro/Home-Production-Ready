
import { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Box } from "@mui/material";
import "./Footer.css";

const BackToTop = ({ threshold = 200 }) => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > threshold) {
        setVisible(true);
        } else {
        setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        visible && (
        <Box className="back-to-top" onClick={scrollToTop}>
            <ArrowUpwardIcon />
        </Box>
        )
    );
};

export default BackToTop;