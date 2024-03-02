import React, { Component } from "react";
import ReactDOM from 'react-dom';
import HelloWorld from "./HelloWorld.jsx";

class App extends Component {
    render() {
        return <HelloWorld/>;
    }
}

// Render the App component into the div with id 'root'
ReactDOM.render(<App />, document.getElementById('root'));

export default App;
