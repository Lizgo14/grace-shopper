const path = require('path')
const fs = require('fs')
const router = require('express').Router()
module.exports = router

router.get('/:productName', async (req, res, next) => {
  try {
    // get image file names from file directory

    const productName = req.params.productName

    fs.readdir(
      path.join(__dirname, '../..', `public/images/${productName}`),
      (err, files) => {
        if (err) {
          next(err)
        }
        if (files) {
          let images = []
          files.forEach(file => {
            if (file === 'main.jpg') images.unshift(file)
            else images.push(file)
          })
          res.send(images)
        }
      }
    )
  } catch (err) {
    next(err)
  }
})
