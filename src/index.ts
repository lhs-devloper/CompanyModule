import * as _ from 'lodash';
import './css/style.css';
import { LoadingDom } from './class/loading';
/*
function ButtonDOMTest(name: string): HTMLElement {
    const element = document.createElement('button');

    element.innerHTML = name;

    return element;
}
*/

const loading = new LoadingDom().Init();
document.body.appendChild(loading);