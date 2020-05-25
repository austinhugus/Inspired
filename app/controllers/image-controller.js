import ImageService from "../services/image-service.js";
import store from "../store.js";
import imageService from "../services/image-service.js";

function _drawImg() {
    let img = store.State.image.url
    document.getElementById("bg-image").style.backgroundImage = `url('${img}')`
}

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
export default class ImageController {
    constructor() {
        store.subscribe('image', _drawImg)
    }

    getImg() {
        imageService.getImg()
    }
}