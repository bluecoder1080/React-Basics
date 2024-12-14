// Nested HTML DOM
const parent = React.createElement(
    "div",
    { id: "parent" }, // Use a string here for the id
    React.createElement(
      "div",
      { id: "child" },
      [React.createElement("h1", {}, "Hii I AM From H1"), React.createElement("h2", {}, "Hii I AM From H2")]
    )
  );
  
  // const heading = React.createElement("h1", {id: "head"}, "Hello World From React!!");
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
  