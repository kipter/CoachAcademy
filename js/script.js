if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../sw.js")
    .then((e) => {
      console.log("Registered" + e);
    })
    .catch((err) => {
      console.log(err);
    });
}

var message_box = document.querySelector(".message-box");
var bot = document.querySelector(".bot");
var need_p = document.getElementById("need-p");
var who_C = document.getElementById("who-C");
var appendBody = document.querySelector(".appendBody");

bot.addEventListener("click", function () {
  if (message_box.style.display == "block") {
    message_box.style.display = "none";
  } else {
    message_box.style.display = "block";
  }
});

need_p.onclick = function () {
  appendBody.innerHTML += `<div class="message right">
    I Need Phone No:
  </div>`;
  var a = 0;
  var int1 = setInterval(() => {
    a++;
    if (a == 1) {
      appendBody.innerHTML += `<div class="message">
    Okay! You Will Find Contact Us At There Click On It. Btw +918082881667 is The Coach Mehboob's Phone Number.
  </div>`;
      clearInterval(int1);
    }
  }, 1500);

  need_p.style.pointerEvents = "none";
  need_p.style.opacity = ".5";
};

who_C.addEventListener("click", function () {
  appendBody.innerHTML += `<div class="message right">
    Who Is Our Coach
  </div>`;
  var a = 0;
  var int1 = setInterval(() => {
    a++;
    if (a == 1) {
      appendBody.innerHTML += `<div class="message">
    So, Your Coach's Name is Mehboob, He is teacher at noor-ul-aloom
  </div>`;
      clearInterval(int1);
    }
  }, 1500);

  who_C.style.pointerEvents = "none";
  who_C.style.opacity = ".5";
});
