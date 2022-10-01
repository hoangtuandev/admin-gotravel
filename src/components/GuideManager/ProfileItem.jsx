import { React } from 'react';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';

import styles from './GuideManager.scss';
import {
    handleSelectProfile,
    handleToggleUpdateProfile,
} from './GuideManagerSlice';

const cx = classNames.bind(styles);

function ProfileItem(props) {
    const { account } = props;
    const dispatch = useDispatch();

    const handleUpdateProfile = () => {
        dispatch(handleSelectProfile(account));
        dispatch(handleToggleUpdateProfile(true));
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
                    <Button color="error">
                        <DeleteIcon className={cx('icon')} />
                    </Button>
                    <Button>
                        <VisibilityIcon className={cx('icon')} />
                    </Button>
                    <Button
                        color="success"
                        onClick={() => handleUpdateProfile()}
                    >
                        <EditIcon className={cx('icon')} />
                    </Button>
                </ButtonGroup>
            </td>
        </tr>
    );
}

export default ProfileItem;
