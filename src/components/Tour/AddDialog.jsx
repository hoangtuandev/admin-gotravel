import { React, memo, useState, useEffect, forwardRef } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import CurrencyInput from 'react-currency-input-field';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import 'react-datepicker/dist/react-datepicker.css';

import styles from './Tour.scss';

import * as api from '../../api';
import {
    handleCloseAddDialog,
    handleOpenUpdateDialog,
    handleSetItemSelected,
    isOpenAddDialog,
} from './TourSlice';
import { useRef } from 'react';
import {
    handleCloseBackdrop,
    handleToggleBackdrop,
    isOpenBackdrop,
} from '../GlobalSlice';

const cx = classNames.bind(styles);

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const itemData = [];

function AddDialog(props) {
    const dispatch = useDispatch();
    const openDialog = useSelector(isOpenAddDialog);
    const openBackdrop = useSelector(isOpenBackdrop);
    const imageRef = useRef(null);
    const { setTourList } = props;

    const [typeTourismList, setTypeTourismList] = useState([]);
    const [errorImg, setErrorImg] = useState('');
    const [imagePreview, setImagePreview] = useState(' ');

    const [idTour, setIdTour] = useState('');
    const [nameTour, setNameTour] = useState('');
    const [typeTourism, setTypeTourism] = useState();
    const [timeTour, setTimeTour] = useState('');
    const [priceTour, setPriceTour] = useState(0);
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        setIdTour(setRandomID());
    }, []);

    useEffect(() => {
        api.getAllTypeTourism().then((res) => {
            res.data.map((data, index) => setTypeTourismList(res.data));
        });
    }, []);

    const setRandomID = () => {
        const current = new Date().getTime();
        const randomID = `T00${current}`;
        return randomID;
    };

    const handleChangeURLImg = (e) => {
        setImagePreview(e.target.value);
        setErrorImg('');
    };

    const handleClickSaveImage = () => {
        if (
            imageRef.current.src ===
            'https://res.cloudinary.com/phtuandev/image/upload/v1659409710/GoTravel/undraw_Images_re_0kll_pea2sh.png'
        ) {
            setErrorImg(' Không thể lưu hình ảnh này !');
        } else {
            setErrorImg('');
            itemData.push(imageRef.current.src);
            setImageList(itemData);
            setImagePreview('');
        }
    };

    const handleSubmitSaveTour = () => {
        dispatch(handleToggleBackdrop());
        api.getTypeTourismById({ lht_ma: typeTourism }).then((res) => {
            api.createTour({
                t_ma: idTour,
                t_ten: nameTour,
                t_loaihinh: res.data,
                t_thoigian: timeTour,
                t_gia: priceTour,
                t_hinhanh: imageList,
                t_lichkhoihanh: [],
                t_lichtrinhtour: [],
                t_trangthai: 1,
            }).then((res) => {
                api.getAllTour().then((res) => {
                    setTourList(res.data);
                    api.getTourById({ t_ma: idTour }).then((res) => {
                        // setOpenAlertSuccess(true);
                        dispatch(handleSetItemSelected(res.data));
                        handleCloseBackdrop();
                        dispatch(handleCloseAddDialog());
                        dispatch(handleOpenUpdateDialog());
                    });
                });
            });
        });
    };

    return (
        <div>
            <Dialog
                className={cx('add-dialog')}
                fullScreen
                open={openDialog}
                onClose={() => dispatch(handleCloseAddDialog())}
                TransitionComponent={Transition}
            >
                <Backdrop
                    sx={{
                        color: '#fff',
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={openBackdrop}
                    onClick={() => dispatch(handleCloseBackdrop())}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>

                <AppBar
                    sx={{ position: 'relative' }}
                    className={cx('add-dialog-appbar')}
                >
                    <Toolbar className={cx('add-dialog-toolbar')}>
                        <IconButton
                            className={cx('add-dialog-iconButton')}
                            edge="start"
                            color="inherit"
                            onClick={() => dispatch(handleCloseAddDialog())}
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
                            THÊM TOUR MỚI
                        </Typography>
                        <Button
                            className={cx('add-dialog-btn-save')}
                            onClick={() => dispatch(handleCloseAddDialog())}
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
                                    value={idTour}
                                    onChange={(e) => setIdTour(e.target.value)}
                                />
                                <label className={cx('label-field')}>
                                    Mã tour
                                </label>
                            </li>
                            <li className={cx('fields-item field-name')}>
                                <input
                                    className={cx('text-field')}
                                    type="text"
                                    placeholder=""
                                    value={nameTour}
                                    onChange={(e) =>
                                        setNameTour(e.target.value)
                                    }
                                />
                                <label className={cx('label-field')}>
                                    Tên tour
                                </label>
                            </li>
                        </ul>
                        <ul>
                            <li className={cx('fields-item')}>
                                <select
                                    name="selectTypeTour"
                                    id="selectTypeTour"
                                    className={cx('text-field select-field')}
                                    value={typeTourism}
                                    onChange={(e) =>
                                        setTypeTourism(e.target.value)
                                    }
                                >
                                    <option>Chọn loại hình tour</option>
                                    {typeTourismList.map((data, index) => (
                                        <option key={index} value={data.lht_ma}>
                                            {data.lht_ten}
                                        </option>
                                    ))}
                                </select>
                                <label className={cx('label-field')}>
                                    Loại hình tour
                                </label>
                            </li>
                            <li className={cx('fields-item')}>
                                <input
                                    className={cx('text-field')}
                                    type="text"
                                    placeholder=""
                                    value={timeTour}
                                    onChange={(e) =>
                                        setTimeTour(e.target.value)
                                    }
                                />
                                <label className={cx('label-field')}>
                                    Số ngày
                                </label>
                            </li>
                        </ul>
                        <ul>
                            <li className={cx('fields-item')}>
                                <span className={cx('icon-field')}>đ</span>
                                <CurrencyInput
                                    className={cx('text-field field-price')}
                                    defaultValue={0}
                                    decimalsLimit={2}
                                    onValueChange={(value) => {
                                        setPriceTour(value);
                                    }}
                                />
                                <label className={cx('label-field')}>
                                    Giá tour
                                </label>
                            </li>
                            <li className={cx('fields-item')}></li>
                        </ul>
                        <div className={cx('images-upload')}>
                            <div className={cx('images-control')}>
                                <p>Thêm hình ảnh</p>
                                <div className={cx('url-link')}>
                                    <label>URL</label>
                                    <input
                                        placeholder="Dán đường dẫn hình ảnh vào đây..."
                                        type="text"
                                        value={imagePreview}
                                        onChange={(e) => handleChangeURLImg(e)}
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
                                        onClick={() => handleClickSaveImage()}
                                    >
                                        LƯU HÌNH ẢNH
                                    </Button>
                                </div>
                            </div>
                            <div className={cx('images-list')}>
                                <p>Hình ảnh tour</p>
                                <ul>
                                    {imageList.map((item, index) => (
                                        <li key={index}>
                                            <img src={item} alt="" />
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
                                onClick={() => dispatch(handleCloseAddDialog())}
                            >
                                THOÁT
                            </Button>
                            <Button
                                className={cx('button-save')}
                                variant="contained"
                                size="large"
                                onClick={() => handleSubmitSaveTour()}
                            >
                                LƯU TOUR
                            </Button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}

export default memo(AddDialog);
