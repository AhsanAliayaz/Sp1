import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://intechsol.co/servicesProvider/api',
    headers: { Accept: 'application/json', 'Content-Type': 'multipart/form-data', },
});
   const API = axios.create({
    baseURL:'https://intechsol.co/servicesProvider/api'
  });
const authorizedHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: '',
};

const authorizedHeaders1 = {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
    Authorization: '',
};

export const ViewAll_Services = (payload) => {
  const url = `/all_services`;
  // console.log("data from ViewProfile_api..............",payload.auth);
  authorizedHeaders1.Authorization = `Bearer ${payload}`;
  return axios.get(url, { headers: authorizedHeaders1})
      .then(({ data, status }) => {
          return status === 200 || status === 201 ? data : null;
      })
      .catch(e => {
          throw e;
      });
};
export const GetServerNameApi = (data,payload) => {
  // console.log('addquestion Api Check Auth', payload.auth);
  authorizedHeaders1.Authorization = `Bearer ${payload.auth}`;
  const url = `/get_providers`;
  return axios.post(url, data,{ headers: authorizedHeaders1})
      .then(({ data, status }) => {
          return status === 200 || status === 201 ? data : null;
      })
      .catch(e => {
          throw e;
      });
};

export const BookProviderService_api = (data,payload ) => {
    console.log("BookProvider Data user.js",payload)
    const url = `/book_provider`;
    authorizedHeaders1.Authorization = `Bearer ${payload.auth}`;
    return axios.post(url,data, { headers: authorizedHeaders1 })
        .then(({ data, status }) => {
            return status === 200 || status === 201 ? data : null;
        })
        .catch(e => {
            console.log('In  book provider catch block ....', e.response.data);
            throw e;
        });
}



export const Pending_Services_Booking = (payload) => {
    const url = `/user_Bookings`;
    // console.log("data from ViewProfile_api..............",payload.auth);
    authorizedHeaders1.Authorization = `Bearer ${payload.auth}`;
    return axios.get(url, { headers: authorizedHeaders1})
        .then(({ data, status }) => {
            return status === 200 || status === 201 ? data : null;
        })
        .catch(e => {
            throw e;
        });
  };

  export const Cancel_Booking_api = (data,payload ) => {
    // console.log("BookProvider Data user.js",payload)
    const url = `/user_cancel_Bookings`;
    authorizedHeaders1.Authorization = `Bearer ${payload.auth}`;
    return axios.post(url,data, { headers: authorizedHeaders1 })
        .then(({ data, status }) => {
            return status === 200 || status === 201 ? data : null;
        })
        .catch(e => {
            console.log('In  book provider catch block ....', e.response.data);
            throw e;
        });
}

export const createReview_api = (payload, data) => {
    console.log('payload?????',payload)
    const url = `/send_review`;
    authorizedHeaders1.Authorization = `Bearer ${payload.auth}`;
    return axios.post(url,data, { headers: authorizedHeaders1 })
        .then(({ data, status }) => {
            return status === 200 || status === 201 ? data : null;
        })
        .catch(e => {
            console.log('In UserApi.js createReview_api catch block ....', e.response);
            throw e;
        });
}

export const Get_Review_api = (payload, data) => {
    console.log('payload?????',payload)
    const url = `/show_all_review`;
    authorizedHeaders1.Authorization = `Bearer ${payload.auth}`;
    return axios.post(url,data, { headers: authorizedHeaders1 })
        .then(({ data, status }) => {
            return status === 200 || status === 201 ? data : null;
        })
        .catch(e => {
            console.log('In UserApi.js createReview_api catch block ....', e.response);
            throw e;
        });
}

export const SaveServices_api = (data,payload) => {
    console.log('payload?????',payload)
    const url = `/save_services`;
    authorizedHeaders1.Authorization = `Bearer ${payload.auth}`;
    return axios.post(url,data, { headers: authorizedHeaders1 })
        .then(({ data, status }) => {
            return status === 200 || status === 201 ? data : null;
        })
        .catch(e => {
            console.log('In UserApi.js createReview_api catch block ....', e.response);
            throw e;
        });
}

export const Home_Api = (payload) => {
    const url = `/home`;
    // console.log("data from ViewProfile_api..............",payload.auth);
    authorizedHeaders1.Authorization = `Bearer ${payload.auth}`;
    return axios.get(url, { headers: authorizedHeaders1})
        .then(({ data, status }) => {
            return status === 200 || status === 201 ? data : null;
        })
        .catch(e => {
            throw e;
        });
  };

export const Bokings_Services_Booking_provider = (payload) => {
    const url = `/provider_Bookings`;
    // console.log("data from ViewProfile_api..............",payload.auth);
    authorizedHeaders1.Authorization = `Bearer ${payload.auth}`;
    return axios.get(url, { headers: authorizedHeaders1})
        .then(({ data, status }) => {
            return status === 200 || status === 201 ? data : null;
        })
        .catch(e => {
            throw e;
        });
  };

  export const Get_Subservices_api = (data,payload) => {
    console.log('payload?????',payload)
    const url = `/get_subservies`;
    authorizedHeaders1.Authorization = `Bearer ${payload}`;
    return axios.post(url,data, { headers: authorizedHeaders1 })
        .then(({ data, status }) => {
            return status === 200 || status === 201 ? data : null;
        })
        .catch(e => {
            console.log('In UserApi.js createReview_api catch block ....', e.response);
            throw e;
        });
}

export const Accept__Booking_new = (data,payload) => {
    console.log('payload?????',payload)
    const url = `/provider_accept_Bookings`;
    authorizedHeaders1.Authorization = `Bearer ${payload.auth}`;
    return axios.post(url,data, { headers: authorizedHeaders1 })
        .then(({ data, status }) => {
            return status === 200 || status === 201 ? data : null;
        })
        .catch(e => {
            console.log('In UserApi.js createReview_api catch block ....', e.response);
            throw e;
        });
}


export const Cancel_Booking_new = (data,payload) => {
    console.log('payload?????',payload)
    const url = `/user_cancel_Bookings`;
    authorizedHeaders1.Authorization = `Bearer ${payload.auth}`;
    return axios.post(url,data, { headers: authorizedHeaders1 })
        .then(({ data, status }) => {
            return status === 200 || status === 201 ? data : null;
        })
        .catch(e => {
            console.log('In UserApi.js createReview_api catch block ....', e.response);
            throw e;
        });
}


export const Mark_Complete_Booking= (data,payload) => {
    console.log('payload?????',payload)
    const url = `/provider_complete_Bookings`;
    authorizedHeaders1.Authorization = `Bearer ${payload.auth}`;
    return axios.post(url,data, { headers: authorizedHeaders1 })
        .then(({ data, status }) => {
            return status === 200 || status === 201 ? data : null;
        })
        .catch(e => {
            console.log('In UserApi.js createReview_api catch block ....', e.response);
            throw e;
        });
}

export const Popular_Services = (payload) => {
    const url = `/user_home`;
    // console.log("data from ViewProfile_api..............",payload.auth);
    authorizedHeaders1.Authorization = `Bearer ${payload.auth}`;
    return axios.get(url, { headers: authorizedHeaders1})
        .then(({ data, status }) => {
            return status === 200 || status === 201 ? data : null;
        })
        .catch(e => {
            throw e;
        });
  };
  
export const GetNotifications = (payload) => {
    const url = `/viewAllNotification`;
    // console.log("data from ViewProfile_api..............",payload.auth);
    authorizedHeaders1.Authorization = `Bearer ${payload.auth}`;
    return axios.get(url, { headers: authorizedHeaders1})
        .then(({ data, status }) => {
            return status === 200 || status === 201 ? data : null;
        })
        .catch(e => {
            throw e;
        });
  };