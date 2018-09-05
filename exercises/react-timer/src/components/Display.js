import React from 'react';
import {connect} from "react-redux"

const Display = (props) => {

    return (
        <div>
            <h1>{props.mins}:{props.secs}:{props.millaSecs}</h1>
        </div>
    );
};

export default connect(state=>state, {})(Display);