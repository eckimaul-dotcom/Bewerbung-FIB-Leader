const btn = document.getElementById("openBtn");
const landing = document.getElementById("landing");
const akte = document.getElementById("akte");

btn.onclick = () => {

landing.style.display = "none";
akte.style.display = "block";

window.scrollTo(0,0);

};
