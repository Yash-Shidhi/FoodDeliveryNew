const btn = document.querySelector(".button");

const a = document.getElementById("signin");

const home = document.getElementById("home");

const about = document.getElementById("about");

const menu = document.getElementById("menu");

const fb = document.getElementById("facebook");

const twitter = document.getElementById("twitter");

const linkedin = document.getElementById("linkedin");

btn.addEventListener("mouseenter", () => {
  btn.style.backgroundColor = "darkred";
  a.style.color = "white";
});
btn.addEventListener("mouseleave", () => {
  btn.style.backgroundColor = "white";
  a.style.color = "darkred";
});

fb.addEventListener("mouseenter", () => {
  fb.style.backgroundColor = "blue";
});
fb.addEventListener("mouseleave", () => {
  fb.style.backgroundColor = "";
});

twitter.addEventListener("mouseenter", () => {
  twitter.style.backgroundColor = "lightblue";
});
twitter.addEventListener("mouseleave", () => {
  twitter.style.backgroundColor = "";
});

linkedin.addEventListener("mouseenter", () => {
  linkedin.style.backgroundColor = "darkblue";
});
linkedin.addEventListener("mouseleave", () => {
  linkedin.style.backgroundColor = "";
});

about.addEventListener("mouseenter", () => {
  about.style.textDecoration = "underline";
});
about.addEventListener("mouseleave", () => {
  about.style.textDecoration = "";
});

home.addEventListener("mouseenter", () => {
  home.style.textDecoration = "underline";
});
home.addEventListener("mouseleave", () => {
  home.style.textDecoration = "";
});

menu.addEventListener("mouseenter", () => {
  menu.style.textDecoration = "underline";
});
menu.addEventListener("mouseleave", () => {
  menu.style.textDecoration = "";
});
