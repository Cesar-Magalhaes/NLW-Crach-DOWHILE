const SocialMediaLinks = {
  github: 'Cesar-Magalhaes',
  youtube: 'UCSVfrypks2By-mySySmeo5Q',
  facebook: 'CesarVMagalhaes',
  instagram: 'razeak66',
  twitter: 'CesarMagalhaesJ'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${SocialMediaLinks[social]}`
  }
}
//nao está alterando porque o meu SocialMediaLinks são os meus
changeSocialMediaLinks()

function getGitHubProfilesInfos() {
  const url = `https://api.github.com/users/${SocialMediaLinks.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textcontent = data.name
      UserImage.src = data.avatar_url
      userBio.textcontent = data.userBio
      userGitHub.href.textcontent = data.html_url
      userLogin.textcontent = data.login
    })
}

getGitHubProfilesInfos()
