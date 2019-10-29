import axios from 'axios';

export const fetchCar = carId => {
    return axios.get(`/api/cars/${carId}`)
        .then(resp => resp.data);
};