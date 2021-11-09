const router = require('express').Router()
const Accounts = require('./accounts-model')

router.get('/', async (req, res) => {
  // DO YOUR MAGIC
  try {
    const data = await Accounts.getAll()
    if (!data) {
      res.status(400).json({message: 'Can not get all accounts!'})
    } else {
      res.status(200).json(data)
    }

  } catch (err) {
    res.status(500).json({message: 'Error with the server check code!'})
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

router.post('/', async (req, res) => {
  // DO YOUR MAGIC
  try {
    const {name, budget} = req.body

    if (!name || !budget) {
      res.status(400).json({message: 'name and budget are undefined'})
    } else {
      const newAccount = await Accounts.create({name, budget})
      res.status(201).json(newAccount)
    }

  } catch (err) {
    res.status(500).json({message: 'Error with the server check code!'})
  }
})

router.put('/:id', async (req, res) => {
  // DO YOUR MAGIC
  try {
    const {id} = req.params
    const {name, budget} = req.body

    if (!name || !budget) {
      res.status(400).json({message: 'needs a name and budget'})
    } else {
      const updatedAccount = await Accounts.updateById(id, {name, budget})

      if (!updatedAccount) {
        res.status(404).json({message: 'Account no exist'})
      } else {
        res.status(200).json(updatedAccount)
      }

    }

  } catch (err) {
    res.status(500).json({message: 'Error with the server check code!'})
  }
});

router.delete('/:id', async (req, res) => {
  // DO YOUR MAGIC

})

router.use((err, req, res, next) => { // eslint-disable-line
                                      // DO YOUR MAGIC
})

module.exports = router;
