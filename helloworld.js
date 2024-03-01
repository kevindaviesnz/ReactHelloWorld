class  HelloWorld extends React.Component {
    render() {
        return React.createElement(
            "h1",
            {"yourname":"Atilla"},
            "Hey world!!!"
        );  
    }
}
const greeting = React.createElement(HelloWorld)
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(greeting);
