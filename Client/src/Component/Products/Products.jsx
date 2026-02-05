// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useDispatch } from 'react-redux'
// import { addToCart } from '../../redux/cartSlice'
// import Heading from '../../Reuse/Heading'

// const Products = () => {
//   const [products, setProducts] = useState([])
//   const dispatch = useDispatch()

//   useEffect(() => {
//     axios
//       .get('http://127.0.0.1:8000/api/products/')
//       .then((res) => setProducts(res.data))
//   }, [])

//   return (
//     <div className="mx-auto max-w-7xl px-6 py-20">
//       <Heading
//         title={'Our '}
//         title_l={'Products'}
//         discrption={'Prducts that make everyone fit and mind free '}
//       />

//       <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//         {products.map((item) => (
//           <div
//             key={item.id}
//             className="rounded-2xl bg-white shadow-lg p-6 transition hover:-translate-y-2"
//           >
//             <img
//               src={item.image}
//               className="h-48 w-full rounded-xl object-cover"
//             />

//             <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>

//             <p className="text-sm text-gray-600">{item.description}</p>

//             <div className="mt-4 flex items-center justify-between">
//               <span className="text-lg font-bold text-emerald-600">
//                 ₹{item.price}
//               </span>

//               <button
//                 onClick={() => dispatch(addToCart(item))}
//                 className="rounded-full bg-emerald-600 px-5 py-2 text-white hover:bg-emerald-700"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Products

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import Heading from '../../Reuse/Heading'

const productsData = [
  {
    id: 1,
    name: 'Herbal Detox Tea',
    description:
      'A natural blend of herbs to cleanse your body and refresh your mind.',
    price: 499,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
  },
  {
    id: 2,
    name: 'Organic Ashwagandha',
    description: 'Boost immunity, reduce stress, and improve overall wellness.',
    price: 699,
    image: 'https://images.unsplash.com/photo-1615486363973-f79d8756c8b4',
  },
  {
    id: 3,
    name: 'Ayurvedic Immunity Booster',
    description:
      'Strengthen your immune system with time-tested ayurvedic herbs.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1590080877777-5d9f7cfa5c8c',
  },
  {
    id: 4,
    name: 'Natural Protein Powder',
    description:
      'Plant-based protein to fuel your body and support muscle recovery.',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1627485937980-221c88ac04b3',
  },
  {
    id: 5,
    name: 'Green Superfood Mix',
    description:
      'Packed with vitamins, minerals, and antioxidants for daily energy.',
    price: 999,
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
  },
  {
    id: 6,
    name: 'Herbal Digestive Capsules',
    description: 'Improve digestion and gut health naturally and effectively.',
    price: 599,
    image: 'https://images.unsplash.com/photo-1580281658629-8a6d5b9c0f21',
  },
]

const Products = () => {
  const [products, setProducts] = useState([])
  const [showToast, setShowToast] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    setProducts(productsData)
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      {showToast && (
        <div className="fixed top-6 right-6 z-50 rounded-xl bg-emerald-600 px-6 py-4 text-white shadow-lg transition-all">
          ✅ Product added to cart
        </div>
      )}

      <Heading
        title={'Our '}
        title_l={'Products'}
        discrption={'Products that make everyone fit and mind free'}
      />

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
                onClick={() => {
                  dispatch(addToCart(item))
                  setShowToast(true)
                  setTimeout(() => setShowToast(false), 2000)
                }}
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
