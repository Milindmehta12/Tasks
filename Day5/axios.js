//GET Method=Read Data
import axios from "axios"

axios.get("https://jsonplaceholder.typicode.com/users") 
.then(response=>{
    console.log(response.data)
})
.catch(error=>{
    console.log('error',error)
})

//POST Method=Create Data

import axios from "axios"
axios.post("https://jsonplaceholder.typicode.com/users",{
    name:"kajal",
    email:"kajal@gmail.com"
})
.then(response=>{
    console.log(response.data)
})

//PUT Method=Update Data

import axios from "axios"
axios.put("https://jsonplaceholder.typicode.com/users",{
    name:"mayur",
    email:"mayur@gmail.com"
})
.then(response=>{
    console.log(response.data)
})


//DELETE method=delete data 

import axios from "axios"
axios.delete("https://jsonplaceholder.typicode.com/users")
.then(response=>{
    console.log('Deleted')
})