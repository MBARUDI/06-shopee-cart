// adicionar itens ao carrinho, remover itens, calcular o total e sub-itens
async function addItem(cart, item) {
    if (!cart.items) {
        cart.items = [];
    }
    cart.items.push(item);
    await calculateTotal(cart);
}
async function removeItem(cart, itemId) {
    if (!cart.items) {
        return;
    }
    cart.items = cart.items.filter(item => item.id !== itemId);
    await calculateTotal(cart);
}
async function calculateTotal(cart) {
    if (!cart.items) {
        cart.total = 0;
        return;
    }
    cart.total = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
    cart.subItems = cart.items.map(item => ({
        id: item.id,
        name: item.name,
        total: item.price * item.quantity
    }));
}
async function clearCart(cart) {
    cart.items = [];
    cart.total = 0;
    cart.subItems = [];
}
async function getCartSummary(cart) {
    if (!cart.items) {
        return {
            total: 0,
            subItems: []
        };
    }
    return {
        total: cart.total,
        subItems: cart.subItems
    };
}
async function displayCart(cart) {
    console.log("\nItens do carrinho:");
    if (!cart.items || cart.items.length === 0) {
        console.log("Carrinho vazio.\n");
        return;
    }
    cart.items.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        console.log(
            `${index + 1}. ${item.name} (Qtd: ${item.quantity}) - R$${item.price} | Subtotal: R$${subtotal.toFixed(2)}`
        );
    });
    console.log(`\nTotal Shopee: R$${cart.total.toFixed(2)}\n`);
}
async function decrementItemQuantity(cart, itemId) {
    if (!cart.items) {
        await calculateTotal(cart);
        return;
    }
    const itemIndex = cart.items.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        cart.items[itemIndex].quantity -= 1;
        if (cart.items[itemIndex].quantity <= 0) {
            cart.items.splice(itemIndex, 1); // Remove o item do array
        }
    }
    await calculateTotal(cart); // <-- Atualiza o carrinho sempre após o decremento
}

export {
    addItem,
    removeItem,
    calculateTotal,
    clearCart,
    getCartSummary,
    displayCart,
    decrementItemQuantity
};
