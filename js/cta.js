// 撱箇�𠵾TA蝯鞉�� S
const div = document.createElement("div");
div.setAttribute("id", "cta");

div.innerHTML = `
<a  href="${CTAdata.href}"id="${CTAdata.lnkID}" pastr="${CTAdata.pastr}">
<picture>
<source srcset="${CTAdata.spImg}" media="(max-width: 1000px)">
<img src="${CTAdata.pcImg}" alt="MDN">
</picture>
</a>
`;
document.body.appendChild(div);
// 撱箇�𠵾TA蝯鞉�� E

// CTA璅���
resize();

function resize() {
    // �𪑛蝔格見撘�
    let show = CTAdata.variation;
    console.log(show);
    const cta = document.querySelector("#cta");
    if (show == 1) {
        console.log("hello1");
        const width = window.innerWidth;
        if (width >= 1000) {
            cta.style.cssText = `
            position: fixed;
            right: 2%; 
            bottom: 2%;    
            width: 12%;
            display:none; 
            z-index:999`;
        } else {
            cta.style.cssText = ` 
            position: fixed; 
            width: 100% ;
            right: 0;
            bottom: 0;
            display:none; 
            z-index:999`;
        }
    } else if (show == 2) {
        console.log("hello2");
        cta.style.cssText = `
        position: fixed;
        right: 50%;
        transform: translate(50%, 0%);
        bottom: 0%;
        width: 100%;
        max-width: 700px;
        display: none;
        z-index: 999;`;
    } else if (show == 3) {
        console.log("hello3");
        cta.style.cssText = `
            position: fixed;
            right: 2%; 
            bottom: 2%;    
            width: clamp(125px ,11vw ,400px);
            display:none; 
            z-index:999`;
    }
}
window.onresize = resize;

const Link = document.querySelector("#cta a");
if (CTAdata.href.charAt(0) == "#") {
    Link.setAttribute("class", "scrollLink");
}

window.addEventListener("scroll", function() {
    //閬��銁�𪑛�枂�𣶹
    let afterFV = document.getElementById("ctaStart").offsetTop;
    //閬��銁�𪑛瘨�仃
    let offerClose = document.getElementById("ctaEnd").offsetTop;
    // let cta = document.querySelector(".cta");
console.log(window.scrollY,"scrollY")
console.log(afterFV)
console.log(offerClose,offerClose.offsetTop)
    if (window.scrollY <= afterFV) {
        cta.style.display = "none";
    } else if (window.scrollY >= offerClose) {
        cta.style.display = "none";
    } else {
        cta.style.display = "block";
    }
});