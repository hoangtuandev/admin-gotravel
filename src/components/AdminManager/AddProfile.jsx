import { React, Fragment, forwardRef, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import Cookies from 'universal-cookie';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import Slide from '@mui/material/Slide';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import styles from './AdminManager.scss';
import { useEffect } from 'react';
import * as api from '../../api';
import {
    addAdminManager,
    handleToggleAddAdminManager,
} from './AdminManagerSlice';

const cx = classNames.bind(styles);

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const powerSelectOptions = [
    { value: 'Nhân viên', label: 'Nhân viên' },
    { value: 'Quản lý', label: 'Quản lý' },
];
const cookies = new Cookies();

export default function AddProfile(props) {
    const dispatch = useDispatch();
    const openDialog = useSelector(addAdminManager);

    const { setAccountGuideList } = props;

    console.log(cookies.get('useradmin'));

    const imageRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [createdAccount, setCreateAccount] = useState(false);
    const [imagePreview, setImagePreview] = useState('');
    const [idProfile, setIdProfile] = useState('');
    const [nameAdmin, setNameAdmin] = useState('');
    const [gendarAdmin, setGendarAdmin] = useState(null);
    const [yearBornAdmin, setYearBornAdmin] = useState('');

    const [emailAdmin, setEmailAdmin] = useState('');
    const [phoneAdmin, setPhoneAdmin] = useState('');
    const [addressAdmin, setAddressAdmin] = useState('');
    const [powerSelect, setPowerSelect] = useState('');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setIdProfile(setRandomID());
    }, []);

    const handleChangeURLImg = (e) => {
        setImagePreview(e.target.value);
    };

    const handleChangeSelectPower = (option) => {
        setPowerSelect(option.value);
    };

    function generateString(length) {
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }
        return result;
    }

    const setRandomID = () => {
        const current = new Date().getTime();
        const randomID = `PA0${current}`;
        return randomID;
    };

    const handleCreateAccount = () => {
        const yearCurrent = new Date().getFullYear();
        setCreateAccount(true);
        api.getAllAdminAccount().then((res) => {
            setUsername(
                'A' +
                    `${yearCurrent}`.slice(-2) +
                    `0000${res.data.length + 1}`.slice(-5)
            );
            setPassword(generateString(6));
        });
    };

    const submitSaveProfileAdmin = () => {
        console.log(powerSelect);
        setIsLoading(true);

        api.createAdmin({
            qtv_ma: idProfile,
            qtv_hoten: nameAdmin,
            qtv_namsinh: yearBornAdmin,
            qtv_gioitinh: gendarAdmin,
            qtv_sodienthoai: phoneAdmin,
            qtv_email: emailAdmin,
            qtv_diachi: addressAdmin,
            qtv_chucvu: powerSelect,
        }).then((res) => {
            api.createAccountAdmin({
                tkqtv_tendangnhap: username,
                tkqtv_matkhau: password,
                tkqtv_anhdaidien: imagePreview,
                tkqtv_trangthai: 1,
                tkqtv_nhanvien: res.data,
            }).then((res) => {
                setIsLoading(false);
            });
        });

        // api.createGuide({
        //     hdv_ma: idProfile,
        //     hdv_hoten: nameAdmin,
        //     hdv_gioitinh: gendarAdmin,
        //     hdv_namsinh: yearBornAdmin,
        //     hdv_quequan: addressAdmin,
        //     hdv_mail: emailAdmin,
        //     hdv_cccd: identifyAdmin,
        //     hdv_sodienthoai: phoneAdmin,
        // }).then((res) => {
        //     api.addQualityGuide({
        //         clhdv_huongdanvien: {
        //             tkhdv_tendangnhap: username,
        //             tkhdv_matkhau: password,
        //             tkhdv_anhdaidien: imagePreview,
        //             tkhdv_trangthai: 1,
        //             tkhdv_huongdanvien: res.data,
        //         },
        //         clhdv_saotrungbinh: 0,
        //     });
        //     api.createAccountGuide({
        //         tkhdv_tendangnhap: username,
        //         tkhdv_matkhau: password,
        //         tkhdv_anhdaidien: imagePreview,
        //         tkhdv_trangthai: 1,
        //         tkhdv_huongdanvien: res.data,
        //     }).then((res) => {
        //         setIsLoading(false);
        //         api.getActiveGuideAccount().then((res) => {
        //             setAccountGuideList(res.data);
        //             dispatch(handleToggleAddAdminManager(false));
        //         });
        //     });
        // });
    };

    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Dialog
                    open={openDialog}
                    onClose={() => dispatch(handleToggleAddAdminManager(false))}
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
                                    dispatch(handleToggleAddAdminManager(false))
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
                                THÊM HỒ SƠ QUẢN TRỊ VIÊN
                            </Typography>

                            <Button
                                autoFocus
                                color="inherit"
                                className={cx('btn-decline')}
                                onClick={() =>
                                    dispatch(handleToggleAddAdminManager(false))
                                }
                            >
                                THOÁT
                            </Button>
                        </Toolbar>
                    </AppBar>

                    <div className={cx('view-detail-admin')}>
                        <p className={cx('label-panel')}>
                            Thông tin quản trị viên
                        </p>
                        <ul className={cx('textfield-list')}>
                            <li>
                                <TextField
                                    aria-readonly
                                    label="Mã hồ sơ"
                                    variant="standard"
                                    value={idProfile}
                                />
                            </li>
                            <li>
                                <TextField
                                    label="Họ và tên *"
                                    variant="standard"
                                    value={nameAdmin}
                                    onChange={(e) =>
                                        setNameAdmin(e.target.value)
                                    }
                                />
                            </li>
                            <li className={cx('textfield-gender')}>
                                <label className={cx('label-gender')}>
                                    Giới tính
                                </label>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={gendarAdmin}
                                    onChange={(e) =>
                                        setGendarAdmin(e.target.value)
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
                                        value="Nữ"
                                        control={
                                            <Radio
                                                sx={{
                                                    '& .MuiSvgIcon-root': {
                                                        fontSize: 22,
                                                    },
                                                }}
                                            />
                                        }
                                        label="Nữ"
                                    />
                                    <FormControlLabel
                                        value="Khác"
                                        control={
                                            <Radio
                                                sx={{
                                                    '& .MuiSvgIcon-root': {
                                                        fontSize: 22,
                                                    },
                                                }}
                                            />
                                        }
                                        label="Khác"
                                    />
                                </RadioGroup>
                            </li>
                            <li>
                                <TextField
                                    type="number"
                                    label="Năm sinh"
                                    variant="standard"
                                    value={yearBornAdmin}
                                    onChange={(e) =>
                                        setYearBornAdmin(e.target.value)
                                    }
                                />
                            </li>
                            {/* <li>
                                <TextField
                                    label="CCCD/CMT"
                                    variant="standard"
                                    value={identifyAdmin}
                                    onChange={(e) =>
                                        setIdentifyAdmin(e.target.value)
                                    }
                                />
                            </li> */}
                            <li>
                                <TextField
                                    label="Email"
                                    variant="standard"
                                    value={emailAdmin}
                                    onChange={(e) =>
                                        setEmailAdmin(e.target.value)
                                    }
                                />
                            </li>
                            <li>
                                <TextField
                                    label="Số điện thoại *"
                                    variant="standard"
                                    value={phoneAdmin}
                                    onChange={(e) =>
                                        setPhoneAdmin(e.target.value)
                                    }
                                />
                            </li>
                            <li>
                                <TextField
                                    className={cx('textfield-address')}
                                    label="Địa chỉ *"
                                    variant="standard"
                                    value={addressAdmin}
                                    onChange={(e) =>
                                        setAddressAdmin(e.target.value)
                                    }
                                />
                            </li>
                            <li className={cx('power-select')}>
                                <Select
                                    placeholder="Chức vụ"
                                    className={cx('select-field')}
                                    options={powerSelectOptions}
                                    onChange={handleChangeSelectPower}
                                />
                            </li>
                        </ul>

                        <Button
                            disabled={
                                !nameAdmin ||
                                !yearBornAdmin ||
                                !phoneAdmin ||
                                !addressAdmin ||
                                !gendarAdmin ||
                                !emailAdmin
                            }
                            variant="contained"
                            className={cx('create-account-btn')}
                            onClick={() => handleCreateAccount()}
                        >
                            <CreateIcon className={cx('icon-create')} />
                            TẠO TÀI KHOẢN QUẢN TRỊ VIÊN
                        </Button>

                        {createdAccount && (
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
                                                placeholder="Dán đường dẫn hình ảnh vào đây..."
                                                type="text"
                                                value={imagePreview}
                                                onChange={(e) =>
                                                    handleChangeURLImg(e)
                                                }
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <p className={cx('label')}>
                                            Tên đăng nhập
                                        </p>
                                        <p className={cx('content')}>
                                            {username}
                                        </p>
                                    </li>
                                    <li>
                                        <p className={cx('label')}>Mật khẩu</p>
                                        <p className={cx('content')}>
                                            {password}
                                        </p>
                                    </li>
                                    <li>
                                        <p className={cx('label')}>
                                            Trạng thái tài khoản
                                        </p>
                                        <p className={cx('content status')}>
                                            <FiberManualRecordIcon
                                                className={cx('status-icon')}
                                            />
                                            Hoạt động
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        )}
                        <div className={cx('button-form')}>
                            <Button
                                color="error"
                                variant="contained"
                                className={cx('cancle-button')}
                            >
                                THOÁT
                            </Button>
                            {!isLoading && (
                                <Button
                                    disabled={!createdAccount}
                                    color="success"
                                    variant="contained"
                                    className={cx('save-button')}
                                    onClick={() => submitSaveProfileAdmin()}
                                >
                                    LƯU
                                </Button>
                            )}

                            {isLoading && (
                                <Button
                                    disabled
                                    color="success"
                                    variant="contained"
                                    className={cx('save-button')}
                                >
                                    LƯU
                                </Button>
                            )}
                        </div>
                    </div>
                </Dialog>
            </Container>
        </Fragment>
    );
}
