import axios from 'axios';

const URL = 'http://localhost:5000';

export const handleSignIn = (data) =>
    axios.post(`${URL}/AdminAccount/SignIn`, data);

// LOAI HINH TOUR
export const getAllTypeTourism = () => axios.get(`${URL}/TypeTourism`);

export const createTypeTourism = (data) =>
    axios.post(`${URL}/TypeTourism`, data);

export const getTypeTourismById = (data) =>
    axios.post(`${URL}/TypeTourism/getById`, data);

export const deleteTypeTourism = (data) =>
    axios.post(`${URL}/TypeTourism/Delete`, data);

export const updateTypeTourism = (data) =>
    axios.post(`${URL}/TypeTourism/Update`, data);

// PHUONG TIEN
export const getAllVehicle = () => axios.get(`${URL}/Vehicle`);

export const createVehicle = (data) => axios.post(`${URL}/Vehicle`, data);

export const deleteVehicle = (data) =>
    axios.post(`${URL}/Vehicle/delete`, data);

export const updateVehicle = (data) =>
    axios.post(`${URL}/Vehicle/update`, data);

// TOUR
export const getAllTour = () => axios.get(`${URL}/Tour`);

export const createTour = (data) => axios.post(`${URL}/Tour`, data);

export const getTourById = (data) => axios.post(`${URL}/Tour/getById`, data);

export const updateTour = (data) => axios.post(`${URL}/Tour/update`, data);

export const updateTourWithDeparture = (data) =>
    axios.post(`${URL}/Tour/updateWithDeparture`, data);

// DEPARTURE
export const createDeparture = (data) => axios.post(`${URL}/Departure`, data);

// export const createTourist = (data) => axios.post(`${URL}/Tourist`, data);

// export const createAccountTourist = (data) =>
//     axios.post(`${URL}/TouristAccount`, data);

// export const getTouristAccountByUsername = (data) =>
//     axios.post(`${URL}/TouristAccount/TouristAccountByUserName`, data);
