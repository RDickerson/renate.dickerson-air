import React from 'react';

const Lap = (props) => {
    return (
        <div>
            {props.mins}:{props.secs}:{props.millaSecs}
        </div>
    );
};

export default Lap;