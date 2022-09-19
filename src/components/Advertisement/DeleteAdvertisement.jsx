import { React, useState } from 'react';
import classNames from 'classnames/bind';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import * as api from '../../api';
import styles from './Advertisement.scss';
import {
    advertisementSelected,
    deleteAdvertisement,
    handleToggleDeleteAdvertisement,
} from './AdvertisementSlice';

const cx = classNames.bind(styles);

function DeleteAdvertisement(props) {
    const { setAdvertisementList } = props;
    const dispatch = useDispatch();
    const openDelete = useSelector(deleteAdvertisement);
    const advertisement = useSelector(advertisementSelected);

    const [onLoading, setOnLoading] = useState(false);

    const handleSubmitDeleteAdvertisement = () => {
        setOnLoading(true);
        api.deleteAdvertisement({ id: advertisement._id }).then((res) => {
            api.getActiveAdvertisement().then((res) => {
                setAdvertisementList(res.data);
                setOnLoading(false);
                dispatch(handleToggleDeleteAdvertisement(false));
            });
        });
    };

    return (
        <Dialog
            open={openDelete}
            onClose={() => dispatch(handleToggleDeleteAdvertisement(false))}
            className={cx('dialog')}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle className={cx('dialog-title')}>
                Xác nhận xóa bài viết
            </DialogTitle>
            <div className={cx('dialog-content')}>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className={cx('title-td')}>Mã bài viết</td>
                            <td className={cx('content-td')}>
                                {advertisement.bvqb_ma}
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('title-td')}>Tiêu đề</td>
                            <td className={cx('content-td')}>
                                {advertisement.bvqb_tieude}
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('title-td')}>Thời hạn</td>
                            <td className={cx('content-td expired-td')}>
                                {moment(advertisement.bvqb_thoihan).format(
                                    'DD / MM / YYYY'
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <DialogActions className={cx('dialog-actions')}>
                <Button
                    variant="outlined"
                    color="error"
                    className={cx('btn-cancle')}
                    onClick={() =>
                        dispatch(handleToggleDeleteAdvertisement(false))
                    }
                >
                    ĐÓNG
                </Button>
                {!onLoading && (
                    <Button
                        variant="contained"
                        className={cx('btn-save')}
                        onClick={() => handleSubmitDeleteAdvertisement()}
                    >
                        XÓA
                    </Button>
                )}
                {onLoading && (
                    <Button
                        disabled
                        variant="contained"
                        className={cx('btn-save')}
                    >
                        XÓA
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
}

export default DeleteAdvertisement;
