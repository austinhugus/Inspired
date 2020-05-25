export default class Quote {
    constructor(data) {
        this.id = data.id
        this.author = data.author
        this.quote = data.body
    }



    get Template() {
        return `
<div >
              <h5>${this.quote}</h5>
              <p>${this.author}</p>
</div>
    `
    }
}
