let toggleButton = document.querySelector(".toggleButtonLink")
let toggleStatus = false;
let firstTime = true;
let navClass = document.querySelector(".navCollapseOff");
let wrapper = document.querySelector(".wrapper");
let articleTag = document.querySelector("article");
const toggle = (e) => {
    e.preventDefault();
    if (toggleStatus === false && firstTime === true){
        wrapper.style.display = "none";
        articleTag.style.display = "none";
        navClass.classList.replace("navCollapseOff","navCollapseOn");
        navClass = document.querySelector(".navCollapseOn");
        firstTime = false;
        toggleStatus = true;
    }else if(toggleStatus === true && firstTime === false){
        navClass.classList.replace("navCollapseOn","navCollapseSlideOff");
        wrapper.style.display = "flex";
        articleTag.style.display = "block";
        navClass = document.querySelector(".navCollapseSlideOff");
        firstTime = false;
        toggleStatus = false;
    }else if(firstTime === false && toggleStatus === false){
        wrapper.style.display = "none";
        articleTag.style.display = "none";
        navClass.classList.replace("navCollapseSlideOff","navCollapseOn");
        navClass = document.querySelector(".navCollapseOn");
        firstTime = false;
        toggleStatus = true;
    }
    
}
toggleButton.onclick = toggle;
let viewProject1 = document.querySelector(".projects .project1")
const viewProject1mouseover = () => {
    document.querySelector(".projects .project1 a").style.display = "flex";
    document.querySelector(".projects .project1 a").style.opacity = "1";
}
const viewProject1mousout = () => {
    document.querySelector(".projects .project1 a").style.display = "none";
    document.querySelector(".projects .project1 a").style.opacity = "0";
}
viewProject1.addEventListener("mouseover",viewProject1mouseover)
viewProject1.addEventListener("mouseleave",viewProject1mousout)

let viewProject2 = document.querySelector(".projects .project2")
const viewProject2mouseover = () => {
    document.querySelector(".projects .project2 a").style.display = "flex";
    document.querySelector(".projects .project2 a").style.opacity = "1";
}
const viewProject2mousout = () => {
    document.querySelector(".projects .project2 a").style.display = "none";
    document.querySelector(".projects .project2 a").style.opacity = "0";
}
viewProject2.addEventListener("mouseover",viewProject2mouseover);
viewProject2.addEventListener("mouseleave",viewProject2mousout);

let viewProject3 = document.querySelector(".projects .project3");
const viewProject3mouseover = () => {
    document.querySelector(".projects .project3 a").style.display = "flex";
    document.querySelector(".projects .project3 a").style.opacity = "1";
}
const viewProject3mousout = () => {
    document.querySelector(".projects .project3 a").style.display = "none";
    document.querySelector(".projects .project3 a").style.opacity = "0";
}
viewProject3.addEventListener("mouseover",viewProject3mouseover)
viewProject3.addEventListener("mouseleave",viewProject3mousout)

let viewProject4 = document.querySelector(".projects .project4");
const viewProject4mouseover = () => {
    document.querySelector(".projects .project4 a").style.display = "flex";
    document.querySelector(".projects .project4 a").style.opacity = "1";
}
const viewProject4mousout = () => {
    document.querySelector(".projects .project4 a").style.display = "none";
    document.querySelector(".projects .project4 a").style.opacity = "0";
}
viewProject4.addEventListener("mouseover",viewProject4mouseover)
viewProject4.addEventListener("mouseleave",viewProject4mousout)
