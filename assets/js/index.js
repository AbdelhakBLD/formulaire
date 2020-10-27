let form = document.querySelector("form#form");
let pseudo = document.querySelector("input#pseudo");
let email = document.querySelector("input#email");
let motdepasse = document.querySelector("input#motdepasse");
let motdepasseconfirmer = document.querySelector("input#motdepasseconfirmer");
let submit = document.querySelector("button#submit");

let pseudoVerif = false;
let emailVerif = false;
let motdepasseVerif = false;
let motdepasseconfirmerVerif = false;

pseudo.addEventListener("blur", (e) => {
  e.preventDefault();
  checkInputs();
});

email.addEventListener("blur", (e) => {
  e.preventDefault();
  checkInputs();
});

motdepasse.addEventListener("blur", (e) => {
  e.preventDefault();
  checkInputs();
});

motdepasseconfirmer.addEventListener("blur", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  let pseudoValue = pseudo.value;
  let emailValue = email.value;
  let motdepasseValue = motdepasse.value;
  let motdepasseconfirmerValue = motdepasseconfirmer.value;

  if (pseudoValue === "") {
    pseudoVerif = false;
    setErrorFor(pseudo, "Le pseudo ne peut pas être vide");
  } else {
    pseudoVerif = true;
    setSuccessFor(pseudo);
  }

  if (emailValue === "") {
    emailVerif = false;
    setErrorFor(email, "L'email ne peut pas être vide");
  } else if (!isEmail(emailValue)) {
    emailVerif = false;
    setErrorFor(email, "Email non valide");
  } else {
    emailVerif = true;
    setSuccessFor(email);
  }

  if (motdepasseValue === "") {
    motdepasseVerif = false;
    setErrorFor(motdepasse, "Le mot de passe ne peut pas être vide");
  } else {
    motdepasseVerif = true;
    setSuccessFor(motdepasse);
  }

  if (motdepasseconfirmerValue === "") {
    motdepasseconfirmerVerif = false;
    setErrorFor(
      motdepasseconfirmer,
      "Le mot de passe de confirmation ne peut pas être vide"
    );
  } else if (motdepasseValue !== motdepasseconfirmerValue) {
    motdepasseconfirmerVerif = false;
    setErrorFor(motdepasseconfirmer, "Les mots de passe ne coïncide pas");
  } else {
    motdepasseconfirmerVerif = true;
    setSuccessFor(motdepasseconfirmer);
  }
}

function setErrorFor(input, message) {
  let formControl = input.parentElement;
  let small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
  envoyerBtn();
}

function setSuccessFor(input) {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
  envoyerBtn();
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function tousLesFeuxSontAuVert() {
  if (
    pseudoVerif &&
    emailVerif &&
    motdepasseVerif &&
    motdepasseconfirmerVerif
  ) {
    return true;
  } else {
    return false;
  }
}

function envoyerBtn() {
  submit.disabled = !tousLesFeuxSontAuVert();
  console.log(tousLesFeuxSontAuVert());
}
