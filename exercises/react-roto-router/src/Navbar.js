import React from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {

    const styles = {
        div: {
            width: "100%",
            height: "100px",
            backgroundColor: "purple",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        links: {
            padding: "10px",
            fontSize: "26px",
            color: "black",
        }
    }

    return (
        <div style={styles.div}>
            <Link style={styles.links} to="/">Home</Link> 
            <Link style={styles.links} to="/about">About</Link> 
            <Link style={styles.links} to="/services">Services</Link> 
        </div>
    );
};

export default Navbar;