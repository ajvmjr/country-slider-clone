import { imagesArr } from "./imagesArr.js"

const floatingButton = document.querySelector('.floating-button')

const leftArrowDiv = document.querySelector('.left')
const rightArrowDiv = document.querySelector('.right')

const imageContainer = document.querySelector('.image-container')

const X_DIFF = 10
const Y_DIFF = 30
const X_DIFF_SHORTEN = 7
const Y_DIFF_SHORTEN = 10

let hasToShortenButton = true

const setImages = (pos = 0) => {
  imageContainer.style.backgroundImage = `url(${imagesArr.at(pos)})`
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

document.addEventListener('mousemove', ({ x, y }) => {
  setTimeout(() => {
    let xPosition = x - X_DIFF
    let yPosition = y - Y_DIFF

    if(hasToShortenButton) {
      xPosition = x - X_DIFF_SHORTEN
      yPosition = y - Y_DIFF_SHORTEN
    }
  
    floatingButton.style.left = xPosition + 'px'
    floatingButton.style.top = yPosition + 'px'
  }, 120);
})

const initApp = () => {
  setImages()
}

initApp()