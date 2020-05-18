
const router = require('express').Router()

const {getContacts,getContact,createContact,updateContact,deleteContact} = require('../controllers/api-routes')


router
     .route('/users')
     .get(getContacts)
     .post(createContact)


router.route('/:id')
  .get(getContact)
  .put(updateContact)
  .delete(deleteContact)     
module.exports = router