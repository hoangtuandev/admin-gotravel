import { React, Fragment, forwardRef, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Slide from '@mui/material/Slide';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import styles from './GuideManager.scss';
import {
    handleToggleUpdateProfile,
    profileSelected,
    updateProfile,
} from './GuideManagerSlice';
import * as api from '../../api';

const cx = classNames.bind(styles);

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function UpdateProfile(props) {
    const dispatch = useDispatch();
    const openDialog = useSelector(updateProfile);
    const profile = useSelector(profileSelected);

    const { setAccountGuideList } = props;

    const imageRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState(profile.tkhdv_anhdaidien);

    const [nameGuide, setNameGuide] = useState(
        profile.tkhdv_huongdanvien.hdv_hoten
    );
    const [gendarGuide, setGendarGuide] = useState(
        profile.tkhdv_huongdanvien.hdv_gioitinh
    );
    const [yearBornGuide, setYearBornGuide] = useState(
        profile.tkhdv_huongdanvien.hdv_namsinh
    );
    const [identifyGuide, setIdentifyGuide] = useState(
        profile.tkhdv_huongdanvien.hdv_cccd
    );
    const [emailGuide, setEmailGuide] = useState(
        profile.tkhdv_huongdanvien.hdv_mail
    );
    const [phoneGuide, setPhoneGuide] = useState(
        profile.tkhdv_huongdanvien.hdv_sodienthoai
    );
    const [addressGuide, setAddressGuide] = useState(
        profile.tkhdv_huongdanvien.hdv_quequan
    );

    const handleChangeURLImg = (e) => {
        setImagePreview(e.target.value);
    };

    const submitUpdateProfileGuide = () => {
        setIsLoading(true);
        api.updateProfileGuide({
            _id: profile.tkhdv_huongdanvien._id,
            hdv_hoten: nameGuide,
            hdv_gioitinh: gendarGuide,
            hdv_namsinh: yearBornGuide,
            hdv_quequan: addressGuide,
            hdv_mail: emailGuide,
            hdv_cccd: identifyGuide,
            hdv_sodienthoai: phoneGuide,
        }).then((res) => {
            api.updateProfileGuideOfAccount({
                _id: profile._id,
                tkhdv_huongdanvien: res.data[0],
                tkhdv_anhdaidien: imagePreview,
            }).then((res) => {
                api.getAllGuideAccount().then((res) => {
                    setAccountGuideList(res.data);
                    setIsLoading(false);
                    dispatch(handleToggleUpdateProfile(false));
                });
            });
        });
    };

    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Dialog
                    open={openDialog}
                    onClose={() => dispatch(handleToggleUpdateProfile(false))}
                    fullScreen
                    TransitionComponent={Transition}
                    className={cx('dialog')}
                >
                    <AppBar
                        sx={{ position: 'relative' }}
                        className={cx('appbar')}
                    >
                        <Toolbar className={cx('toolbar')}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="close"
                                className={cx('icon-button')}
                                onClick={() =>
                                    dispatch(handleToggleUpdateProfile(false))
                                }
                            >
                                <CloseIcon className={cx('close-icon')} />
                            </IconButton>
                            <Typography
                                sx={{ ml: 2, flex: 1 }}
                                variant="h6"
                                component="div"
                                className={cx('typography')}
                            >
                                C???P NH???T H??? S?? H?????NG D???N VI??N
                            </Typography>

                            <Button
                                autoFocus
                                color="inherit"
                                className={cx('btn-decline')}
                                onClick={() =>
                                    dispatch(handleToggleUpdateProfile(false))
                                }
                            >
                                THO??T
                            </Button>
                        </Toolbar>
                    </AppBar>

                    <div className={cx('add-profile')}>
                        <p className={cx('label-panel')}>
                            Th??ng tin h?????ng d???n vi??n
                        </p>
                        <ul className={cx('textfield-list')}>
                            <li>
                                <TextField
                                    aria-readonly
                                    label="M?? h??? s??"
                                    variant="standard"
                                    value={profile.tkhdv_huongdanvien.hdv_ma}
                                />
                            </li>
                            <li>
                                <TextField
                                    label="H??? v?? t??n *"
                                    variant="standard"
                                    value={nameGuide}
                                    onChange={(e) =>
                                        setNameGuide(e.target.value)
                                    }
                                />
                            </li>
                            <li className={cx('textfield-gender')}>
                                <label className={cx('label-gender')}>
                                    Gi???i t??nh
                                </label>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={gendarGuide}
                                    onChange={(e) =>
                                        setGendarGuide(e.target.value)
                                    }
                                >
                                    <FormControlLabel
                                        value="Nam"
                                        control={
                                            <Radio
                                                sx={{
                                                    '& .MuiSvgIcon-root': {
                                                        fontSize: 22,
                                                    },
                                                }}
                                            />
                                        }
                                        label="Nam"
                                    />
                                    <FormControlLabel
                                        value="N???"
                                        control={
                                            <Radio
                                                sx={{
                                                    '& .MuiSvgIcon-root': {
                                                        fontSize: 22,
                                                    },
                                                }}
                                            />
                                        }
                                        label="N???"
                                    />
                                    <FormControlLabel
                                        value="Kh??c"
                                        control={
                                            <Radio
                                                sx={{
                                                    '& .MuiSvgIcon-root': {
                                                        fontSize: 22,
                                                    },
                                                }}
                                            />
                                        }
                                        label="Kh??c"
                                    />
                                </RadioGroup>
                            </li>
                            <li>
                                <TextField
                                    type="number"
                                    label="N??m sinh"
                                    variant="standard"
                                    value={yearBornGuide}
                                    onChange={(e) =>
                                        setYearBornGuide(e.target.value)
                                    }
                                />
                            </li>
                            <li>
                                <TextField
                                    label="CCCD/CMT"
                                    variant="standard"
                                    value={identifyGuide}
                                    onChange={(e) =>
                                        setIdentifyGuide(e.target.value)
                                    }
                                />
                            </li>
                            <li>
                                <TextField
                                    label="Email"
                                    variant="standard"
                                    value={emailGuide}
                                    onChange={(e) =>
                                        setEmailGuide(e.target.value)
                                    }
                                />
                            </li>
                            <li>
                                <TextField
                                    label="S??? ??i???n tho???i *"
                                    variant="standard"
                                    value={phoneGuide}
                                    onChange={(e) =>
                                        setPhoneGuide(e.target.value)
                                    }
                                />
                            </li>
                            <li>
                                <TextField
                                    className={cx('textfield-address')}
                                    label="?????a ch??? *"
                                    variant="standard"
                                    value={addressGuide}
                                    onChange={(e) =>
                                        setAddressGuide(e.target.value)
                                    }
                                />
                            </li>
                        </ul>

                        <p className={cx('label-panel')}>
                            T??i kho???n h?????ng d???n vi??n
                        </p>

                        <div className={cx('account-guide')}>
                            <ul>
                                <li className={cx('images-control')}>
                                    <div className={cx('preview-iamge')}>
                                        {!imagePreview && (
                                            <img
                                                src="https://res.cloudinary.com/phtuandev/image/upload/v1664595628/Avatar/5e95f0868372e90a8251da40_blank_lxfy3f.png"
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
                                                        'https://res.cloudinary.com/phtuandev/image/upload/v1664595628/Avatar/5e95f0868372e90a8251da40_blank_lxfy3f.png')
                                                }
                                            />
                                        )}
                                    </div>
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
                                </li>
                                <li>
                                    <p className={cx('label')}>T??n ????ng nh???p</p>
                                    <p className={cx('content')}>
                                        {profile.tkhdv_tendangnhap}
                                    </p>
                                </li>
                                <li>
                                    <p className={cx('label')}>
                                        Tr???ng th??i t??i kho???n
                                    </p>
                                    <p className={cx('content status')}>
                                        <FiberManualRecordIcon
                                            className={cx('status-icon')}
                                        />
                                        Ho???t ?????ng
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className={cx('button-form')}>
                            <Button
                                color="error"
                                variant="contained"
                                className={cx('cancle-button')}
                            >
                                THO??T
                            </Button>
                            {!isLoading && (
                                <Button
                                    color="success"
                                    variant="contained"
                                    className={cx('save-button')}
                                    onClick={() => submitUpdateProfileGuide()}
                                >
                                    C???P NH???T
                                </Button>
                            )}

                            {isLoading && (
                                <Button
                                    disabled
                                    color="success"
                                    variant="contained"
                                    className={cx('save-button')}
                                >
                                    C???P NH???T
                                </Button>
                            )}
                        </div>
                    </div>
                </Dialog>
            </Container>
        </Fragment>
    );
}
