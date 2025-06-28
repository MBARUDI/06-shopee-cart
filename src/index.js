import * as cartService from "./services/cart.js";
import { createItem } from "./services/item.js";

const myCart = [];
const myWhishList = [];

// Quebra de linha e mensagem centralizada no terminal
const welcome = [
  "",
  "           ================================",
  "             Welcome to your Shopee Cart!",
  "           ================================",
  ""
];
welcome.forEach(line => console.log(line.padStart((30 + line.length) / 2)));

// criando dois itens
const item1 = await createItem(1, "hotwheels ferrari", 20.99, 1);
const item2 = await createItem(2, "hotwheels lamborghini", 39.99, 3);

// adicionei dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

 // await cartService.removeItem(myCart, item2.id);
// await cartService.removeItem(myCart, item2.id);
//await cartService.removeItem(myCart, item2.id);

// criando mais itens
const item3 = await createItem(3, "hotwheels porsche", 29.99, 2);
const item4 = await createItem(4, "hotwheels mustang", 25.99, 1);

// adicionando novos itens ao carrinho
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);


// await cartService.decrementItemQuantity(myCart, item2.id);
// await cartService.decrementItemQuantity(myCart, item2.id);
// await cartService.decrementItemQuantity(myCart, item2.id);

await cartService.displayCart(myCart);
// deletei dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);
await cartService.calculateTotal(myCart);

