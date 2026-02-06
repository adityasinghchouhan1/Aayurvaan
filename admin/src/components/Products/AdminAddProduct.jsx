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
    <form onSubmit={submit}>
      <input name="name" onChange={handleChange} placeholder="Name" />
      <textarea name="description" onChange={handleChange} />
      <input name="mrp" onChange={handleChange} />
      <input name="price" onChange={handleChange} />
      <input name="discount" onChange={handleChange} />
      <input type="file" name="images" multiple onChange={handleChange} />
      <button>Add Product</button>
    </form>
  )
}
