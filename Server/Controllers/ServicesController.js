const ServicesSchema = require('../Model/ServicesModel')
const client = require('../redisClient/redisClient')

const CACHE_KEY = 'services_data' // key name for cache

const ServicesData = async (req, res) => {
  try {
    const data = new ServicesSchema({
      file: req.file.filename, // Corrected here
      Title: req.body.Title,
      description: req.body.description, // Corrected typo (you wrote desdescription)
    })
    await data.save()

    await client.del(CACHE_KEY) // Invalidate cache

    res.status(201).json({ message: 'Image uploaded successfully' })
  } catch (err) {
    console.log(err)
    res
      .status(500)
      .json({ message: 'Something went wrong', error: err.message })
  }
}

const Servisesget = async (req, res) => {
  try {
    const cachedData = await client.get(CACHE_KEY)
    if (cachedData) {
      console.log('Serving from cache')
      return res.status(200).json(JSON.parse(cachedData))
    }
    const data = await ServicesSchema.find()
    await client.setEx(CACHE_KEY, 3600, JSON.stringify(data)) // Cache for 1 hour
    console.log('🌐 Data fetched from MongoDB and stored in Redis')

    res.status(200).json(data)
  } catch (err) {
    console.error(err)
    res
      .status(500)
      .json({ message: 'Something went wrong', error: err.message })
  }
}

const ServicesDelete = async (req, res) => {
  const { id } = req.params
  try {
    const data = await ServicesSchema.findByIdAndDelete(id)
    res.status(200).json({ message: 'Deleted successfully', deletedData: data })
  } catch (err) {
    console.error(err)
  }
}

const ServicesUpdate = async (req, res) => {
  const { id } = req.params

  let updateData = {
    Title: req.body.Title,
    description: req.body.description,
  }

  // If a new file is uploaded, include it in updateData
  if (req.file) {
    updateData.file = req.file.filename
  }

  try {
    const updatedDoc = await ServicesSchema.findByIdAndUpdate(id, updateData, {
      new: true,
    })

    if (!updatedDoc) {
      return res.status(404).json({ message: 'Service not found' })
    }

    res.status(200).json(updatedDoc)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Update failed', error: err.message })
  }
}

module.exports = { ServicesData, Servisesget, ServicesDelete, ServicesUpdate }
