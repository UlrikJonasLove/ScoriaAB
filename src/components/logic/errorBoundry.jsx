import React from 'react';

function refreshPage() {
    window.location.reload(false);
}

class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

   

    render() {
        if(this.state.hasError) {
            return (
            <main>
                <article>
                    <h1>Woops...</h1>
                        <p>Something definitly went wrong here!!</p> 
                    <button onClick = {refreshPage}>Reload us!</button>
                </article>
            </main>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundry;