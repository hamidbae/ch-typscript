var fs = require('fs');

interface OptionCart{
    addItem(item: {item_id: number, price: number, quantity: number}): OptionCart;
    removeItem(id: object): OptionCart;
    addDiscount(d: string): OptionCart;
    totalItems(): void;
    totalQuantity(): void;
    totalPrice(): void;
    showAll(): void;
    checkout(): void;
}

class Cart implements OptionCart{
    items: {item_id: number, price: number, quantity: number}[];
    discount: number;

    constructor() {
        this.items = [];
        this.discount = 0;
    }

    public addItem( item: object ) {
        this.items.push({ item_id: item["item_id"], price: item["price"], quantity: item["quantity"] ? item["quantity"] : 1});
        return this;
    }
    
    public removeItem( id: object) {
        for(let i=0; i<this.items.length; i++){
            if(this.items[i]["item_id"] == id["item_id"]){
                this.items.splice(i,1)
            }
        }
        return this;
    }
    
    public addDiscount( d: string) {
        this.discount = parseInt(d.substr(0,d.length-1));
        return this;
    }

    public totalItems() {
        return this.items.length;
    }
    
    public totalQuantity() {
        let q: number = 0;
        this.items.forEach(item => {
            q += item["quantity"]
        })
        return q;
    }
    
    public totalPrice() {
        let p: number = 0;
        this.items.forEach(item =>  {
            p += item["price"] * item["quantity"];
        })
        p = p-p*this.discount/100;
        return p;
    }
    
    public showAll() {
        let detail: string = '';

        this.items.forEach(item => {
            detail +=`id: ${item["item_id"]}\n`+
            `price: ${item["price"]}\n`+
            `quantity: ${item["quantity"]}\n`+
            `-----------------------\n`
        });

        return detail;
    }
    
    public checkout() {
        fs.writeFile('invoice.txt', 
        `Total jenis item = ${this.totalItems()}\n`+
        `Total barang = ${this.totalQuantity()}\n`+
        `Total biaya = ${this.totalPrice()}\n\n`+
        `Detail barang = \n`+
        `------------------\n`+
        `${this.showAll()}`,
        function (err) {
            if (err) throw err;
            console.log('Invoice is created successfully.');
        });
        return this;
    }
}


const cart = new Cart()

// Do some chainings
cart.addItem({ item_id: 1, price: 30000, quantity: 3 })
    .addItem({ item_id: 2, price: 10000,})               // By default quantity is 1
    .addItem({ item_id: 3, price: 5000, quantity: 2 })
    .removeItem({item_id: 2})
    .addItem({ item_id: 4, price: 400, quantity: 6 })
    .addDiscount('50%')

cart.totalItems() // 3

cart.totalQuantity() // 11
console.log('halo')
cart.totalPrice() // 51200

cart.showAll() // Show all items in cart

cart.checkout() // Store data in a file