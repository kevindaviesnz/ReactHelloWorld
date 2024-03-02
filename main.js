// App.js
import React from 'react';
import ReactDOM from 'react-dom';

// Define the HelloComponent inside the same file
function HelloComponent() {
    return <h2>Hello from HelloComponent!</h2>;
}

// Define the App component
function App() {
    return (
        <div>
            <h2>Hi</h2>
        </div>
    );
}

// Render the App component into the root element
ReactDOM.render(<App />, document.getElementById('root'));

