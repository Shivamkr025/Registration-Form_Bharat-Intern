import mongooes from 'mongoose';

const userSchema = new mongooes.Schema({
    username : {type:String , require:true},
    email : {type:String , require:true},
    password : {type:String , require:true},
})

export const User = mongooes.model('Users' , userSchema)