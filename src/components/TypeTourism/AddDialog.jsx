import { React, memo, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';

import styles from './TypeTourism.scss';
import {
    isOpenAddDialog,
    handleCloseAddDialog,
    isOpenBackdrop,
} from './TypeTourismSlice';

import * as api from '../../api';
import { handleCloseBackdrop, handleOpenBackdrop } from '../Tour/TourSlice';

const cx = classNames.bind(styles);

function AddDialog(props) {
    const { settypeTourismList } = props;
    const dispatch = useDispatch();
    const openDialog = useSelector(isOpenAddDialog);
    const openBackdrop = useSelector(isOpenBackdrop);

    const [randomID, setRandomID] = useState();
    const [nameTypeTourism, setNameTypeTourism] = useState('');
    const [describle, setDescrible] = useState('');

    useEffect(() => {
        setRandomID(setRandomIDTypeTourism());
    }, []);

    const setRandomIDTypeTourism = () => {
        const current = new Date().getTime();
        const randomID = `LHT${current}`;
        return randomID;
    };

    const handleSubmitAdd = () => {
        dispatch(handleOpenBackdrop());
        api.createTypeTourism({
            lht_ma: randomID,
            lht_ten: nameTypeTourism,
            lht_mota: describle,
        }).then((res) => {
            api.getAllTypeTourism().then((res) => {
                settypeTourismList(res.data);
                dispatch(handleCloseAddDialog());
                dispatch(handleCloseBackdrop());
            });
        });
    };

    return (
        <div>
            <Dialog
                className={cx('dialog')}
                open={openDialog}
                onClose={() => dispatch(handleCloseAddDialog())}
            >
                <DialogTitle className="dialog-title">
                    Thêm mới Loại hình tour
                </DialogTitle>
                <DialogContent className={cx('dialog-content')}>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td className={cx('title')}>Mã loại hình</td>
                                <td className={cx('content')}>{randomID}</td>
                            </tr>
                            <tr>
                                <td className={cx('title')}>Tên loại hình</td>
                                <td className={cx('content')}>
                                    <input
                                        type="text"
                                        value={nameTypeTourism}
                                        onChange={(e) =>
                                            setNameTypeTourism(e.target.value)
                                        }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('title')}>Mô tả</td>
                                <td className={cx('content')}>
                                    <textarea
                                        cols="20"
                                        rows="7"
                                        value={describle}
                                        onChange={(e) =>
                                            setDescrible(e.target.value)
                                        }
                                    ></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </DialogContent>
                <DialogActions>
                    {openBackdrop && (
                        <Button
                            disabled
                            variant="contained"
                            className={cx('button-groups button-submit')}
                            onClick={() => handleSubmitAdd()}
                        >
                            <CircularProgress
                                size={18}
                                className={cx('circularProgress')}
                            />
                            &nbsp;&nbsp; ĐANG XỬ LÝ
                        </Button>
                    )}
                    {!openBackdrop && (
                        <Button
                            variant="contained"
                            color="primary"
                            className={cx('button-groups button-submit')}
                            onClick={() => handleSubmitAdd()}
                        >
                            LƯU
                        </Button>
                    )}
                    <Button
                        variant="outlined"
                        color="error"
                        className={cx('button-groups button-close')}
                        onClick={() => dispatch(handleCloseAddDialog())}
                    >
                        ĐÓNG
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default memo(AddDialog);
