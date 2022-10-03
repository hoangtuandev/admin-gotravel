import { React } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import VpnKeyOffIcon from '@mui/icons-material/VpnKeyOff';

import styles from './GuideManager.scss';
import {
    currentList,
    handleSelectProfile,
    handleToggleActiveProfile,
    handleToggleLockProfile,
    handleToggleUpdateProfile,
    handleToggleViewProfile,
} from './GuideManagerSlice';

const cx = classNames.bind(styles);

function ProfileItem(props) {
    const { account } = props;
    const dispatch = useDispatch();
    const typeList = useSelector(currentList);

    const handleUpdateProfile = () => {
        dispatch(handleSelectProfile(account));
        dispatch(handleToggleUpdateProfile(true));
    };

    const handleViewProfile = () => {
        dispatch(handleSelectProfile(account));
        dispatch(handleToggleViewProfile(true));
    };

    const handleLockProfile = () => {
        dispatch(handleSelectProfile(account));
        dispatch(handleToggleLockProfile(true));
    };

    const handleActiveProfile = () => {
        dispatch(handleSelectProfile(account));
        dispatch(handleToggleActiveProfile(true));
    };

    return (
        <tr>
            <td>
                <img
                    className={cx('avatar')}
                    src={account.tkhdv_anhdaidien}
                    alt=""
                />
            </td>
            <td>{account.tkhdv_tendangnhap}</td>
            <td className={cx('name-guide')}>
                {account.tkhdv_huongdanvien.hdv_hoten}
            </td>
            <td>{account.tkhdv_huongdanvien.hdv_namsinh}</td>
            <td>
                <StarIcon className={cx('star-icon')} />
                <StarIcon className={cx('star-icon')} />
                <StarIcon className={cx('star-icon')} />
                <StarIcon className={cx('star-icon')} />
                <StarIcon className={cx('star-icon')} />
            </td>
            <td></td>
            <td>
                <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                    className={cx('button-group')}
                >
                    {typeList === 'actived' && (
                        <Button
                            color="error"
                            onClick={() => handleLockProfile()}
                        >
                            <VpnKeyIcon className={cx('icon')} />
                        </Button>
                    )}
                    {typeList === 'locked' && (
                        <Button
                            color="error"
                            onClick={() => handleActiveProfile()}
                        >
                            <VpnKeyOffIcon className={cx('icon')} />
                        </Button>
                    )}
                    <Button onClick={() => handleViewProfile()}>
                        <VisibilityIcon className={cx('icon')} />
                    </Button>
                    {typeList === 'actived' && (
                        <Button
                            color="success"
                            onClick={() => handleUpdateProfile()}
                        >
                            <EditIcon className={cx('icon')} />
                        </Button>
                    )}
                    {typeList === 'locked' && (
                        <Button
                            disabled
                            color="success"
                            onClick={() => handleUpdateProfile()}
                        >
                            <EditIcon className={cx('icon')} />
                        </Button>
                    )}
                </ButtonGroup>
            </td>
        </tr>
    );
}

export default ProfileItem;
