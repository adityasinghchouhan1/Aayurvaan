import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, clearCart } from '../../redux/cartSlice'
import { placeOrder } from '../Services/orderApi'
import Heading from '../../Reuse/Heading'

const Cart = () => {
  const [showToast, setShowToast] = useState(false)

  const { items } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0)

  const handleOrder = async () => {
    await placeOrder(items)
    dispatch(clearCart())
    alert('Order placed successfully 🎉')
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {showToast && (
        <div className="fixed top-6 right-6 z-50 rounded-xl bg-red-500 px-6 py-4 text-white shadow-lg transition-all">
          ✅ Product remove from the cart
        </div>
      )}
      <Heading
        title={'Your'}
        title_l={' Cart'}
        discrption={'Your Happy Products....'}
      />

      {items.length === 0 ? (
        <p className="text-center text-gray-500">Cart is empty 🛒</p>
      ) : (
        <>
          {items.map((item) => (
            <div
              key={item.id}
              className="mb-6 flex items-center justify-between rounded-xl bg-white p-5 shadow"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">Qty: {item.qty}</p>
              </div>

              <div className="flex items-center gap-6">
                <span className="font-bold">₹{item.price * item.qty}</span>

                <button
                  onClick={() => {
                    dispatch(removeFromCart(item.id))
                    setShowToast(true)
                    setTimeout(() => setShowToast(false), 2000)
                  }}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-10 flex items-center justify-between">
            <h3 className="text-xl font-bold">Total: ₹{total}</h3>

            <button
              onClick={handleOrder}
              className="rounded-full bg-emerald-600 px-8 py-3 text-white hover:bg-emerald-700"
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
