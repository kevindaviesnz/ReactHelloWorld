const reactElement = React.createElement(
"h1",
    null,
    "Hello world!!!"
);
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(reactElement);
