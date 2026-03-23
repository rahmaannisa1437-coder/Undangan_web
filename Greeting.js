const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", () => {
  const name = document.querySelector("input").value;
  const messages = document.querySelectorAll("textarea");

  const address = messages[0].value;
  const greeting = messages[1].value;

  if (name === "" || greeting === "") {
    alert("Please fill your name and greeting");
    return;
  }

  const data = {
    name,
    address,
    greeting,
  };

  let list = JSON.parse(localStorage.getItem("weddingGreeting")) || [];

  list.push(data);

  localStorage.setItem("weddingGreeting", JSON.stringify(list));

  alert("Thank you for your greeting ❤️");

  document.querySelector("input").value = "";
  messages[0].value = "";
  messages[1].value = "";
});
