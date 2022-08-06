import SignIn from '../components/SignIn/SignIn';
import Home from '../pages/Home/Home';
import TypeTourismPage from '../pages/TypeTourismPage/TypeTourismPage';
import TourPage from '../pages/TourPage/TourPage';
import VehiclePage from '../pages/VehiclePage/VehiclePage';

export const privateRoutes = [
    { path: '/', component: Home },
    { path: '/loai-hinh-tour', component: TypeTourismPage },
    { path: '/tour', component: TourPage },
    { path: '/phuong-tien', component: VehiclePage },
    { path: '/:somestring', component: Home },
];

export const publicRoutes = [
    { path: '/', component: SignIn },
    { path: '/:somestring', component: SignIn },
];
