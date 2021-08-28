const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/BestBooks', {useNewUrlParser: true, useUnifiedTopology: true},(erorr)=>{
  if(erorr){
    console.log("its error");
  }
  console.log("Its connected");
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("we're connected");
});

const bookSchema=mongoose.Schema({
  title: String,
  description: String,
  email: String
})

const bookModel=mongoose.model('book',bookSchema)

module.exports=bookModel