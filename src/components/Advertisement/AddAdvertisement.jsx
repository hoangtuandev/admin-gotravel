import { React, memo, useState, useEffect, forwardRef, Fragment } from 'react';
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
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './Advertisement.scss';
import * as api from '../../api';
import { useRef } from 'react';
import {
    addAdvertisement,
    handleSetListAdvertisement,
    handleToggleAddAdvertisement,
} from './AdvertisementSlice';

const cx = classNames.bind(styles);

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const itemData = [];

function AddAdvertisement(props) {
    const { setAdvertisementList } = props;
    const dispatch = useDispatch();
    const openAdd = useSelector(addAdvertisement);
    const imageRef = useRef(null);
    const [onLoading, setOnLoading] = useState(false);
    const [errorImg, setErrorImg] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const [idAdvertisement, setIdAdvertisement] = useState('');
    const [titleAdvertisement, setTitleAdvertisement] = useState('');
    const [advertisementContent, setAdvertisementContent] = useState('');
    const [expiredDate, setExpiredDate] = useState(new Date());
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        setIdAdvertisement(setRandomID());
    }, []);

    const setRandomID = () => {
        const current = new Date().getTime();
        const randomID = `BVQB00${current}`;
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
            setErrorImg(' Kh??ng th??? l??u h??nh ???nh n??y !');
        } else {
            setErrorImg('');
            itemData.push(imageRef.current.src);
            setImageList(itemData);
            setImagePreview('');
        }
    };

    const handleSaveAdvertisement = () => {
        setOnLoading(true);
        api.createAdvertisement({
            bvqb_ma: idAdvertisement,
            bvqb_tieude: titleAdvertisement,
            bvqb_noidung: advertisementContent,
            bvqb_ngaydang: new Date(),
            bvqb_luotthich: 0,
            bvqb_thoihan: expiredDate,
            bvqb_hinhanh: imageList,
            bvqb_trangthai: 1,
        }).then((res) => {
            setImageList([]);
            api.getActiveAdvertisement().then((res) => {
                dispatch(handleSetListAdvertisement(res.data));
                setAdvertisementList(res.data);
                setOnLoading(false);
                setImagePreview('');
                setImageList([]);
                dispatch(handleToggleAddAdvertisement(false));
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
                    open={openAdd}
                    onClose={() =>
                        dispatch(handleToggleAddAdvertisement(false))
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
                                        handleToggleAddAdvertisement(false)
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
                                TH??M B??I QU???NG B?? M???I
                            </Typography>
                            <Button
                                className={cx('add-dialog-btn-save')}
                                onClick={() =>
                                    dispatch(
                                        handleToggleAddAdvertisement(false)
                                    )
                                }
                            >
                                THO??T
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
                                        value={idAdvertisement}
                                    />
                                    <label className={cx('label-field')}>
                                        M?? b??i ????ng
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
                                        Ti??u ?????
                                    </label>
                                </li>
                            </ul>
                            <ul>
                                <li className={cx('expired-datepicker')}>
                                    <p className={cx('label')}>Ng??y h???t h???n</p>
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
                                    placeholder="N???i dung b??i vi???t..."
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
                                    <p>Th??m h??nh ???nh</p>
                                    <div className={cx('url-link')}>
                                        <label>URL</label>
                                        <input
                                            placeholder="D??n ???????ng d???n h??nh ???nh v??o ????y..."
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
                                            L??U H??NH ???NH
                                        </Button>
                                    </div>
                                </div>
                                <div className={cx('images-list')}>
                                    <p>H??nh ???nh b??i ????ng</p>
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
                                    onClick={() =>
                                        dispatch(
                                            handleToggleAddAdvertisement(false)
                                        )
                                    }
                                >
                                    THO??T
                                </Button>
                                {!onLoading && (
                                    <Button
                                        className={cx('button-save')}
                                        variant="contained"
                                        size="large"
                                        onClick={() =>
                                            handleSaveAdvertisement()
                                        }
                                    >
                                        L??U B??I VI???T
                                    </Button>
                                )}
                                {onLoading && (
                                    <Button
                                        disabled
                                        variant="contained"
                                        size="large"
                                        color="primary"
                                        onClick={() =>
                                            handleSaveAdvertisement()
                                        }
                                    >
                                        L??U B??I VI???T
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

export default memo(AddAdvertisement);
