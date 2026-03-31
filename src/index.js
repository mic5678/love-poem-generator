function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Love is beautiful",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#love-poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
