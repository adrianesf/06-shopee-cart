import createItem from "./services/item.js"
import * as cartService from "./services/cart.js"

const myCart = []
const myWhishList = []

console.log("Welcome to the your Shopee Cart")

const item1 = await createItem("HotWheels Ferrari", 20.99, 1);
const item2 = await createItem("HotWheels Lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)


//await cartService.deleteItemByIndex(myCart, 2);

await cartService.displayCart(myCart)

await cartService.calculateTotal(myCart)

//console.log("\nShopee Cart Delete Item")
//await cartService.deleteItem(myCart, item2.name)
//await cartService.deleteItem(myCart, item1.name)


//await cartService.calculateTotal(myCart)
