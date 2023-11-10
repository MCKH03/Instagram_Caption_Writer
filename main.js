"use strict";

const form = document.querySelector(".form");
const inputTitle = document.querySelector(".input-title");
const inputDescription = document.querySelector(".input-description");
const inputHashtags = document.querySelector(".input-hashtags");
const copyBtn = document.querySelector(".copy-btn");
const caption = document.querySelector(".text");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = inputTitle.value;
  const description = inputDescription.value;
  const hashtags = inputHashtags.value;

  caption.innerHTML = `
  ${title} <br />
  ${description} <br /> <br />
  ${generateHashtags(hashtags)}
  `;

  clearInputs();
});

copyBtn.addEventListener("click", function (e) {
  if (caption.textContent.length === 0)
    return console.log("There is no available caption!");

  navigator.clipboard.writeText(caption.textContent);
  console.log(caption.textContent);
});

function clearInputs() {
  inputTitle.value = "";
  inputDescription.value = "";
  inputHashtags.value = "";
}

function generateHashtags(hashtags) {
  const arr = hashtags.split("،");
  const hashtagsArr = arr.map((tag) => `#${tag.trim()}`);
  return hashtagsArr.join(" ");
}
