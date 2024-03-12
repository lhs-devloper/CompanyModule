class VirtualDom{
    type: string;
    props: object;
    children: Array<VirtualDom|string>;

    constructor(type: string, props:object, children:Array<VirtualDom|string>){
        this.type = type;
        this.props = props;
        this.children = children;
    }
}

export default VirtualDom;
