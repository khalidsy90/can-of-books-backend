const express=require('express')
const cors=require('cors')
require('dotenv').config()
const server=express()
server.use(cors())
server.use(express.json())
const bookModel=require('./modules/book-model')
//

async function seedTestData(){

  new bookModel({
  title:'Patterns of Enterprise Application Architecture' ,
  description:'by Thomas H. Cormen' ,
  email:'khalidhamedi3@gmail.com'}).save()
  
  new bookModel({
  title:'Clean Architecture: A Craftsmans Guide to Software Structure and Design' ,
  description:'by Eric Freeman' ,
  email:'khalidhamedi3@gmail.com'}).save()

  new bookModel({
  title:'The Art of Computer Programming' ,
  description:'by Gayle Laakmann McDowell' ,
  email:'khalidhamedi3@gmail.com'}).save()

  new bookModel({
  title:'Agile Software Development: Principles, Patterns, and Practices' ,
  description:'by Steve Krug' ,
  email:'khalidhamedi3@gmail.com'}).save()

  new bookModel({
  title:'Soft Skills: The Software Developers Life Manual' ,
  description:'by Robert C. "Uncle Bob" Martin' ,
  email:'sfdsgeea@gmail.com'}).save()

  new bookModel({
  title:'Peopleware: Productive Projects and Teams' ,
  description:'by Tom DeMarco and Timothy Lister' ,
  email:'khalidhamedi3@gmail.com'}).save()

  new bookModel({
  title:'Programming Pearls' ,
  description:'by Jon Bentley' ,
  email:'sfdadsfds@gmail.com'}).save()

}
// seedTestData()
//

function getBooksByOwnerEmail(request, response){
let ownerE=request.query.ownerEmail
bookModel.find({email:ownerE},function(error,data){
  if(error){
    console.log(error);
  }
  else{
    console.log(data);
    response.send(data)
  }
 })
}

const PORT=process.env.PORT

server.get('/',(request,response)=>{
    response.send('It is work')
})

server.get('/books',getBooksByOwnerEmail)

server.listen(PORT,() =>{
    console.log('it is ok');
})