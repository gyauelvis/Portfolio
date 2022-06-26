let toggleStatus = false;
let firstime = true;
const toggle = () => {
    if(toggleStatus === false && firstime === true){
        document.querySelector(".navCollapseOff").classList.replace("navCollapseOff","navCollapseOn");
        document.querySelector('main .wrapper').style.display="none";
        document.querySelector('article').style.display="none";
        firstime = false;
        toggleStatus = true;
    }else if(toggleStatus === true && firstime === false){
        document.querySelector(".navCollapseOn").classList.replace("navCollapseOn","navCollapseSlideOff");
        document.querySelector('main .wrapper').style.display="flex";
        document.querySelector('article').style.display="block";
        firstime = false;
        toggleStatus = false;
    }else if(toggleStatus === false && firstime === false){
        document.querySelector(".navCollapseSlideOff").classList.replace("navCollapseSlideOff","navCollapseOn");
        document.querySelector('main .wrapper').style.display="none";
        document.querySelector('article').style.display="none";
        firstime = false;
        toggleStatus = true;
    }

}