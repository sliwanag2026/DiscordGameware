document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    var real = document.getElementById("allofit");
    real.onclick = function() {
      setTimeout(() => {
        document.getElementById("animationpart").style.opacity = "0.0";
        document.getElementById("animationpart").style.transitionDuration = "0.3s";
      }, 100)
      setTimeout(() => {
        document.getElementById("animationpart").style.display = "none";
      }, 400)
      setTimeout(() => {
        document.getElementById("login").style.display = "block";
      }, 400)
      setTimeout(() => {
        document.getElementById("login").style.animation = "loginanimation 2s forwards";
      }, 400)
    }
  }, 2000)
}, false);

function pass() {
  let logininfo = [];
  logininfo[0] = document.getElementById("name").value;
  logininfo[1] = document.getElementById("address").value;
  logininfo[2] = document.getElementById("email").value;
  if ((logininfo[0] == "") || (logininfo[1] == "") || (logininfo[2] == "")) {
    document.getElementById("name").value = null;
    document.getElementById("address").value = null;
    document.getElementById("email").value = null;
    noinputerror();
  } else {
    localStorage.setItem("logininfo", JSON.stringify(logininfo));
    setTimeout(() => { location.replace("shop.html") }, 750);
  }
}

function noinputerror() {
  document.getElementById("errors").innerHTML = '<div id="errormessage">Please Fill Up All the Information</div>'
  setTimeout(() => { document.getElementById("errors").innerHTML = ""; }, 3000);
}