import { React, memo, useState, forwardRef, Fragment } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import DeleteIcon from '@mui/icons-material/Delete';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './Advertisement.scss';
import * as api from '../../api';
import { useRef } from 'react';
import {
    advertisementSelected,
    handleToggleUpdateAdvertisement,
    updateAdvertisement,
} from './AdvertisementSlice';

const cx = classNames.bind(styles);

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function UpdateAdvertisement(props) {
    const { setAdvertisementList } = props;
    const dispatch = useDispatch();
    const openUpdate = useSelector(updateAdvertisement);
    const advertisement = useSelector(advertisementSelected);
    const imageRef = useRef(null);
    const [onLoading, setOnLoading] = useState(false);
    const [errorImg, setErrorImg] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const [titleAdvertisement, setTitleAdvertisement] = useState(
        advertisement.bvqb_tieude
    );
    const [advertisementContent, setAdvertisementContent] = useState(
        advertisement.bvqb_noidung
    );
    const [expiredDate, setExpiredDate] = useState(
        new Date(advertisement.bvqb_thoihan)
    );
    const [imageList, setImageList] = useState(advertisement.bvqb_hinhanh);

    const handleChangeURLImg = (e) => {
        setImagePreview(e.target.value);
        setErrorImg('');
    };

    const handleDeleteImg = (image) => {
        const imgList = [...imageList];
        for (var i = 0; i < imgList.length; i++) {
            if (imgList[i] === image) {
                imgList.splice(i, 1);
            }
        }
        setImageList(imgList);
    };

    const handleClickSaveImage = () => {
        if (
            imageRef.current.src ===
            'https://res.cloudinary.com/phtuandev/image/upload/v1659409710/GoTravel/undraw_Images_re_0kll_pea2sh.png'
        ) {
            setErrorImg(' Không thể lưu hình ảnh này !');
        } else {
            setErrorImg('');
            const imgs = [...imageList];
            imgs.push(imageRef.current.src);
            setImageList(imgs);
            setImagePreview('');
        }
    };

    const handleSubmitUpdateAdvertisement = () => {
        setOnLoading(true);
        api.updateAdvertisement({
            _id: advertisement._id,
            bvqb_tieude: titleAdvertisement,
            bvqb_noidung: advertisementContent,
            bvqb_thoihan: expiredDate,
            bvqb_hinhanh: imageList,
        }).then((res) => {
            api.getActiveAdvertisement().then((res) => {
                setAdvertisementList(res.data);
                setOnLoading(false);
                dispatch(handleToggleUpdateAdvertisement(false));
            });
        });
    };

    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Dialog
                    className={cx('detail-advertisement')}
                    fullScreen
                    open={openUpdate}
                    onClose={() =>
                        dispatch(handleToggleUpdateAdvertisement(false))
                    }
                    TransitionComponent={Transition}
                >
                    <AppBar
                        sx={{ position: 'relative' }}
                        className={cx('add-dialog-appbar')}
                    >
                        <Toolbar className={cx('add-dialog-toolbar')}>
                            <IconButton
                                className={cx('add-dialog-iconButton')}
                                edge="start"
                                color="inherit"
                                onClick={() =>
                                    dispatch(
                                        handleToggleUpdateAdvertisement(false)
                                    )
                                }
                                aria-label="close"
                            >
                                <CloseIcon className={cx('add-dialog-icon')} />
                            </IconButton>
                            <Typography
                                className={cx('add-dialog-typography')}
                                sx={{ ml: 2, flex: 1 }}
                                variant="h6"
                                component="div"
                            >
                                CẬP NHẬT BÀI VIẾT
                            </Typography>
                            <Button
                                className={cx('add-dialog-btn-save')}
                                onClick={() =>
                                    dispatch(
                                        handleToggleUpdateAdvertisement(false)
                                    )
                                }
                            >
                                THOÁT
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <div className={cx('add-form')}>
                        <div className={cx('add-form-main')}>
                            <ul>
                                <li className={cx('fields-item field-id')}>
                                    <input
                                        readOnly
                                        className={cx('text-field ')}
                                        type="text"
                                        placeholder=" "
                                        value={advertisement.bvqb_ma}
                                    />
                                    <label className={cx('label-field')}>
                                        Mã bài đăng
                                    </label>
                                </li>
                                <li className={cx('fields-item field-name')}>
                                    <input
                                        className={cx('text-field')}
                                        type="text"
                                        placeholder=""
                                        value={titleAdvertisement}
                                        onChange={(e) =>
                                            setTitleAdvertisement(
                                                e.target.value
                                            )
                                        }
                                    />
                                    <label className={cx('label-field')}>
                                        Tiêu đề
                                    </label>
                                </li>
                            </ul>
                            <ul>
                                <li className={cx('expired-datepicker')}>
                                    <p className={cx('label')}>Ngày hết hạn</p>
                                    <DatePicker
                                        dateFormat="dd / MM / yyyy"
                                        selected={expiredDate}
                                        onChange={(date) => {
                                            return setExpiredDate(date);
                                        }}
                                    />
                                    <CalendarMonthIcon className={cx('icon')} />
                                </li>
                            </ul>

                            <div className={cx('advertisement-content')}>
                                <textarea
                                    placeholder="Nội dung bài viết..."
                                    cols="30"
                                    rows="10"
                                    value={advertisementContent}
                                    onChange={(e) =>
                                        setAdvertisementContent(e.target.value)
                                    }
                                ></textarea>
                            </div>

                            <div className={cx('images-upload')}>
                                <div className={cx('images-control')}>
                                    <p>Thêm hình ảnh</p>
                                    <div className={cx('url-link')}>
                                        <label>URL</label>
                                        <input
                                            placeholder="Dán đường dẫn hình ảnh vào đây..."
                                            type="text"
                                            value={imagePreview}
                                            onChange={(e) =>
                                                handleChangeURLImg(e)
                                            }
                                        />
                                    </div>
                                    <div className={cx('preview-iamge')}>
                                        {!imagePreview && (
                                            <img
                                                src="https://res.cloudinary.com/phtuandev/image/upload/v1659409710/GoTravel/undraw_Images_re_0kll_pea2sh.png"
                                                alt=""
                                            />
                                        )}
                                        {imagePreview && (
                                            <img
                                                src={imagePreview}
                                                ref={imageRef}
                                                alt=""
                                                onError={(e) =>
                                                    (e.currentTarget.src =
                                                        'https://res.cloudinary.com/phtuandev/image/upload/v1659409710/GoTravel/undraw_Images_re_0kll_pea2sh.png')
                                                }
                                            />
                                        )}
                                    </div>
                                    <div className={cx('button-group')}>
                                        <p className={cx('error-save-img')}>
                                            {errorImg}
                                        </p>
                                        <Button
                                            className={cx('button-save')}
                                            variant="contained"
                                            size="large"
                                            onClick={() =>
                                                handleClickSaveImage()
                                            }
                                        >
                                            LƯU HÌNH ẢNH
                                        </Button>
                                    </div>
                                </div>
                                <div className={cx('images-list')}>
                                    <p>Hình ảnh bài đăng</p>
                                    <ul>
                                        {imageList.map((item, index) => (
                                            <li key={index}>
                                                <img src={item} alt="" />
                                                <IconButton
                                                    className={cx(
                                                        'delete-departure'
                                                    )}
                                                    aria-label="delete"
                                                    onClick={() =>
                                                        handleDeleteImg(item)
                                                    }
                                                >
                                                    <DeleteIcon
                                                        className={cx('icon')}
                                                    />
                                                </IconButton>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className={cx('save-tour')}>
                                <Button
                                    className={cx('button-close')}
                                    variant="contained"
                                    size="large"
                                    onClick={() =>
                                        dispatch(
                                            handleToggleUpdateAdvertisement(
                                                false
                                            )
                                        )
                                    }
                                >
                                    THOÁT
                                </Button>
                                {!onLoading && (
                                    <Button
                                        className={cx('button-save')}
                                        variant="contained"
                                        size="large"
                                        onClick={() =>
                                            handleSubmitUpdateAdvertisement()
                                        }
                                    >
                                        CẬP NHẬT
                                    </Button>
                                )}
                                {onLoading && (
                                    <Button
                                        disabled
                                        variant="contained"
                                        size="large"
                                        color="primary"
                                        onClick={() =>
                                            handleSubmitUpdateAdvertisement()
                                        }
                                    >
                                        CẬP NHẬT
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Container>
        </Fragment>
    );
}

export default memo(UpdateAdvertisement);
