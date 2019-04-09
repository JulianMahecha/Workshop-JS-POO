/* Classes */

class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    constructor() {
        return 0;
    }

    addProduct(p) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');

        element.innerHTML = `
            <div class = "card text-center mb-4">
                <div class = "card-body">
                    <strong>Product Name</strong>: ${p.name}
                    <strong>Product Price</strong>: ${p.price}
                    <strong>Product Year</strong>: ${p.year}
                </div>
                <a href="" class="btn btn-danger" name="delete">Delete</a>
            </div>
        `;

        productList.appendChild(element);
    }

    deleteProduct() {

    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    showMessage() {

    }
}

/* DOM Events */

/* Form */
document
    .getElementById("product-form")
    .addEventListener('submit', function (e) {
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;
        
        const p = new Product(name, price, year);
        const ui = new UI();

        ui.addProduct(p);
        ui.resetForm();

        e.preventDefault();
    });
    
/* Delete Product */
document
    .getElementById("product-form")