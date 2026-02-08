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

  //------------------- For UploadTherapy

  Uploadservices: {
    url: `${backendDomain}/api/therapy/`,
    method: 'post',
  },
  Servisesget: {
    url: `${backendDomain}/api/therapy/`,
    method: 'get',
  },
  updateServices: {
    url: `${backendDomain}/api/therapy`,
    method: 'put',
  },
  deleteServices: {
    url: `${backendDomain}/api/therapy`,
    method: 'delete',
  },

  // ----------------Slider--------------------------///////
  SliderDatapost: {
    url: `${backendDomain}/api/sliders/`,
    method: 'post',
  },

  SliderDataget: {
    url: `${backendDomain}/api/sliders/`,
    method: 'get',
  },

  SliderDataDelete: {
    url: `${backendDomain}/api/sliders`, // id will be appended
    method: 'delete',
  },

  updateSliderData: {
    url: `${backendDomain}/api/sliders`, // id will be appended
    method: 'put',
  },
  // ====================== Products Uploads==================

  Productupload: {
    url: `${backendDomain}/api/products/create/`,
    method: 'post',
  },
  Productget: {
    url: `${backendDomain}/api/products/`,
    method: 'get',
  },

  // Admin routes
  loginAdmin: {
    url: `${backendDomain}/api/loginAdmin`,
    method: 'post',
  },
}

export default SummaryApi
