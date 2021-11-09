const router = require('express').Router()
const Accounts = require('./accounts-model')

const {
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId
} = require('./accounts-middleware')

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const data = await Accounts.getAll()

    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res) => {
  // DO YOUR MAGIC
  try {
    const {id} = req.params
    const accountByID = await Accounts.getById(id)

    if (!accountByID) {
      res.status(404).json({message: 'account not found'})
    } else {
      res.status(200).json(accountByID)
    }

  } catch (err) {
    res.status(500).json({message: 'Error with the server check code!'})
  }
})


router.post('/', checkAccountPayload, checkAccountNameUnique, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const newAccount = await Accounts.create(req.body)
    res.status(201).json(newAccount)
  } catch (err) {
    next(err)
  }
})


router.put('/:id', checkAccountPayload, checkAccountId, checkAccountNameUnique, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const updatedAccount = await Accounts.updateById(req.params.id, req.body)
    res.status(200).json(updatedAccount)
  } catch (err) {
    next(err)
  }
});

router.delete('/:id', checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const deletedAccount = await Accounts.deleteById(req.params.id)
    res.status(200).json(deletedAccount)
  } catch (err) {
    next(err)
  }

})

router.use((err, req, res, next) => {
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    custom: 'Check the code!',
    message: err.message,
    stack: err.stack
  })
  next()
})

module.exports = router;
