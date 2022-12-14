import axios from 'axios';

const URL = 'http://localhost:5000';
// const URL = 'https://go-travel-server.herokuapp.com';

// ADMIN
export const createAdmin = (data) =>
    axios.post(`${URL}/Admin/createAdmin`, data);

export const getAllAdminAccount = () =>
    axios.get(`${URL}/AdminAccount/getAllAdminAccount`);

export const getActivedAccountAdmin = () =>
    axios.get(`${URL}/AdminAccount/getActivedAccountAdmin`);

export const getLockedAccountAdmin = () =>
    axios.get(`${URL}/AdminAccount/getLockedAccountAdmin`);

export const getAdminById = (data) =>
    axios.post(`${URL}/Admin/getAdminById`, data);

export const updateAdmin = (data) =>
    axios.post(`${URL}/Admin/updateAdmin`, data);

export const changePositionAdmin = (data) =>
    axios.post(`${URL}/Admin/changePositionAdmin`, data);

export const getAccountAdminByUsername = (data) =>
    axios.post(`${URL}/AdminAccount/getAccountAdminByUsername`, data);

export const createAccountAdmin = (data) =>
    axios.post(`${URL}/AdminAccount/createAccountAdmin`, data);

export const handleSignIn = (data) =>
    axios.post(`${URL}/AdminAccount/SignIn`, data);

export const updateAccountAdmin = (data) =>
    axios.post(`${URL}/AdminAccount/updateAccountAdmin`, data);

export const lockAdminAccount = (data) =>
    axios.post(`${URL}/AdminAccount/lockAdminAccount`, data);

export const activeAdminAccount = (data) =>
    axios.post(`${URL}/AdminAccount/activeAdminAccount`, data);

export const filterAdminAccountByPower = (data) =>
    axios.post(`${URL}/AdminAccount/filterAdminAccountByPower`, data);

export const searchingAdminAccount = (data) =>
    axios.post(`${URL}/AdminAccount/searchingAdminAccount`, data);

export const updatePositionAdmin = (data) =>
    axios.post(`${URL}/AdminAccount/updatePositionAdmin`, data);

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

export const getAllActiveTour = () => axios.get(`${URL}/Tour/actived`);

export const getAllStopedTour = () => axios.get(`${URL}/Tour/stoped`);

export const createTour = (data) => axios.post(`${URL}/Tour`, data);

export const getTourById = (data) => axios.post(`${URL}/Tour/getById`, data);

export const updateTour = (data) => axios.post(`${URL}/Tour/update`, data);

export const updateTourWithDeparture = (data) =>
    axios.post(`${URL}/Tour/updateWithDeparture`, data);

export const deleteDepartureFromTour = (data) =>
    axios.post(`${URL}/Tour/deleteDepartureFromTour`, data);

export const updateTourWithScheduleTour = (data) =>
    axios.post(`${URL}/Tour/updateTourWithScheduleTour`, data);

export const deleteScheduleFromTour = (data) =>
    axios.post(`${URL}/Tour/deleteScheduleFromTour`, data);

export const updateStopTour = (data) =>
    axios.post(`${URL}/Tour/updateStopTour`, data);

export const updateActiveTour = (data) =>
    axios.post(`${URL}/Tour/updateActiveTour`, data);

export const searchingTour = (data) =>
    axios.post(`${URL}/Tour/searchingTour`, data);

export const countAmountTour = () => axios.get(`${URL}/Tour/countAmountTour`);

// export const takeThirtyNextDateDeparture = () =>
//     axios.get(`${URL}/Tour/takeThirtyNextDateDeparture`);

// DEPARTURE
export const getAllDeparture = () => axios.get(`${URL}/Departure`);

export const createDeparture = (data) => axios.post(`${URL}/Departure`, data);

export const deleteDeparture = (data) =>
    axios.post(`${URL}/Departure/deleteDeparture`, data);

// SCHEDULE TOUR
export const createScheduleTour = (data) =>
    axios.post(`${URL}/ScheduleTour`, data);

export const deleteScheduleTour = (data) =>
    axios.post(`${URL}/ScheduleTour/deleteScheduleTour`, data);

// CALENDAR GUIDE

export const getCalendarGuide = () => axios.get(`${URL}/CalendarGuide`);

export const addCalendarGuide = (data) =>
    axios.post(`${URL}/CalendarGuide`, data);

export const getGuideTimesByAccount = (data) =>
    axios.post(`${URL}/CalendarGuide/getGuideTimesByAccount`, data);

export const getStatusCurrentOfGuide = (data) =>
    axios.post(`${URL}/CalendarGuide/getStatusCurrentOfGuide`, data);

export const get30NextDayCalendarGuide = (data) =>
    axios.post(`${URL}/CalendarGuide/get30NextDayCalendarGuide`, data);

export const getCalendarGuidebyDeaprtureDate = (data) =>
    axios.post(`${URL}/CalendarGuide/getCalendarGuidebyDeaprtureDate`, data);

export const searchingCalendarGuideByTourName = (data) =>
    axios.post(`${URL}/CalendarGuide/searchingCalendarGuideByTourName`, data);

export const deleteRegistedGuide = (data) =>
    axios.post(`${URL}/CalendarGuide/deleteRegistedGuide`, data);

export const calendarGuideTimesStatistic = () =>
    axios.get(`${URL}/CalendarGuide/calendarGuideTimesStatistic`);

// BOOKING TOUR
export const getAllBookingTour = () => axios.get(`${URL}/BookingTour`);

export const updateBookingTourWorking = (data) =>
    axios.post(`${URL}/BookingTour/updateBookingTourWorking`, data);

export const updateBookingTourFinish = (data) =>
    axios.post(`${URL}/BookingTour/updateBookingTourFinish`, data);

export const updateStatusBookingTour = (data) =>
    axios.post(`${URL}/BookingTour/updateStatusBookingTour`, data);

export const getBookingTourByStatus = (data) =>
    axios.post(`${URL}/BookingTour/getBookingTourByStatus`, data);

export const filterBookingTourByPrice = (data) =>
    axios.post(`${URL}/BookingTour/filterBookingTourByPrice`, data);

export const filterBookingTourByDeparture = (data) =>
    axios.post(`${URL}/BookingTour/filterBookingTourByDeparture`, data);

export const filterBookingTourByBookingDate = (data) =>
    axios.post(`${URL}/BookingTour/filterBookingTourByBookingDate`, data);

export const filterBookingTourByParams = (data) =>
    axios.post(`${URL}/BookingTour/filterBookingTourByParams`, data);

export const countAmountBooking = () =>
    axios.get(`${URL}/BookingTour/countAmountBooking`);

export const totalRevenueBookingTour = () =>
    axios.get(`${URL}/BookingTour/totalRevenueBookingTour`);

export const getYearsBookingTour = () =>
    axios.get(`${URL}/BookingTour/getYearsBookingTour`);

export const revenueBookingTourByMonth = (data) =>
    axios.post(`${URL}/BookingTour/revenueBookingTourByMonth`, data);

export const revenueBookingByTour = () =>
    axios.get(`${URL}/BookingTour/revenueBookingByTour`);

export const revenueBookingByTourist = () =>
    axios.get(`${URL}/BookingTour/revenueBookingByTourist`);

export const compareRevenueBookingTour = () =>
    axios.get(`${URL}/BookingTour/compareRevenueBookingTour`);

export const totalTouristSatistic = () =>
    axios.get(`${URL}/BookingTour/totalTouristSatistic`);

// ADVERTISEMENT

export const getAllAdvertiseqment = () => axios.get(`${URL}/Advertisement`);

export const getActiveAdvertisement = (data) =>
    axios.post(`${URL}/Advertisement/getActiveAdvertisement`, data);

export const getRemoveAdvertisement = (data) =>
    axios.post(`${URL}/Advertisement/getRemoveAdvertisement`, data);

export const createAdvertisement = (data) =>
    axios.post(`${URL}/Advertisement`, data);

export const updateAdvertisement = (data) =>
    axios.post(`${URL}/Advertisement/updateAdvertisement`, data);

export const removeAdvertisement = (data) =>
    axios.post(`${URL}/Advertisement/removeAdvertisement`, data);

export const activeAdvertisement = (data) =>
    axios.post(`${URL}/Advertisement/activeAdvertisement`, data);

export const deleteAdvertisement = (data) =>
    axios.post(`${URL}/Advertisement/deleteAdvertisement`, data);

// GUIDE
export const createGuide = (data) => axios.post(`${URL}/Guide`, data);

export const updateProfileGuide = (data) =>
    axios.post(`${URL}/Guide/updateProfileGuide`, data);

// ACCOUNT GUIDE
export const getAllGuideAccount = () => axios.get(`${URL}/GuideAccount`);

export const getActiveGuideAccount = () =>
    axios.get(`${URL}/GuideAccount/getActiveGuideAccount`);

export const getLockedGuideAccount = () =>
    axios.get(`${URL}/GuideAccount/getLockedGuideAccount`);

export const createAccountGuide = (data) =>
    axios.post(`${URL}/GuideAccount`, data);

export const lockProfile = (data) =>
    axios.post(`${URL}/GuideAccount/lockProfile`, data);

export const activeProfile = (data) =>
    axios.post(`${URL}/GuideAccount/activeProfile`, data);

export const updateProfileGuideOfAccount = (data) =>
    axios.post(`${URL}/GuideAccount/updateProfileGuideOfAccount`, data);

export const searchingGuide = (data) =>
    axios.post(`${URL}/GuideAccount/searchingGuide`, data);

export const countAmountGuide = () =>
    axios.get(`${URL}/GuideAccount/countAmountGuide`);

export const sortAccountGuideByAverageStar = (data) =>
    axios.post(`${URL}/GuideAccount/sortAccountGuideByAverageStar`, data);

// RATING GUIDE
export const getRatingGuideByGuideAccount = (data) =>
    axios.post(`${URL}/RatingGuide/getRatingGuideByGuideAccount`, data);

export const averageStarGuideStatistic = (data) =>
    axios.get(`${URL}/RatingGuide/averageStarGuideStatistic`, data);

export const updateStartGuide = (data) =>
    axios.post(`${URL}/QualityGuide`, data);

export const addQualityGuide = (data) =>
    axios.post(`${URL}/QualityGuide`, data);

// TOURIST
export const countAmountTouristAccount = () =>
    axios.get(`${URL}/TouristAccount/countAmountTouristAccount`);

export const getTouristAccountById = (data) =>
    axios.post(`${URL}/TouristAccount/getTouristAccountById`, data);

// SHARE POSTS

export const getRejectSharePosts = () =>
    axios.get(`${URL}/SharePosts/getRejectSharePosts`);

export const getAcceptedSharePosts = () =>
    axios.get(`${URL}/SharePosts/getAcceptedSharePosts`);

export const getWaitingSharePosts = () =>
    axios.get(`${URL}/SharePosts/getWaitingSharePosts`);

export const acceptSharePost = (data) =>
    axios.post(`${URL}/SharePosts/acceptSharePost`, data);

export const rejectSharePost = (data) =>
    axios.post(`${URL}/SharePosts/rejectSharePost`, data);

export const searchingSharePosts = (data) =>
    axios.post(`${URL}/SharePosts/searchingSharePosts`, data);

export const historySharePostsByTourist = (data) =>
    axios.post(`${URL}/SharePosts/historySharePostsByTourist`, data);
