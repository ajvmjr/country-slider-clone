import { imagesArr } from "./imagesArr.js"

const floatingButton = document.querySelector('.floating-button')

const header = document.querySelector('.header')
const footer = document.querySelector('.footer')

const leftArrowDiv = document.querySelector('.left')
const rightArrowDiv = document.querySelector('.right')

const imageContainer = document.querySelector('.image-container')
const countryName = document.querySelector('.country-name')

const X_DIFF = 10
const Y_DIFF = 30

let hasToShortenButton = true
let lastArrPos = 0

const initCarouselTimer = (time) => {
  setInterval(() => {
    if(lastArrPos === imagesArr.length - 1) {
      lastArrPos = 0
    } else {
      lastArrPos++
    }
    setImageAndTitle(lastArrPos)
  }, time);
}

const setImageAndTitle = (pos = 0) => {
  imageContainer.style.backgroundImage = `url(${imagesArr.at(pos).url})`
  countryName.innerHTML = imagesArr.at(pos).title
}

const rotateImage = (degValue) => {
  const image = document.querySelector('.floating-button-image')
  image.style.transform = `rotate(${degValue}deg)`
}

leftArrowDiv.addEventListener('mouseenter', () => {
  floatingButton.classList.remove('floating-button--extra-small')
  rotateImage(180)
  hasToShortenButton = false
})

rightArrowDiv.addEventListener('mouseenter', () => {
  floatingButton.classList.remove('floating-button--extra-small')
  rotateImage(0)
  hasToShortenButton = false
})

imageContainer.addEventListener('mouseover', () => {
  floatingButton.classList.add('floating-button--extra-small')
  hasToShortenButton = false
})

header.addEventListener('mouseenter', () => {
  floatingButton.classList.add('floating-button--extra-small')
})

footer.addEventListener('mouseenter', () => {
  floatingButton.classList.add('floating-button--extra-small')
})

floatingButton.addEventListener('click', ({ x }) => {
  const index = imagesArr.findIndex(image => {
    const formattedUrl = `url("${image.url}")`
    return formattedUrl === imageContainer.style.backgroundImage
  })

  const isRightArrow = Boolean(x > window.screen.width / 2)

  if (isRightArrow) {
    if(index === imagesArr.length - 1) {
      lastArrPos = 0
      setImageAndTitle(lastArrPos)
      return
    }
    lastArrPos = index + 1
    setImageAndTitle(lastArrPos)
    return
  }

  lastArrPos = index - 1
  setImageAndTitle(lastArrPos)
})

document.addEventListener('mousemove', ({ x, y }) => {
  setTimeout(() => {
    const xPosition = x - X_DIFF
    const yPosition = y - Y_DIFF

    floatingButton.style.left = xPosition + 'px'
    floatingButton.style.top = yPosition + 'px'
  }, 150);
})

const initApp = () => {
  setImageAndTitle(0)
  initCarouselTimer(2500)
}

initApp()