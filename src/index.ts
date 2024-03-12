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

const test = document.getElementById("test");
const LoadDom = new LoadingDom();
test.appendChild(LoadDom.Init(LoadingType.Front));


LoadDom.Loading(60);
/*
setTimeout(()=>{
    LoadDom.Stop();
}, 3000)
*/