import { React } from 'react';
import classNames from 'classnames/bind';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
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
import PublishIcon from '@mui/icons-material/Publish';
import styles from './Advertisement.scss';
import {
    handleSelectAdvertisement,
    handleToggleActiveAdvertisement,
    handleToggleDeleteAdvertisement,
    handleToggleRemoveAdvertisement,
    handleToggleUpdateAdvertisement,
    handleToggleViewAdvertisement,
    typeListAdvertisement,
} from './AdvertisementSlice';

const cx = classNames.bind(styles);

function AdvertisementItem(props) {
    const { advertisement } = props;
    const dispatch = useDispatch();
    const typeList = useSelector(typeListAdvertisement);

    const handleViewDetailAdvertisement = () => {
        dispatch(handleToggleViewAdvertisement(true));
        dispatch(handleSelectAdvertisement(advertisement));
    };

    const handleUpdateAdvertisement = () => {
        dispatch(handleSelectAdvertisement(advertisement));
        dispatch(handleToggleUpdateAdvertisement(true));
    };

    const handleRemoveAdvertisement = () => {
        dispatch(handleSelectAdvertisement(advertisement));
        dispatch(handleToggleRemoveAdvertisement(true));
    };

    const handleDeleteAdvertisement = () => {
        dispatch(handleSelectAdvertisement(advertisement));
        dispatch(handleToggleDeleteAdvertisement(true));
    };

    const handleReactiveAdvertisement = () => {
        dispatch(handleSelectAdvertisement(advertisement));
        dispatch(handleToggleActiveAdvertisement(true));
    };

    const actions = [
        {
            icon: (
                <DeleteIcon
                    color="error"
                    className={cx('icon-action')}
                    onClick={() => handleDeleteAdvertisement()}
                />
            ),
            name: 'Xóa',
        },
        {
            icon: (
                <BrokenImageIcon
                    color="secondary"
                    className={cx('icon-action')}
                    onClick={() => handleRemoveAdvertisement()}
                />
            ),
            name: 'Gỡ',
        },
        {
            icon: (
                <EditIcon
                    color="success"
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
                                <span>
                                    {moment(advertisement.bvqb_thoihan).format(
                                        'DD / MM / YYYY'
                                    )}
                                </span>
                            </div>
                            <div className={cx('favorite-time')}>
                                <span>{advertisement.bvqb_luotthich}</span>
                                <FavoriteIcon className={cx('icon')} />
                            </div>
                        </div>
                    </CardContent>
                </CardActionArea>
                {typeList === 2 && (
                    <SpeedDial
                        className={cx('speed-dial repost-advertisement')}
                        ariaLabel="SpeedDial basic example"
                        sx={{
                            position: 'absolute',
                            bottom: 16,
                            right: 16,
                        }}
                        icon={
                            <PublishIcon
                                onClick={() => handleReactiveAdvertisement()}
                            />
                        }
                    ></SpeedDial>
                )}
                {typeList === 1 && (
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
                )}
            </Card>
        </li>
    );
}

export default AdvertisementItem;
