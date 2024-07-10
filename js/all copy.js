const integral = document.querySelectorAll(".integral");

let answer = [0, 0, 0, 0, 0];
console.log(answer, "修改前");
let a = 0;

// 下一道題目
const question2 = document.querySelector("#question2");
const question3 = document.querySelector("#question3");
const question4 = document.querySelector("#question4");
const question5 = document.querySelector("#question5");
const header = document.querySelector(".header");
// 顯示分數
const showIntegralBtn = document.querySelector("#showIntegralBtn");

// 分數
integral.forEach((item, ind) => {
    item.addEventListener("click", () => {
        let id = item.getAttribute("data-id");
        let checkValue = item.getAttribute("data-value");
        item.classList.remove("activeBtn");
        if (id == ind) {
            a = parseInt(checkValue);
        }

        if (id <= 3) {
            answer.splice(0, 1, a);
            window.scrollTo({
                top: question2.offsetTop - header.clientHeight,
                behavior: "smooth",
            });
            console.log(answer, "answer1 修改後");
        } else if (id <= 7) {
            answer.splice(1, 1, a);
            window.scrollTo({
                top: question3.offsetTop - header.clientHeight,
                behavior: "smooth",
            });
            console.log(answer, "answer2 修改後");
        } else if (id <= 11) {
            answer.splice(2, 1, a);
            window.scrollTo({
                top: question4.offsetTop - header.clientHeight,
                behavior: "smooth",
            });
            console.log(answer, "answer3 修改後");
        } else if (id <= 15) {
            answer.splice(3, 1, a);
            window.scrollTo({
                top: question5.offsetTop - header.clientHeight,
                behavior: "smooth",
            });
            console.log(answer, "answer4 修改後");
        } else if (id <= 20) {
            answer.splice(4, 1, a);
            window.scrollTo({
                top: showIntegralBtn.offsetTop - header.clientHeight,
                behavior: "smooth",
            });
            console.log(answer, "answer5 修改後");
        }
    });
});

// 顯示分數 打開相對應頁面
showIntegralBtn.addEventListener("click", () => {
    // 計算分數
    console.log(answer);
    let showAnswer = 0;
    const showNUM = answer.reduce((a, b) => a + b, showAnswer);
    console.log(showNUM)
    // 印出分數
    const showIntegral = document.querySelectorAll(".showIntegral");
    // showIntegral.innerHTML = `<h2>您的成績:  ${showNUM} 分</h2>`;
    showIntegral.forEach(item=>{
        item.innerHTML = `<h2>您的成績:  ${showNUM} 分</h2>`;
    })

    const showFinal = document.querySelectorAll(".showFinal");
    // showFinal.classList.remove("show");

    // 分數到達打開該區塊
    const view1 = document.querySelector(".view1");
    const view2 = document.querySelector(".view2");
    const view3 = document.querySelector(".view3");
    const view4 = document.querySelector(".view4");
    view1.classList.remove("show");
    view2.classList.remove("show");
    view3.classList.remove("show");
    view4.classList.remove("show");

    // if (showNUM <= 5) {
    //     showFinal.classList.toggle("show");
    //     view1.classList.toggle("show");
    // } else if (showNUM <=10 && showNUM >5) {
    //     showFinal.classList.toggle("show");
    //     view2.classList.toggle("show");
    // }
    showFinal.forEach((item,ind) => {
        console.log(item[0])
        item.classList.remove("show")
        if (showNUM <= 5 && ind==0) {
            item.classList.toggle("show");
            view1.classList.toggle("show");
            window.scrollTo({
                top: item.offsetTop - header.clientHeight,
                behavior: "smooth",
            });
        } else if (showNUM <= 10 && showNUM > 5 && ind==1) {
            item.classList.toggle("show");
            view2.classList.toggle("show");
            window.scrollTo({
                top: item.offsetTop - header.clientHeight,
                behavior: "smooth",
            });
        }
        else if (showNUM <= 15 && showNUM > 10 && ind==2) {
            item.classList.toggle("show");
            view3.classList.toggle("show");
            window.scrollTo({
                top: item.offsetTop - header.clientHeight,
                behavior: "smooth",
            });
        }
        else if (showNUM <= 20 && showNUM > 15 && ind==3) {
            item.classList.toggle("show");
            view4.classList.toggle("show");
            window.scrollTo({
                top: item.offsetTop - header.clientHeight,
                behavior: "smooth",
            });
        }
    })
});




// POP UP
const one = document.querySelector(".thing8__1")
const two = document.querySelector(".thing8__2")
const three = document.querySelector(".thing8__3")
const pop1 = document.querySelector(".pop1")
const pop2 = document.querySelector(".pop2")
const pop3 = document.querySelector(".pop3")

const popBg = document.querySelectorAll(".popBg")
popBg.forEach(item=>{
    item.addEventListener("click",()=>{
        item.classList.toggle("popShow")
    })
})
one.addEventListener("click",()=>{
    pop1.classList.toggle("popShow")
})
two.addEventListener("click",()=>{
    pop2.classList.toggle("popShow")
})
three.addEventListener("click",()=>{
    pop3.classList.toggle("popShow")
})