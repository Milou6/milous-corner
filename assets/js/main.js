---
# for jekyll
---

// import variables from './css/main.css'

const HEADER_IMGS = [
    {
      name: 'header-image-1.jpg',
      author: 'Maurício Mascaro',
      link: 'https://www.pexels.com/@maumascaro/',
      logoColor: 'hsl(341, 100%, 47.6%)',
    },
    {
      name: 'header-image-2.jpg',
      author: 'David Riaño Cortés',
      link: 'https://www.pexels.com/@davidriano/',
      logoColor: 'hsl(129.3, 99%, 39.6%)',
    }
  ]

const randomInt = Math.floor(Math.random() * 2)
console.log(randomInt)

window.onload = function () {
  const docHeader = document.getElementById('banner')
  const docLogoElms = document.getElementsByClassName('logo-elm')

  console.log(docLogoElms)
  console.log('{{ site.baseurl }}')

  const newUrl = `{{ site.baseurl }}/assets/images/${HEADER_IMGS[randomInt].name}`
  console.log(newUrl)

  // docHeader.style.background = `no-repeat center/100% url('/assets/images/header-image-2.jpg')`
  docHeader.style.background = `no-repeat center/100% url('${newUrl}')`

  for (const elm of docLogoElms) {
    if (elm.localName === "h1") {
      elm.style.color = HEADER_IMGS[randomInt].logoColor
    } else {
      elm.style.backgroundColor = HEADER_IMGS[randomInt].logoColor

    }
  }

}
