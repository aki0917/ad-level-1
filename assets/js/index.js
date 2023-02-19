//
//定義
//

//クラス名
const actionColor = document.querySelectorAll(".main__rightColor");
//console.log(actionColor);
const actionSizes = document.querySelectorAll(".main__rightSize");
//console.log(actionSize);

//id取得
const actionImage = document.getElementById("actionImage");
//console.log(actionImage);
const actionPrice = document.getElementById("actionPrice");
//console.log(actionPrice);

//
//関数
//
const changeColor = (e) => {
  const target = e.target;
  //console.log(target);
  const img = target.getAttribute("data-src");
  //console.log(img);
  actionImage.setAttribute("src",img);
};

const changePrice = (e) => {
  const target = e.target;
  //console.log(target);
  const price = target.getAttribute('data-price');
  //console.log(price);
  actionPrice.innerHTML = price;
};


//
//イベント処理
//
actionColor.forEach((elem) => {
  //console.log(elem);
  elem.addEventListener('click',(e) => {
    changeColor(e);
  });
});

actionSizes.forEach((elem) => {
  //console.log(elem);
  elem.addEventListener('click',(e) => {
    changePrice(e);
  });
});