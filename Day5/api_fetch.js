// fetch all url data 
fetch("https://jsonplaceholder.typicode.com/users" )
.then(responce=>responce.json())
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.log("Error",error)
})



//data inside show id=4 email this code 

fetch("https://jsonplaceholder.typicode.com/users" )
.then(responce=>responce.json())
.then(data=>{
    const user = data.find(user => user.id===4)
    console.log(user.email)
})
.catch(error=>{
    console.log("Eroor",error)
})