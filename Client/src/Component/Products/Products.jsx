import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'

const Products = () => {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/products/')
      .then((res) => setProducts(res.data))
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-12 text-center text-4xl font-bold text-emerald-700">
        Our Products
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-white shadow-lg p-6 transition hover:-translate-y-2"
          >
            <img
              src={item.image}
              className="h-48 w-full rounded-xl object-cover"
            />

            <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>

            <p className="text-sm text-gray-600">{item.description}</p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-bold text-emerald-600">
                ₹{item.price}
              </span>

              <button
                onClick={() => dispatch(addToCart(item))}
                className="rounded-full bg-emerald-600 px-5 py-2 text-white hover:bg-emerald-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
