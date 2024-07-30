/**
 * <div id= "parent">
 *      <div id="child">
 *          <h1>this is a h1 Tag.</h1>
 *          <h2>this is a h2 Tag.</h2>
 *      </div>
 * <div/>
 *  if u want to make the structure more complex like
 * <div id= "parent">
 *      <div id="child">
 *          <h1>this is a h1 Tag.</h1>
 *          <h2>this is a h2 Tag.</h2>
 *      </div>
 * <div id="child2">
 *          <h1>this is a h1 Tag.</h1>
 *          <h2>this is a h2 Tag.</h2>
 *      </div>
 * <div/>
 * it can be do in reacyt as by using the List of arrays --
 * const parent = React.createElement(
 *  "div",
 *  { id: "parent" },
 * [
 * React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "Jai shree Ram"),
        React.createElement("h2", {}, "Jai Shree Krishna")
    ]),React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "Jai shree Ram"),
        React.createElement("h2", {}, "Jai Shree Krishna")
    ])
    ]
 * 
 *  
 * 
 * 
 * 
 */
const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "Jai shree Ram"),
        React.createElement("h2", {}, "Jai Shree Krishna")
    ]),React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "Jai shree Ram"),
        React.createElement("h2", {}, "Jai Shree Krishna")
    ])
    ]
);



console.log(parent);
// const heading = React.createElement("h1", { id: "heading" }, "hello world from React !");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); 
root.render(parent);
 


 
     

