import React from 'react';

class DangerFetch extends React.Component {
    render() {
        var r = Math.random();
        if(r < 0.2) {
            throw new Error ("Failed to fetch the data")
        }

        return (
            <main>
                <article>
                    <h1>Test for error boundry</h1>
                        <p>{r}</p>
                            <p>If the number gets below 0.2, the site will crash.</p>
                </article>
            </main>
        )
    }
}

export default DangerFetch;
