import React from  "react"
import renate from "./pic/renate.jpg"

const Info = () => {
    return (
        <div>
            <main>
                <img src={renate} alt=""/>
                <h3>About Me</h3>
                <p>
                    Being super short makes it kinda crazy for me to find bikes I love to ride. I started being intrested in opening a custom motercycle shop after watching telivision shows where that is what they did. Now my goal is to help people of all sizes, shapes and walks of life find a perfect bike. We make bikes that are hand operated only, super low, and just about anything else you could ask for.
                </p>
            </main>
            <article>
                <h3>Have an idea?</h3>
                <h4>Lets Make it!</h4>
                <form>
                    <input type="text" name="name" placeholder="Your Name" />
                    <br />
                    <input type="telNo" name="phone" placeholder="Your Phone Number" />
                    <br />
                    <input type="email" name="email" placeholder="Your email" />
                    <br />
                    <button>Get Contacted</button>
                </form>
                <p>
                    We will reach out by phone first. If we can not get ahold of you within 48 hours we will email you.
                </p>
            </article>
        </div>
    )
}

export default Info