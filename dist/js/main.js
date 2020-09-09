const url = location.pathname,
  index = url.lastIndexOf("/") + 1,
  fileName = url.substring(index),
  home = "index.html",
  contact = "contact.html",
  offers = "offers.html",
  signup = "signup.html",
  dailyImgs = ["./img/1.jpg", "./img/2.jpg"],
  weeklyImgs = ["./img/3.jpg", "./img/4.jpg"],
  monthlyImgs = ["./img/4.jpg", "./img/5.jpg"],
  yearlyImgs = ["./img/2.jpg", "./img/1.jpg"];

var i = 0,
  time = 3000;

if (fileName === offers) {
  function slideFn() {
    document.dailyslider.src = dailyImgs[i];
    document.weeklyslider.src = weeklyImgs[i];
    document.monthlyslider.src = monthlyImgs[i];
    document.yearlyslider.src = yearlyImgs[i];
    if (i < dailyImgs.length - 1) {
      i++;
    } else {
      i = 0;
    }
    setTimeout("slideFn()", time);
  }
  window.onload = slideFn;
}
