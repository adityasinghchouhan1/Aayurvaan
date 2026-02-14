import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { placeOrder } from '../Services/orderApi'
import Heading from '../../Reuse/Heading'
import {
  removeFromCart,
  clearCart,
  increaseQty,
  decreaseQty,
} from '../../redux/cartSlice'
import axiosInstance from '../../common/axiosInstance'

const Cart = () => {
  const [showToast, setShowToast] = useState(false)
  const [openCheckout, setOpenCheckout] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    pincode: '',
    phone: '',
    payment: 'COD',
  })

  const { items } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0)

  const handleOrder = async () => {
    const token = localStorage.getItem('access')
    // console.log('TOKEN:', token)
    if (!token) {
      alert('Please login to place order')
      return
    }
    await axiosInstance.post('orders/create/', {
      full_name: formData.name,
      address: formData.address,
      pincode: formData.pincode,
      contact_number: formData.phone,
      payment_method: formData.payment,
      items: items.map((item) => ({
        product_id: item.id,
        quantity: item.qty,
      })),
    })

    dispatch(clearCart())
    setOpenCheckout(false)
    alert('Order placed successfully 🎉')
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {showToast && (
        <div className="fixed top-6 right-6 z-50 rounded-xl bg-red-500 px-6 py-4 text-white shadow-lg">
          ❌ Product removed from cart
        </div>
      )}

      <Heading
        title={'Your'}
        title_l={' Cart'}
        discrption={'Your happy products 💚'}
      />

      {items.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">Cart is empty 🛒</p>
      ) : (
        <>
          {items.map((item) => (
            <div
              key={item.id}
              className="mb-6 flex flex-col sm:flex-row items-center gap-6 rounded-2xl bg-white p-5 shadow-md"
            >
              <img
                src={item.images?.[0]?.image}
                className="h-24 w-24 rounded-xl object-cover"
              />

              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>

                {/* QTY CONTROLS */}
                <div className="mt-2">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => dispatch(decreaseQty(item.id))}
                      className="h-8 w-8 rounded-full bg-gray-200 text-lg hover:bg-gray-300"
                    >
                      −
                    </button>

                    <span className="font-semibold">{item.qty}</span>

                    <button
                      onClick={() => dispatch(increaseQty(item.id))}
                      className="h-8 w-8 rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span className="font-bold text-emerald-600">
                  ₹{item.price * item.qty}
                </span>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* TOTAL + ORDER */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Total: ₹{total}
            </h3>

            <button
              onClick={() => setOpenCheckout(true)}
              className="rounded-full bg-emerald-600 px-10 py-3 text-white text-lg hover:bg-emerald-700 transition"
            >
              Place Order
            </button>
          </div>
        </>
      )}
      {openCheckout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl animate-scaleIn m-5">
            <h2 className="mb-4 text-2xl font-bold text-emerald-600">
              Checkout Details
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-lg border p-3"
              />

              <textarea
                placeholder="Full Address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full rounded-lg border p-3"
              />

              <input
                type="text"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={(e) =>
                  setFormData({ ...formData, pincode: e.target.value })
                }
                className="w-full rounded-lg border p-3"
              />

              <input
                type="text"
                placeholder="Contact Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full rounded-lg border p-3"
              />

              {/* PAYMENT METHOD */}
              <select
                value={formData.payment}
                onChange={(e) =>
                  setFormData({ ...formData, payment: e.target.value })
                }
                className="w-full rounded-lg border p-3"
              >
                <option value="COD">Cash on Delivery</option>
                <option value="UPI">UPI</option>
                <option value="CARD">Card</option>
              </select>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setOpenCheckout(false)}
                className="rounded-full border px-6 py-2 hover:border-green-600 hover:text-green-800  font-semibold active:scale-90 transition-all"
              >
                Cancel
              </button>

              <button
                onClick={handleOrder}
                className="rounded-full bg-emerald-600 px-8 py-2 text-white hover:bg-emerald-700 active:scale-95 active:text-sm transition-all"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
