
// 計算分數
const integral = document.querySelectorAll(".integral");
let answer = [0, 0, 0, 0, 0];
console.log(answer, "修改前");
let a = 0;
integral.forEach((item, ind) => {
  item.addEventListener("click", () => {
    let id = item.getAttribute("data-id");
    let checkValue = item.getAttribute("data-value");
    if (id == ind) {
      // 將data-value的值 帶入a裡面
      a = parseInt(checkValue);
    }
    

    if (id <= 3) {
      answer.splice(0, 1, a);
      console.log(answer, "answer1 修改後");
      showTotal()
    } else if (id <= 7) {
      answer.splice(1, 1, a);
      console.log(answer, "answer2 修改後");
      showTotal()
    } else if (id <= 11) {
      answer.splice(2, 1, a);
      console.log(answer, "answer3 修改後");
      showTotal()
    } else if (id <= 15) {
      answer.splice(3, 1, a);
      console.log(answer, "answer4 修改後");
      showTotal()
    } else if (id <= 20) {
      answer.splice(4, 1, a);
      console.log(answer, "answer5 修改後");
      showTotal()
    }

    
  });
});


// 每一道【答案】
const answerNumber = document.querySelectorAll("[data-answerNumber]")
console.log(answerNumber)

// 下一到題目出現
let nextQAnumber = 0;

answerNumber.forEach((item, ind) => {
  item.addEventListener("click", () => {
    console.log(item)
    console.log(nextQAnumber, " console.log(nextQAnumber)")
    if (ind == nextQAnumber) {
      nextQA(ind)
      console.log(nextQAnumber)
      nextQAnumber += 1;

    }
  })
})


// 每一道【題目】
const QAcontrol = document.querySelectorAll(".QAcontrol");
// 讀取畫面
const loading = document.querySelectorAll(".loading");

function nextQA(number) {
  console.log("hello")
  loading.forEach((loadingItem) => {
    let loadingNumber = loadingItem.getAttribute("data-loading");
    if (number == loadingNumber) {
      loadingItem.classList.add("loading--show")
      scrollBottom(loadingItem)
      setTimeout(() => {
        loadingItem.classList.remove("loading--show")
        QAcontrol.forEach((QAitem, ind) => {
          if (number == ind) {
            QAitem.classList.add("QAcontrol--show", "fadeInLeft")
            scrollBottom(QAitem)
          }
        })
      }, 1500)
    }
  })
}
// 點擊滾動到指定位子
function scrollBottom(el) {
  console.log(el.offsetTop);
  window.scrollTo({ behavior: "smooth", top: el.offsetTop - 10 });
}

let showAnswer = 0;
// 計算總分
function showTotal() {
  const showNUM = answer.reduce((a, b) => a + b, showAnswer);
  console.log(showNUM,"showNUM")
  // 印出分數
  const showIntegral = document.querySelector(".showIntegral");
  showIntegral.innerHTML = `<h2>${showNUM} 分</h2>`
  const answerView = document.querySelectorAll(".answerView");
  answerView.forEach((item, ind) => {
    // console.log(item[0])
    item.classList.remove("show");
    if (showNUM <= 5 && ind==0) {
      item.classList.add("show");
    } else if (showNUM <= 10 && showNUM > 5 && ind==1) {
      item.classList.add("show");
    }
    else if (showNUM <= 15 && showNUM > 10 && ind==2) {
      item.classList.add("show");
    }
    else if (showNUM <= 20 && showNUM > 15 && ind==3) {
      item.classList.add("show");
    }
  })

  // 分數到達打開該區塊
  const showFinal = document.querySelectorAll(".showFinal");
  console.log(showFinal)


  showFinal.forEach((item, ind) => {
    // console.log(item[0])
    item.classList.remove("show");
    if (showNUM <= 5 && ind==0) {
      item.classList.add("show");
    } else if (showNUM <= 10 && showNUM > 5 && ind==1) {
      item.classList.add("show");
    }
    else if (showNUM <= 15 && showNUM > 10 && ind==2) {
      item.classList.add("show");
    }
    else if (showNUM <= 20 && showNUM > 15 && ind==3) {
      item.classList.add("show");
    }
  })
}



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