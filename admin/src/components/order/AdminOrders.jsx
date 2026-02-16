import React, { useEffect, useState } from 'react'
import adminAxios from '../../utils/adminAxios'
import SummaryAPI from '../../common/SummaryAPI'

const AdminOrders = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchOrders = async () => {
    try {
      const res = await adminAxios.get(SummaryAPI.order.url)
      setOrders(res.data)
      setLoading(false)
    } catch (err) {
      console.error(err)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  if (loading) return <h2 className="text-center mt-10">Loading...</h2>

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-emerald-700">
        Admin Orders Dashboard
      </h1>

      {orders.length === 0 && <p className="text-gray-500">No Orders Found</p>}

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow-lg rounded-xl p-6 border"
          >
            <div className="flex justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold">Order ID: #{order.id}</h2>
                <p>User: {order.user}</p>
                <p>Payment: {order.payment_method}</p>
              </div>

              <div className="text-right">
                <p className="font-bold text-emerald-600">
                  ₹ {order.total_amount}
                </p>
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2">Shipping Details:</h3>
              <p>{order.full_name}</p>
              <p>{order.address}</p>
              <p>Pincode: {order.pincode}</p>
              <p>Contact: {order.contact_number}</p>
            </div>

            <div className="border-t mt-4 pt-4">
              <h3 className="font-semibold mb-2">Ordered Items:</h3>

              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border-b py-2"
                >
                  <span>{item.product_name}</span>
                  <span>
                    {item.quantity} × ₹{item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminOrders
