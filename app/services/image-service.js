import store from "../store.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  getImg() {
    imgApi.get()
      .then(res => {
        console.log(res.data.large_url);

        let img = res.data.large_url
        store.commit('image', img)
      })

  }
  constructor() {
    this.getImg();
  }
}

const imageService = new ImageService();
export default imageService;
