import React, { Component } from "react"
import HelloWorld from "./helloworld"
class App extends Component {
    render() {
        return React.createElement(HelloWorld)
    }
}
export default App