function CustomRender(reactElement,container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children
    /*
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)
    */
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)


}

const reactElement = {
    type: 'a',
    props: {
        href: 'http://google.com',
        target: '_blank'
    },
    Children: 'Click me to visit google'
}



const maincontainer = document.querySelector('#root');

CustomRender(reactElement,maincontainer);
