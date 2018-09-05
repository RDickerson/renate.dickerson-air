import React from "react"

const Form = () => {
    return (
        <form>
            <input type="text" name="img" placeholder="Img URL" value=""/>
            <input type="text" name="title" placeholder="Title" value=""/>
            <input type="text" name="description" placeholder="Description" value=""/>
            <button>Submit</button>
        </form>
    )
}

export default Form