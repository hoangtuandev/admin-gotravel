import { React } from 'react';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ScheduleIcon from '@mui/icons-material/Schedule';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardActionArea } from '@mui/material';
import SpeedDial from '@mui/material/SpeedDial';
import SettingsIcon from '@mui/icons-material/Settings';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import styles from './Advertisement.scss';
import {
    handleSelectAdvertisement,
    handleToggleUpdateAdvertisement,
    handleToggleViewAdvertisement,
} from './AdvertisementSlice';

const cx = classNames.bind(styles);

function AdvertisementItem(props) {
    const { advertisement } = props;
    const dispatch = useDispatch();

    const handleViewDetailAdvertisement = () => {
        dispatch(handleToggleViewAdvertisement(true));
        dispatch(handleSelectAdvertisement(advertisement));
    };

    const handleUpdateAdvertisement = () => {
        dispatch(handleSelectAdvertisement(advertisement));
        dispatch(handleToggleUpdateAdvertisement(true));
    };

    const actions = [
        {
            icon: <DeleteIcon className={cx('icon-action')} />,
            name: 'Xóa',
        },
        { icon: <BrokenImageIcon className={cx('icon-action')} />, name: 'Gỡ' },
        {
            icon: (
                <EditIcon
                    className={cx('icon-action')}
                    onClick={() => handleUpdateAdvertisement()}
                />
            ),
            name: 'Chỉnh sửa',
        },
    ];

    return (
        <li>
            <Card sx={{ maxWidth: 400 }} className={cx('card')}>
                <CardActionArea className={cx('card-action-area')}>
                    <CardMedia
                        component="img"
                        height="230"
                        image={advertisement.bvqb_hinhanh[0]}
                        alt="green iguana"
                        className={cx('card-media')}
                        onClick={() => handleViewDetailAdvertisement()}
                    />
                    <CardContent
                        className={cx('card-content')}
                        onClick={() => handleViewDetailAdvertisement()}
                    >
                        <div className={cx('typography-title')}>
                            {advertisement.bvqb_tieude}
                        </div>

                        <div
                            variant="body2"
                            color="text.secondary"
                            className={cx('typography-content')}
                        >
                            {advertisement.bvqb_noidung}
                        </div>
                        <div className={cx('typography-control')}>
                            <div className={cx('expired-date')}>
                                <ScheduleIcon className={cx('icon')} />
                                <span>12 ngày 13:30:59</span>
                            </div>
                            <div className={cx('favorite-time')}>
                                <span>{advertisement.bvqb_luotthich}</span>
                                <FavoriteIcon className={cx('icon')} />
                            </div>
                        </div>
                    </CardContent>
                </CardActionArea>
                <SpeedDial
                    className={cx('speed-dial')}
                    ariaLabel="SpeedDial basic example"
                    sx={{
                        position: 'absolute',
                        bottom: 16,
                        right: 16,
                    }}
                    icon={<SettingsIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                    ))}
                </SpeedDial>
            </Card>
        </li>
    );
}

export default AdvertisementItem;
