import store from "../store";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  async getImg() {
    let res = await imgApi.get(' ');
    store.commit('image', res.data)

  }
  constructor() {
    this.getImg();
  }
}

const imageService = new ImageService();
export default imageService;
