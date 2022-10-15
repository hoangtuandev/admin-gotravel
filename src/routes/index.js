import SignIn from '../components/SignIn/SignIn';
import Home from '../pages/Home/Home';
import TypeTourismPage from '../pages/TypeTourismPage/TypeTourismPage';
import TourPage from '../pages/TourPage/TourPage';
import VehiclePage from '../pages/VehiclePage/VehiclePage';
import BookingTourPage from '../pages/BookingTour/BookingTour';
import VoucherPage from '../pages/VoucherPage/VoucherPage';
import AdvertisementPage from '../pages/AdvertisementPage/AdvertisementPage';
import AdminPage from '../pages/AdminPage/AdminPage';
import CalendarGuidePage from '../pages/CalendarGuidePage/CalendarGuidePage';
import GuidePage from '../pages/GuidePage/GuidePage';
import StatisticPage from '../pages/StatisticPage/StatisticPage';

export const privateRoutes = [
    { path: '/', component: Home },
    { path: '/loai-hinh-tour', component: TypeTourismPage },
    { path: '/tour', component: TourPage },
    { path: '/phuong-tien', component: VehiclePage },
    { path: '/booking-tour', component: BookingTourPage },
    { path: '/phieu-giam-gia', component: VoucherPage },
    { path: '/lich-dan-tour', component: CalendarGuidePage },
    { path: '/quang-ba', component: AdvertisementPage },
    { path: '/quan-tri-vien', component: AdminPage },
    { path: '/huong-dan-vien', component: GuidePage },
    { path: '/thong-ke', component: StatisticPage },
    { path: '/:somestring', component: Home },
];

export const publicRoutes = [
    { path: '/', component: SignIn },
    { path: '/:somestring', component: SignIn },
];
