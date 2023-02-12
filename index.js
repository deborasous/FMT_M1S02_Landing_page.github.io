let msg = document.getElementById("box-form");

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let mensage = document.getElementById("mensage");

  // cria uma tag p dentro da div#mensage
  let createTag = document.createElement("p");
  mensage.appendChild(createTag);

  // função para apagar mensagem que será criada pela tag p, após 5ms
  function removeMensage() {
    setTimeout(() => {
      if (mensage.parentNode) {
        mensage.parentNode.removeChild(mensage);
      }
    }, 5000);
  }

  // faz uma verificação se os inputs estão preenchidos
  if (name !== "" || email !== "" || phone !== "") {
    mensage.style.color = "green";
    removeMensage(
      (mensage.innerHTML = "Mensagem enviada. Entraremos em contato em breve.")
    );
  } else {
    mensage.innerHTML = "Preencha todos os campos";
    mensage.style.color = "red";
  }

  form.reset();
});
