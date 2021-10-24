const linksSocialMedias = {
  github: "joaojjb",
  youtube: "/channel/UCXsGDZVdO1fVWiMFhloo2Pw",
  facebook: "joao.guilherme.378537",
  instagram: "jaoguilherme_25",
  twitter: "",
};
function changingSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute(`class`); // O getAttribute serve para pegar um dos atributos de li, que era um objeto

    li.children[0].href = `https://${social}.com/${linksSocialMedias[social]}`;
  }
}
changingSocialMediaLinks();

function getGithubUserInformation() {
  const url = `https://api.github.com/users/${linksSocialMedias.github}`;

  fetch(url)
    .then((response) => response.json()) // até agora pegou a resposta do fecth e o then pegou a resposta e transformou em JSON
    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userImage.src = data.avatar_url;
    });
}
getGithubUserInformation();
