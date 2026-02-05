import axios from 'axios'

export const placeOrder = async (cartitems) => {
  return axios.post('http://127.0.0.1:8000/api/orders/', {
    items: cartitems.map((item) => ({
      product: item.id,
      quantity: item.qty,
    })),
  })
}
