const  productsManagement = require("./controller/controller")
const{addProduct,displayProduct,findById,findByMany,updateProduct,updateManyProduct,removeProduct}= productsManagement

// add  new product

let newProduct={
    name:"computer",
    size:5
}
addProduct(newProduct)

// Display

displayProduct()
// find by Id

findById(1)
/// find by many

findByMany(2)

// update product
updateProduct(2,"name","desktop")


// update many key of product at the same time

const update ={
    name:"laptop",
    size:"4"
}
updateManyProduct(1,update)

const update2 ={
    name:"keyboard",
    size:"3"
}
updateManyProduct(3,update2)



 // Remove  product  exist

 removeProduct(3)