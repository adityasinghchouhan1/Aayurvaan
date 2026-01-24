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
    url: `${backendDomain}/api/Sliderdataget`,
    method: 'get',
  },
}

export default SummaryApi
