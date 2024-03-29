import LoadingType from "../enum/LoadingEnum";

export class LoadingDom {
    loadingType : LoadingType;
    containerDiv: HTMLDivElement
    boxDiv: HTMLDivElement
    loadingDiv: HTMLDivElement

    Init(loadingType :LoadingType): HTMLDivElement {
        this.loadingType = loadingType;
        this.containerDiv = document.createElement('div');
        this.boxDiv = document.createElement('div');
        this.loadingDiv = document.createElement('div');

        this.containerDiv.appendChild(this.boxDiv);
        this.boxDiv.appendChild(this.loadingDiv);
        return this.containerDiv;
    }
    Loading(): void {
        this.containerDiv.classList.add("container");
        this.boxDiv.classList.add("box")
        this.loadingDiv.classList.add("loader");
    }
    Stop(): void {
        this.containerDiv.classList.remove("container");
        this.boxDiv.classList.remove("box")
        this.loadingDiv.classList.remove("loader");
    }
}