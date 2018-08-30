import React from "react"

const Home = () => {

    const styles = {
        div: {
            fontSize: "26px",
            width: "100%",
            height: "250px",
            backgroundColor: "yellow",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }
    }

    return (
        <div style={styles.div}>
            Home
        </div>
    )
}

export default Home