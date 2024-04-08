const {stock} = require("../db/database")

// add new product

const addProduct = (newProduct) =>{
  newProduct.id = (stock.length)+1
    stock.push(newProduct)
    console.log(stock)

}
// display all from database

const displayProduct = () =>{
  console.log("--------- Select all products from the database-------------")
  console.log(stock)
}

// Find by Id any product from database

const findById = (id) => {
  var foundedProduct ={} 
  foundedProduct = stock.find(foundedProduct => foundedProduct.id === id)
  console.log("-------------find by id-------------")

  if (!foundedProduct) {
    console.log("product you search for not Exist")
    
  }
  else{
    console.log(foundedProduct)
  }

}

// find by many 
const findByMany =(size) =>{
  var foundedProduct ={}
  foundedProduct = stock.filter(foundedProduct => foundedProduct.size === size)
  console.log("---------find by many  here we are going to focus on product that have the same size---------------")
  if (!foundedProduct) {
    console.log("There is no product with this size Exist")
    
  } else {
    console.log(foundedProduct)
  }
}
 
// update product 

const updateProduct =(id,key,value) =>{
  var productExist ={}
  productExist= stock.find(productExist => productExist.id === id)
  console.log("--------------------Update product-------------------");
  if (!productExist) {
    console.log("the product you want to update doesn't exist");
    
  } else {
  console.log(" The product you want to update Exist");
  productExist[key] = value
  console.log(productExist);
 }
}


// Update many key  product at the same time 

const updateManyProduct = (id,Object) => {
   var productExist ={}
   productExist= stock.find(productExist => productExist.id === id)
   console.log("--------------------Update product-------------------");
   if (!productExist) {
     console.log("the product you want to update doesn't exist");
     
   } else {
    for (key in Object){
      productExist[key] = Object[key]
    }
    
   console.log(" The product you want to update Exist");
   console.log(productExist);
   
  }
 
}
// remove product 

const removeProduct =(id) =>{
productExist = {}
 productExist = stock.find(productExist => productExist.id === id)
 console.log("---------------------------Remove product------------");

 if (!productExist) {
  console.log("-------------product you want to delete not exist-----------");

 } else {
 var remainingProduct  =[]
 remainingProduct = stock.filter( productExist => productExist.id !== id)
 console.log(" Product you want to delete  exist ");
 console.log(remainingProduct);
  
 }
}
module.exports={
    addProduct,
    displayProduct,
    findById,
    findByMany,
    updateProduct,
    updateManyProduct,
    removeProduct
}