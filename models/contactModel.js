const mongoose = require('mongoose')


var contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add a name'],
        unique:true,
        trim:true,
        maxlength:[50,'Name can not be more than 50 characters']
    },
   
    email:{
        type:String,
        required:true,
        match:[
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'PLease use a valid Email Id'
        ]
    },
    gender:String,
    phone:
    {
        type:String,
        required:true,
        match:[
            /^(0|[+91]{3})?[7-9][0-9]{9}$/,
            'Please add valid phone'
        ]
    },
    
    create_date:{
        type:Date,
        default:Date.now
    },
    address:{
        type:String,
        required:[true,'Please add an address']
    },
    

})




var Contact = mongoose.model('Contact',contactSchema)

module.exports = Contact
