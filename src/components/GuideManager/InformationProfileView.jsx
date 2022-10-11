import { React } from 'react';
import classNames from 'classnames/bind';
// import { useSelector, useDispatch } from 'react-redux';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import TransgenderIcon from '@mui/icons-material/Transgender';
import CakeIcon from '@mui/icons-material/Cake';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import styles from './GuideManager.scss';

const cx = classNames.bind(styles);

export default function InformationProfileView(props) {
    return (
        <div className={cx('content-profile')}>
            <p></p>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="infor-item">
                                <FingerprintIcon
                                    className={cx('icon-profile')}
                                />
                                <p className={cx('content')}>PG0547354845</p>
                            </div>
                        </td>
                        <td>
                            <div className="infor-item">
                                <TransgenderIcon
                                    className={cx('icon-profile')}
                                />

                                <p className={cx('content')}>Nam</p>
                            </div>
                        </td>
                        <td>
                            <div className="infor-item">
                                <CakeIcon className={cx('icon-profile')} />

                                <p className={cx('content')}>2000</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="infor-item">
                                <LocalPhoneIcon
                                    className={cx('icon-profile')}
                                />
                                <p className={cx('content')}>098975445</p>
                            </div>
                        </td>
                        <td>
                            <div className="infor-item">
                                <EmailIcon className={cx('icon-profile')} />

                                <p className={cx('content')}>
                                    hoangtuanpham@gmail.com
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={3}>
                            <div className="infor-item infor-address">
                                <HomeIcon className={cx('icon-profile')} />

                                <p className={cx('content')}>
                                    MHVJ+4CX, Long Bình, Long Mỹ, Hậu Giang,
                                    Việt Nam
                                </p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
