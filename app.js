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
                <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </div>
        `;

        productList.appendChild(element);

        return 1;
    }

    deleteProduct(element) {
        if (element.name == 'delete') {
            if(confirm("Estas seguro?")){
            element.parentElement.remove();
            return 1;
            }
        }
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(message));
        /* Show in DOM */

        const container = document.querySelector('.container');
        const app = document.querySelector('#app');

        container.insertBefore(div, app);

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

        if(ui.addProduct(p)){
            ui.showMessage("Element Added", 'success');
        };
        ui.resetForm();

        e.preventDefault();
    });
    
/* Delete Product */
document
    .getElementById("product-list").addEventListener('click', function(e){
        const ui = new UI();
        if(ui.deleteProduct(e.target)){
            ui.showMessage("Element Deleted", 'danger');
        }
    });