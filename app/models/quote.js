export default class Quote {
    constructor(data) {
        this.id = data.id
        this.author = data.author
        this.quote = data.body
    }



    get Template() {
        return `
            <div class="hover">
              <h5>${this.quote}</h5>
            </div>

              <div class="hide">
                 <p>${this.author}</p>
              </div>
    `
    }
}
