const ErrorRespone = require('../utils/errorResponse')
const Contact = require('../models/contactModel')
const asyncHandler = require('../middleware/async')

exports.getContacts = async(req,res,next) =>{
    const contacts = await Contact.find().sort('name')
    res.send(contacts)
}

exports.getContact =asyncHandler(async(req,res,next) =>{

    const contact = await Contact.findById(req.params.id)
    if(!contact){
        next(new ErrorRespone(`Contact not found with id of ${req.params.id}`,404))
    }
    res.send(contact)

})
exports.createContact =asyncHandler( async(req,res,next) =>{
    
    const contact =  await Contact.create(req.body)
    res.status(201).json({
        sucess:true,
        data:contact
    })

})

exports.updateContact =asyncHandler( async(req,res,next) =>{

    
    const contact = await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true})   
   
    if(!contact) return res.status(404).send('The customer with given id was not found')

    res.send(contact)

    
})

exports.deleteContact =asyncHandler( async(req,res,next) =>{
   
    const contact = await Contact.findByIdAndRemove(req.params.id)

    if(!contact){
        return res.status(400).send('The customer with given id was not found')
    }

    res.send(contact)

})