import React from "react"

import sport1 from "./pic/sport1.jpg"
import sport2 from "./pic/sport2.jpg"
import sport3 from "./pic/sport3.jpg"
import sport4 from "./pic/sport4.jpg"
import sport5 from "./pic/sport5.jpg"
import sport6 from "./pic/sport6.jpg"

const Products = () => {
    return (
        <div className="imgs">
            <div className="img-one">
                <img src={sport1} alt="" height="300px" width="300px"/>
                <img src={sport2} alt="" height="300px" width="300px"/>
                <img src={sport3} alt="" height="300px" width="300px"/>
            </div>
            <div className="img-two">
                <img src={sport4} alt="" height="300px" width="300px"/>
                <img src={sport5} alt="" height="300px" width="300px"/>
                <img src={sport6} alt="" height="300px" width="300px"/>
            </div>
        </div>
    )
}

export default Products