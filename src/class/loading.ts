import LoadingType from "../enum/LoadingEnum";
import LoadingStyle from "../enum/LoadingStyle";

export class LoadingDom {
    loadingType : LoadingType = LoadingType.Front;
    loadingStyle: LoadingStyle = LoadingStyle.Bar;
    containerDiv: HTMLDivElement;
    boxDiv: HTMLDivElement;
    loadingDiv: HTMLDivElement;
    
    Init(loadingType?: LoadingType, loadingStyle?: LoadingStyle): HTMLDivElement {
        // 표준 로딩 바
        loadingStyle === undefined ? this.loadingStyle = LoadingStyle.Bar : this.loadingStyle = loadingStyle;
        // 표준 로딩 타입은 프론트
        loadingType === undefined ? this.loadingType = LoadingType.Front : this.loadingType = loadingType;
        
        this.containerDiv = document.createElement('div');
        this.boxDiv = document.createElement('div');
        this.loadingDiv = document.createElement('div');

        this.containerDiv.appendChild(this.boxDiv);
        this.boxDiv.appendChild(this.loadingDiv);
        return this.containerDiv;
    }
    Loading(speed ?:number): void {
        const loadingSpeed = speed === undefined ? 500 : speed;
        this.containerDiv.classList.add("container");
        this.boxDiv.classList.add("loading-box")
        this.loadingDiv.classList.add("loading-"+this.loadingStyle);
        addEventListener("DOMContentLoaded", ()=>{
            const loadingTag = document.getElementsByClassName("loading-"+this.loadingStyle)[0];
            
            function updateLoadingBar(progress: number) {
                loadingTag.setAttribute("style", "width: " + progress + "%"); 
            }
            let progress = 0;
            const interval = setInterval(function () {
                progress += 10;
                updateLoadingBar(progress);
        
                if (progress >= 100) {
                  clearInterval(interval);
                }
            }, loadingSpeed);  
        })
        
    }
    Stop(): void {
        this.containerDiv.classList.remove("container");
        this.boxDiv.classList.remove("loading-box")
        this.loadingDiv.classList.remove("loading"+this.loadingStyle);
    }
}