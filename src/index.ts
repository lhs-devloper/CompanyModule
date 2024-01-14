import * as _ from 'lodash';
import './css/style.css';
import { LoadingDom } from './class/Loading';
import LoadingType from './enum/LoadingEnum';
/*
function ButtonDOMTest(name: string): HTMLElement {
    const element = document.createElement('button');

    element.innerHTML = name;

    return element;
}
*/

const LoadDom = new LoadingDom();
document.body.appendChild(LoadDom.Init(LoadingType.Front));


LoadDom.Loading();

setTimeout(()=>{
    LoadDom.Stop();
}, 3000)