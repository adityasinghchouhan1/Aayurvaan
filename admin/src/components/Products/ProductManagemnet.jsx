import { useEffect, useState } from 'react'
import axios from '../../utils/adminAxios'
import SummaryApi from '../../common/SummaryAPI'

export default function AdminProducts() {
  const [products, setProducts] = useState([])
  const [editProduct, setEditProduct] = useState(null)

  const fetchProducts = async () => {
    const res = await axios.get(SummaryApi.Productget.url)
    setProducts(res.data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const deleteProduct = async (id) => {
    if (!window.confirm('Delete this product?')) return

    await axios.delete(`${SummaryApi.Productdelete.url}${id}/`)
    fetchProducts()
  }

  const updateProduct = async () => {
    await axios.put(
      `${SummaryApi.Productupdate.url}${editProduct.id}/`,
      editProduct,
    )
    setEditProduct(null)
    fetchProducts()
  }

  return (
    <div className="p-8">
      <h1 className="mb-10 text-center text-4xl font-bold text-indigo-700">
        Manage Products
      </h1>

      {/* PRODUCT LIST */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="rounded-xl bg-white p-5 shadow-md">
            <img
              src={product.images?.[0]}
              className="h-40 w-full rounded-lg object-cover"
            />

            <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              {product.description}
            </p>

            <div className="mt-2 flex justify-between font-semibold">
              <span className="text-gray-400 line-through">₹{product.mrp}</span>
              <span className="text-emerald-600">₹{product.price}</span>
            </div>

            <div className="mt-4 flex justify-between">
              <button
                onClick={() => setEditProduct(product)}
                className="rounded bg-yellow-400 px-4 py-2 text-white"
              >
                Update
              </button>

              <button
                onClick={() => deleteProduct(product.id)}
                className="rounded bg-red-500 px-4 py-2 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* UPDATE MODAL */}
      {editProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-xl bg-white p-6">
            <h2 className="mb-4 text-xl font-bold text-indigo-700">
              Update Product
            </h2>

            <input
              className="mb-3 w-full rounded border p-2"
              value={editProduct.name}
              onChange={(e) =>
                setEditProduct({ ...editProduct, name: e.target.value })
              }
            />

            <textarea
              className="mb-3 w-full rounded border p-2"
              value={editProduct.description}
              onChange={(e) =>
                setEditProduct({
                  ...editProduct,
                  description: e.target.value,
                })
              }
            />

            <input
              className="mb-3 w-full rounded border p-2"
              value={editProduct.price}
              onChange={(e) =>
                setEditProduct({ ...editProduct, price: e.target.value })
              }
            />

            <div className="flex justify-between">
              <button
                onClick={() => setEditProduct(null)}
                className="rounded border px-4 py-2"
              >
                Cancel
              </button>

              <button
                onClick={updateProduct}
                className="rounded bg-emerald-600 px-6 py-2 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
