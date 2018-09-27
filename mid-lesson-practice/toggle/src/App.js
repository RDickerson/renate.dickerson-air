import React from "react"
import Toggle from "./shared/Toggle"

const App = () => {

    const styles = {
        
    }

    return (
        <div>
            <Toggle render={({isToggled, toggle}) => 
                <React.Fragment>
                    <div style={ 
                        {backgroundColor: isToggled ? "yellow" : "darkblue",
                        height: 300,
                        width: 300}
                     }></div>
                     {/* {isToggled && <h1>Here is some text</h1>}
                     {!isToggled && <h1>Some other text</h1>} */}
                    <button onClick={ toggle }>Light Switch</button>
                </React.Fragment>
            } />
            {/* <Toggle render={(props)} 
                <React.Fragment>
                    <div style={
                        {backgroundColor: props.isToggled ? "yellow" : "darkblue",
                        height: 300,
                        width: 300}
                    }></div>
                    <button onClick={props.toggle}>Light Switch</button>
                <React.Fragment>
            /> */}
            
        </div>
    )
}

export default App