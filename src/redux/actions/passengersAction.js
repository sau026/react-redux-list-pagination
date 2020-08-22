import api from '../api/api';
import { PASSENGER_LIST } from '../api/apiEndPoint';
//v1/login/

export const passenger = (page, size) => async dispatch => {
  return new Promise((resolve, reject) => {
    dispatch(setLoading(true));
    const pssengerListEndpoint = PASSENGER_LIST + `?page=${page}&size=${size}`
    api
      .get(pssengerListEndpoint)
      .then((response, error) => {
        dispatch(passengerDataList(response));
        dispatch(setLoading(false));
        resolve(response);
      })
      .catch(error => {
        dispatch(setLoading(false));
        reject(error);
      });
  });
};

export const selectPassenger = data => async dispatch => {
    dispatch(setLoading(true));
    dispatch(selectPassengerList(data));
    dispatch(setLoading(false));
};

export function setLoading(status) {
  return {
    status,
    type: 'SET_LOADING',
  };
}

export function passengerDataList(payload) {
  return {
    type: 'PASSENGER_DATA',
    passengerData: payload,
  };
}

export function selectPassengerList(payload) {
  return {
    type: 'SELECTED_PASSENGER',
    selectedPassengerData: payload,
  };
}