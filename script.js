let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

const opentab = (tabname) => {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
};

let sidemenu = document.getElementById("sidemenu");
const openMenu = () => {
  sidemenu.style.right = "0";
};
const closeMenu = () => {
  sidemenu.style.right = "-200px";
};
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzJxudgie-DrRB8h-p8JVi408bcT7NYPMGNbDjbtQNOnSezqVDggXXhcDvnXF7oKGow/exec";
const form = document.forms["submit-to-google-sheet"];

const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank you for your response.";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
