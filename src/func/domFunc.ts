import VirtualDom from "../class/VirtualDom";

export const createElement = (node: VirtualDom|string) =>{
    if(typeof node === 'string'){
        return document.createTextNode(node);
    }

    const $el = document.createElement(node.type);

    Object.entries(node.props || {})
        .filter(([attr, value]:[string, any]) => value)
        .forEach(([attr, value]:[string, any]) =>{
            $el.setAttribute(attr, value);
        });

    const children = node.children.map(createElement);

    children.forEach(child => $el.appendChild(child));
    return $el;
}