const mongoose=require('mongoose');

const conectDB=()=>{
  mongoose.connect(process.env.dbLink).then(() => { console.log(`db connected`)}).catch(err=>console.log(err))
}
module.exports = conectDB;