const floatingButton = document.querySelector('.floating-button')

const X_DIFF = 10
const Y_DIFF = 30

const X_DIFF_SHORTEN = 4
const Y_DIFF_SHORTEN = 7

const hasToShortenButton = (x) => {
  const imageContainer = document.querySelector('.image-container')
  const image = document.querySelector('.floating-button-image')
  const dimensions = imageContainer.getBoundingClientRect()

  if(!(x < dimensions.x || x > dimensions.right)) return true

  if(x < dimensions.x) {
    image.style.transform = 'rotate(180deg)'
  } else {
    image.style.transform = 'rotate(0)'
  }

  return false
} 

document.addEventListener('mousemove', ({ x, y }) => {
  setTimeout(() => {
    let xPosition = x - X_DIFF
    let yPosition = y - Y_DIFF

    if(hasToShortenButton(x)) {
      floatingButton.classList.add('floating-button--extra-small')
      xPosition = x - X_DIFF_SHORTEN
      yPosition = y - Y_DIFF_SHORTEN
    } else {
      floatingButton.classList.remove('floating-button--extra-small')
    }
  
    floatingButton.style.left = xPosition + 'px'
    floatingButton.style.top = yPosition + 'px'
  }, 100);
})