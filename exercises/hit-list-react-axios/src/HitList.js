import React from "react"


const HitList = (props) => {

    const styles = {
        main: {
            display: "grid",
            gridTemplateAreas: "repete(3, 1fr) / 225px 225px"
        },
        div: {
            gridColumn: 1/-1
        }

    }

    return (
        <div style={styles.main}>
            <div style={styles.div}>
                <img src={props.image} alt="" height="150px"/>
                <h1>{props.name}</h1>
            </div>
        </div>
    );
};

export default HitList;