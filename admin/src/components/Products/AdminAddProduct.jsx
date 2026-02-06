import { useState } from 'react'
import axios from 'axios'

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
      setForm({ ...form, images: files })
    } else {
      setForm({ ...form, [name]: value })
    }
  }

  const submit = async (e) => {
    e.preventDefault()

    const data = new FormData()
    Object.keys(form).forEach((key) => {
      if (key === 'images') {
        for (let img of form.images) {
          data.append('images', img)
        }
      } else {
        data.append(key, form[key])
      }
    })

    await axios.post('http://127.0.0.1:8000/api/products/create/', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
      },
    })

    alert('Product Added')
  }

  return (
    <div className=" p-8">
      <h1 className="text-4xl font-bold text-center font-serif mb-10 text-indigo-700">
        Upload Products
      </h1>
      <div className="bg-white shadow-md rounded-lg p-8  mx-auto mb-12">
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
          <button>Add Product</button>
        </form>
      </div>
    </div>
  )
}
