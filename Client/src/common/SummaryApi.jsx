const backendDomain = 'http://127.0.0.1:8000'
// const backendDomain = 'https://animaweb-1.onrender.com'

const SummaryApi = {
  Contect: {
    url: `${backendDomain}/api/contact/`,
    method: 'post',
  },
  Servisesget: {
    url: `${backendDomain}/api/Servisesget`,
    method: 'get',
  },
  Sliderdataget: {
    url: `${backendDomain}/api/sliders`,
    method: 'get',
  },
  // ==-------------- Therapy
  Therapydataget: {
    url: `${backendDomain}/api/therapy`,
    method: 'get',
  },
  // -------------Product
  Productget: {
    url: `${backendDomain}/api/products/`,
    method: 'get',
  },
}

export default SummaryApi
