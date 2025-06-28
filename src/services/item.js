//criar item com propriedades como id, nome, preço e quantidade
async function createItem(id, name, price, quantity = 1) {
    return {
        id,
        name,
        price,
        quantity,
        subtotal : () => price * quantity,
    };
}
// atualizar quantidade do item
async function updateItemQuantity(item, quantity) {
    if (quantity < 1) {
        throw new Error("Quantidade deve ser pelo menos 1");
    }
    item.quantity = quantity;
    return item;
}
// calcular subtotal do item
async function calculateItemSubtotal(item) {
    if (!item || !item.price || !item.quantity) {
        throw new Error("Item inválido");
    }
    return item.price * item.quantity;
}
// verificar se o item é válido
async function isValidItem(item) {
    return item && item.id && item.name && item.price >= 0 && item.quantity > 0;
}
// obter detalhes do item
async function getItemDetails(item) {
    if (!isValidItem(item)) {
        throw new Error("Item inválido");
    }
    return {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        subtotal: await calculateItemSubtotal(item),
    };
}
// exportar funções
export {
    createItem,
    updateItemQuantity,
    calculateItemSubtotal,
    isValidItem,
    getItemDetails,
};

