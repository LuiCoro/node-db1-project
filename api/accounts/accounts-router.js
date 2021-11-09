const router = require('express').Router()
const Accounts = require('./accounts-model')

router.get('/', async (req, res) => {
  // DO YOUR MAGIC
  try{
    const data = await Accounts.getAll()
    if(!data) {
      res.status(400).json({message: 'Can not get all accounts!'})
    } else {
      res.status(200).json(data)
    }

  } catch (err) {
    res.status(500).json({message: 'Error with the server check code!'})
  }
})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
