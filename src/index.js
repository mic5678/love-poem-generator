
function generatePoem(event) {
  event.preventDefault(); 
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}


  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "7ao9826852a4b8038td2ff4e87b113f2";
  let prompt = `User instructions: Generate a love poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic Poem expert and loves writing short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemFormElement = document.querySelector("#poem");
  poemFormElement.classList.remove("hidden");
  poemFormElement.innerHTML = ` ⌛️ Generating Love Poem about ${instructionsInput.value}`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#love-poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
