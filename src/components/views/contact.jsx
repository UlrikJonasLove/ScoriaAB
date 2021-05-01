import React from "react";
import Worker from '../logic/Workers.jsx'

class Contact extends React.Component {
    render() {
        return (
            <main>
                <article>
                    <h1>Contact page</h1>
                        <p>This is us, the workers on Scoria!</p>
                        <p>Please feel free to contact us</p>
                    <hr />
                    <Worker/>
                </article>
             </main>
        )
    }
}

export default Contact;