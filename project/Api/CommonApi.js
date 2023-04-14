import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://intechsol.co/servicesProvider/api',
  headers: { Accept: 'application/json', 'Content-Type': 'multipart/form-data', },
});
const API = axios.create({

  baseURL: 'https://intechsol.co/servicesProvider/api'
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

export const signup_api = (data) => {
  // console.log('data', data);
  const url = `/register`;
  const header = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  };
  return axios.post(url, data, header)
    .then(({ data, status }) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      throw e;
    });
};

export const login_api = (data) => {
  const url = `/login`;
  // console.log('login_api data', data);
  return axios.post(url, data)
      .then(({ data, status }) => {
          return status === 200 || status === 201 ? data : null;
      })
      .catch(e => {
          throw e;
      });
}

export const forgotEmail_api = (data) => {
  const url = `/forgot`;
  return axios.post(url, data)
      .then(({ data, status }) => {
          return status === 200 || status === 201 ? data : null;
      })
      .catch(e => {
          throw e;
      });
}

export const verifyEmail_api = (data) => {
  const url = `/confirm-code`;
  return axios.post(url, data)
      .then(({ data, status }) => {
          return status === 200 || status === 201 ? data : null;
      })
      .catch(e => {
          throw e;
      });
}

export const resetPassword_api = (data) => {
  const url = `/reset`;
  return axios.post(url, data)
      .then(({ data, status }) => {
          return status === 200 || status === 201 ? data : null;
      })
      .catch(e => {
          throw e;
      });
}

export const editProfile_api = async payload => {
  // console.log('edit user payload', payload);
  const requrest = `/edit`;
  try {
    const response = await API.post(requrest, payload.sData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${payload.auth}`,
      },
    });
    const { data, status } = response;
    return status === 200 || status === 201 ? data : null;
  } catch (err) {
    throw err;
  }
};

export const changePassword_api = (data,payload) => {
  const url = `/change-password`;
  authorizedHeaders1.Authorization = `Bearer ${payload.auth}`;
  
  return axios.post(url, data, { headers: authorizedHeaders1 })
      .then(({ data, status }) => {
          return status === 200 || status === 201 ? data : null;
      })
      .catch(e => {
          throw e;
      });
}
export const All_Services_Api = (payload) => {
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

export const fcmToken_api = (data,payload) => {
  console.log('data',data.fcm_token)
  authorizedHeaders1.Authorization = `Bearer ${payload.auth}`;
  const url = `/update-fcm`;
  return axios.post(url, data, { headers: authorizedHeaders1 })
      .then(({ data, status }) => {
          return status === 200 || status === 201 ? data : null;
      })
      .catch(e => {
          throw e;
      });
}

