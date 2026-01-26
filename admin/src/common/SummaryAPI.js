const backendDomain = 'http://127.0.0.1:8000'
// const backendDomain = 'https://animaweb-1.onrender.com'

const SummaryApi = {
  // For Event
  Login: {
    url: `${backendDomain}/api/accounts/login/`,
    method: 'post',
  },
  contectusdata: {
    url: `${backendDomain}/api/contacts/`,
  },
  contectusdelete: {
    url: `${backendDomain}/api/contacts/`,
  },
  contectUpdate: {
    url: `${backendDomain}/api/contacts/`,
  },
  evenetCount: {
    url: `${backendDomain}/api/events`,
    method: 'get',
  },

  //------------------- For Uploadservices

  Uploadservices: {
    url: `${backendDomain}/api/Servicesupload`,
    method: 'post',
  },
  Servisesget: {
    url: `${backendDomain}/api/Servisesget`,
    method: 'get',
  },
  updateServices: {
    url: `${backendDomain}/api/updateServices`,
    method: 'put',
  },
  deleteServices: {
    url: `${backendDomain}/api/deleteServices`,
    method: 'delete',
  },

  // ----------------Slider--------------------------///////

  SliderDatapost: {
    url: `${backendDomain}/api/SliderDatapost`,
    method: 'post',
  },
  SliderDataget: {
    url: `${backendDomain}/api/Sliderdataget`,
    method: 'get',
  },
  SliderDataDelete: {
    url: `${backendDomain}/api/SliderDataDelete`,
    method: 'delete',
  },
  updateSliderData: {
    url: `${backendDomain}/api/updateSliderData`,
    method: 'put',
  },
  // Admin routes
  loginAdmin: {
    url: `${backendDomain}/api/loginAdmin`,
    method: 'post',
  },
}

export default SummaryApi
