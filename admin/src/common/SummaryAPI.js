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
    url: `${backendDomain}/api/sliders/`,
    method: 'post',
  },
  Servisesget: {
    url: `${backendDomain}/api/sliders/`,
    method: 'get',
  },
  updateServices: {
    url: `${backendDomain}/api/sliders/<int:pk>/`,
    method: 'put',
  },
  deleteServices: {
    url: `${backendDomain}/api/sliders/`,
    method: 'delete',
  },

  // ----------------Slider--------------------------///////

  SliderDatapost: {
    url: `${backendDomain}/api/sliders/create/`,
    method: 'post',
  },
  SliderDataget: {
    url: `${backendDomain}/api/sliders/`,
    method: 'get',
  },
  SliderDataDelete: {
    url: `${backendDomain}/api/sliders/<int:pk>/`,
    method: 'delete',
  },
  updateSliderData: {
    url: `${backendDomain}/api/sliders/<int:pk>/`,
    method: 'put',
  },
  // Admin routes
  loginAdmin: {
    url: `${backendDomain}/api/loginAdmin`,
    method: 'post',
  },
}

export default SummaryApi
