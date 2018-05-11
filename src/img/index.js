const images = ["01", "03", "04", "05", "06", "07", "08", "09", "12", "14"]

const extension = ".jpg"
const imgPath = "./"

const imgSetup = {
  "0100": ["16x9"],
  "0480": ["16x9"],
  "0800": ["16x9"],
  "1200": ["16x9"]
}

let resolutions = Object.keys(imgSetup)

let img = {}

for (let i = 0; i < images.length; i++) {
  img[images[i]] = {}
  for (let r = 0; r < resolutions.length; r++) {
    img[images[i]][resolutions[r]] = {}
    let aspectRatios = imgSetup[resolutions[r]]
    for (let a = 0; a < aspectRatios.length; a++) {
      img[images[i]][resolutions[r]][aspectRatios[a]] = require(imgPath +
        resolutions[r] +
        "/" +
        aspectRatios[a] +
        "/" +
        images[i] +
        extension)
    }
  }
}

img.resolutions = resolutions

console.log(img)

export default img