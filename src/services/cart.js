//Quais ações meu carrinho pode fazer?

//Adicionar Item no carrinho
async function addItem(userCart, item){
    userCart.push(item)
}

//Calcular total
async function calculateTotal(userCart){
    console.log("\nShopee Cart Total is")
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0 )
    console.log(`💵 Total: R$ ${result}`)
}

//Deletar Item no carrinho
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name)    
    if (index !== -1){
        userCart.splice(index, 1)
    }
}
async function deleteItemByIndex(userCart, index){
    const deleteIndex = index - 1;

    if(deleteIndex >= 0 && deleteIndex < userCart.length){
        userCart.splice(deleteIndex, 1)    
    }
}

//Remover um item (quantidade)
async function removeItem(userCart, item){
    //1. Encontrar o índice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name)
    
    //2. Caso não encontre o item
    if(indexFound == -1){
        console.log("Item não encontrado")
        return
    }

    //3. Se Item > 1 substrarir um item
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity-=1
        return
    }

    //4. Se Item = 1 deletar o item
    if(userCart[indexFound].quantity === 1){
        userCart.splice(indexFound, 1)
    }
}

async function displayCart(userCart) {
    console.log("\nShopee Cart List:")    
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`)    
    })

}

export {
    addItem,
    calculateTotal,
    deleteItem,
    deleteItemByIndex,
    removeItem,
    displayCart
}

