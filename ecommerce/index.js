class ProductManager {
    #id = 0
    constructor() {   
        this.products = [];
    }
    
    getProducts() {
        return this.products;
    }    

    addProduct (title, description, price, thumbnail, code, stock) {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,    
        }; 

        product.id = this.#getID;

        this.products.push(product);
    }

    getProductById(id) {
        const product = products.find(product => product.id === id);
        return product || null;
      }
      

    #getID(){
        const oldID = this.#id
        this.#id += 1
        return oldID
    }

    addUser (idProduct, idUser) {
        const productIndex = this.products.findIndex((product) => product.id === idProduct)

        if(productIndex === -1){
            console.log("the product does not exist")
            return;
        }

        const product = this.products[productIndex];
        if (product.code.contains (idUser)) {
            console.log ("product is already selected");
            return;
        }
        product.code.push(idUser);

    }

}
