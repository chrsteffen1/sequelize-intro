const { Toy } =require("../models")

const create = async (req, res) => {
  try {
    const toy = await Toy.create(req.body)
    res.status(200).json(toy)
  } catch (error) {
    res.status(500).json(error)
  }
}





module.exports = {
  create,
}