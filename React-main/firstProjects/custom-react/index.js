function customRender(reactElement,mainContainer){
// const domElement= document.createElement(reactElement.type);
// domElement.innerHTML=reactElement.childeren;
// domElement.setAttribute('href',reactElement.prop.href);
// domElement.setAttribute('target',reactElement.prop.target);
// mainContainer.appendChild(domElement);

const domElement= document.createElement(reactElement.type);
domElement.innerHTML=reactElement.childeren;
for (const prop in reactElement.prop) {debugger;
    if(prop=='childeren')continue;
    domElement.setAttribute(prop,reactElement.prop[prop])
        
    }

// domElement.setAttribute('href',reactElement.prop.href);
// domElement.setAttribute('target',reactElement.prop.target);
mainContainer.appendChild(domElement);
}
var reactElement = {
    type: "a",
    prop: {
        href: "https://google.com",
        target: "blank"
    },
    childeren:"Click me to visit google"
}
var mainContainer = document.querySelector("#root")

customRender(reactElement,mainContainer)