const router = require('express').Router()
const {Order} = require('../db/models')

router.post('/', async (req, res, next) => {
  try {
    console.log(req.body)
    let newOrder = await Order.create({
      deliveryMethod: req.body.deliveryMethod,
      shippingAddressLineOne: req.body.shippingAddressLineOne,
      shippingAddressLineTwo: req.body.shippingAddressLineTwo,
      shippingCity: req.body.shippingCity,
      shippingState: req.body.shippingState,
      shippingAddressZipCode: req.body.shippingAddressZipCode,
      recipientName: req.body.recipientName,
      total: req.body.total
    })
    res.json(newOrder)
  } catch (err) {
    next(err)
  }
})

module.exports = router