
let option = [
    {
        name:"Buttercake",
        quantity: 0,
        price: 40   
    },
    {
        name:"Chocolate_cookies",
        quantity: 0,
        price: 5   
    },
    {
        name:"Macarons",
        quantity: 0,
        price: 20   
    },
    {
        name:"Cake pops",
        quantity: 0,
        price: 15   
    },

]
  
let itemPicked= "Buttercake"
let addItemToOrder = true
let itemToBeDeleted = true

console.log(`Welcome to TreatOTreat`)
console.log(`Add an item to the order?`, addItemToOrder)
while(addItemToOrder){
    console.log(`item added`, itemPicked)
    console.log("update the quantity of items?")
    console.log(`Add more items to the order?`, addItemToOrder=false) 
}
console.log('remove any item from the list?', itemToBeDeleted)
if(itemToBeDeleted){
    console.log('DELETE the item from the list')
}  
console.log('get the list of order')
console.log('get the total price')  
console.log('end')








    