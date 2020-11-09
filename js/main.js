const els = {
  // elements
  coverEl: null,
  coverBtn: null,
  signupEl: null,
  loginEl: null,
};

const init = () => {
  els.coverEl = document.querySelector(".cover");
  els.coverBtn = els.coverEl.querySelector(".cover button");
  els.loginEl = document.querySelector(".login");
  els.signupEl = document.querySelector(".signup");

  els.coverBtn.addEventListener("click", () => {
    if (els.coverEl.classList.contains("go-right") === true) {
      // Go left - Display signup
      els.coverEl.classList.remove("go-right");
      els.coverEl.classList.add("go-left");
      els.loginEl.classList.remove("show");
      els.loginEl.classList.add("hide");
      setTimeout(() => {
        els.signupEl.classList.remove("hide");
        els.signupEl.classList.add("show");
        els.coverBtn.textContent = "Create an account";
      }, 500);
    } else {
      // Go right - Display login
      els.coverEl.classList.remove("go-left");
      els.coverEl.classList.add("go-right");
      els.signupEl.classList.remove("show");
      els.signupEl.classList.add("hide");
      setTimeout(() => {
        els.loginEl.classList.remove("hide");
        els.loginEl.classList.add("show");
        els.coverBtn.textContent = "Create an account";
      }, 500);
    }
  });
};

window.addEventListener("load", init);
