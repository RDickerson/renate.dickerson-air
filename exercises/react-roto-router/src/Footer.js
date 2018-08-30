import React from 'react';

const Footer = () => {

    const styles = {
        div: {
            fontSize: "26px",
            width: "100%",
            height: "100px",
            backgroundColor: "green",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }
    }

    return (
        <div style={styles.div}>
            Footer
        </div>
    );
};

export default Footer;