const { Cat, Feeding, Toy, CatToy } = require("../models")

const create = async (req,res) => {
  try {
    const cat = await Cat.create(req.body)
    res.status(200).json(cat)  
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const cats = await Cat.findAll(
      {
        include: [
          { model: Feeding, as: "feedings" },
          { model: Toy, as: "toys", through: { attributes: [] } },
        ]
      }
    )
    res.status(200).json(cats)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req,res) => {
  try {
    const cat = await Cat.findByPk(req.params.id)
    cat.set(req.body)
    await cat.save
    res.status(200).json(cat)  
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteCat = async (req, res) => {
  try {
    const cat = await Cat.findByPk(req.params.id)
    await cat.destroy()
    res.status(200).json(cat)
  } catch (error) {
    res.status(500).json(error)
  }
}

const addFeeding = async (req,res) => {
  try {
    req.body.catId = req.params.id
    const feeding = await Feeding.create(req.body)
    res.status(200).json(feeding)
  } catch (error) {
    res.status(500).json(error)
  }
}

const associateToy = async (req, res) => {
  try {
    // destructuring catId and toyId from req.params
    const { catId, toyId } = req.params

    const association = await CatToy.create({
      catId: catId, toyId: toyId
    })

    res.status(200).json(association)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteCat,
  addFeeding,
  associateToy,
}

