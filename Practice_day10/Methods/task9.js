let products = [
  { name: "Laptop", price: 1500 },
  { name: "Mouse", price: 50 },
  { name: "Phone", price: 1200 },
  { name: "Keyboard", price: 900 },
  { name: "PC" , price : 2500},
  { name: "iPad", price : 2000}
];

function productRes(products) {
    let filtered_products = products.filter(i => i.price >= 1000);
    return filtered_products;
}
console.log(productRes(products));