import { useState } from 'react'
import axios from '../../utils/adminAxios'
import SummaryApi from '../../common/SummaryAPI'

export default function AdminAddProduct() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    mrp: '',
    price: '',
    discount: '',
    images: [],
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target

    if (name === 'images') {
      setForm((prev) => ({
        ...prev,
        images: Array.from(files), // 👈 FIX
      }))
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const submit = async (e) => {
    e.preventDefault()

    const data = new FormData()

    data.append('name', form.name)
    data.append('description', form.description)
    data.append('mrp', form.mrp)
    data.append('price', form.price)
    data.append('discount', form.discount)

    form.images.forEach((img) => {
      data.append('images', img) // 👈 SAME KEY NAME
    })

    console.log('p data', form)
    await axios.post(SummaryApi.Productupload.url, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        // ❌ DO NOT set Content-Type manually
      },
    })

    alert('Product Added')
  }

  return (
    <div className=" p-8">
      <h1 className="text-4xl font-bold text-center font-serif mb-10 text-indigo-700">
        Upload Products
      </h1>
      <div className="bg-white shadow-md rounded-lg p-8 max-w-full mx-auto mb-12">
        <form onSubmit={submit}>
          <label className="block mb-2 font-semibold text-gray-700">
            Product Name
          </label>
          <input
            name="name"
            onChange={handleChange}
            placeholder="Name"
            className="mb-4 w-full rounded border border-gray-300 p-2 focus:outline-indigo-500"
          />
          <label className="block mb-2 font-semibold text-gray-700">
            Product description
          </label>
          <textarea
            name="description"
            onChange={handleChange}
            className="mb-4 w-full rounded border border-gray-300 p-2 focus:outline-indigo-500"
          />
          <div className="flex w-full gap-5">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                MRP
              </label>
              <input
                name="mrp"
                onChange={handleChange}
                className="mb-4 w-full rounded border border-gray-300 p-2 focus:outline-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Price
              </label>

              <input
                name="price"
                onChange={handleChange}
                className="mb-4 w-full rounded border border-gray-300 p-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <label className="block mb-2 font-semibold text-gray-700">
            Discount
          </label>

          <input
            name="discount"
            onChange={handleChange}
            className="mb-4 w-full rounded border border-gray-300 p-2 focus:outline-indigo-500"
          />
          <label className="block mb-2 font-semibold text-gray-700">
            Product Images
          </label>

          <input
            type="file"
            name="images"
            multiple
            onChange={handleChange}
            className="mb-4 w-full rounded border border-gray-300 p-2 focus:outline-indigo-500"
          />
          {form.images.map((img, i) => (
            <img key={i} src={URL.createObjectURL(img)} className="h-20" />
          ))}

          <button className="text-white p-3 font-serif font-semibold rounded bg-blue-500 active:scale-90 transition-all">
            Add Product
          </button>
        </form>
      </div>
    </div>
  )
}
