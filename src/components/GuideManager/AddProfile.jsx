import { React, Fragment, forwardRef, useState } from 'react';
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
import CreateIcon from '@mui/icons-material/Create';
import Slide from '@mui/material/Slide';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import styles from './GuideManager.scss';
import { addProfile, handleToggleAddProfile } from './GuideManagerSlice';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export default function AddProfile(props) {
    const dispatch = useDispatch();
    const openDialog = useSelector(addProfile);

    const [createdAccount, setCreateAccount] = useState(false);
    const [idProfile, setIdProfile] = useState('');
    const [nameGuide, setNameGuide] = useState('');
    const [gendarGuide, setGendarGuide] = useState('');
    const [yearBornGuide, setYearBornGuide] = useState('');
    const [identifyGuide, setIdentifyGuide] = useState('');
    const [emailGuide, setEmailGuide] = useState('');
    const [phoneGuide, setPhoneGuide] = useState('');
    const [addressGuide, setAddressGuide] = useState('');

    useEffect(() => {
        setIdProfile(setRandomID());
    }, []);

    function generateString(length) {
        let result = ' ';
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
        const randomID = `PG0${current}`;
        return randomID;
    };

    const handleCreateAccount = () => {
        setCreateAccount(true);
    };

    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Dialog
                    open={openDialog}
                    onClose={() => dispatch(handleToggleAddProfile(false))}
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
                                    dispatch(handleToggleAddProfile(false))
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
                                THÊM HỒ SƠ HƯỚNG DẪN VIÊN
                            </Typography>

                            <Button
                                autoFocus
                                color="inherit"
                                className={cx('btn-decline')}
                                onClick={() =>
                                    dispatch(handleToggleAddProfile(false))
                                }
                            >
                                THOÁT
                            </Button>
                        </Toolbar>
                    </AppBar>

                    <div className={cx('add-profile')}>
                        <p className={cx('label-panel')}>
                            Thông tin hướng dẫn viên
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
                                    value={nameGuide}
                                    onChange={(e) =>
                                        setNameGuide(e.target.value)
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
                                    label="Năm sinh"
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
                                    label="Số điện thoại *"
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
                                    label="Địa chỉ *"
                                    variant="standard"
                                    value={addressGuide}
                                    onChange={(e) =>
                                        setAddressGuide(e.target.value)
                                    }
                                />
                            </li>
                        </ul>

                        {identifyGuide && (
                            <Button
                                variant="contained"
                                className={cx('create-account-btn')}
                                onClick={() => handleCreateAccount()}
                            >
                                <CreateIcon className={cx('icon-create')} />
                                TẠO TÀI KHOẢN HƯỚNG DẪN VIÊN
                            </Button>
                        )}
                        {!identifyGuide && (
                            <Button
                                disabled
                                variant="contained"
                                className={cx('create-account-btn')}
                            >
                                <CreateIcon className={cx('icon-create')} />
                                TẠO TÀI KHOẢN HƯỚNG DẪN VIÊN
                            </Button>
                        )}
                        <div className={cx('account-guide')}>
                            <ul>
                                <li>
                                    <p className={cx('label')}>Tên đăng nhập</p>
                                    <p className={cx('content')}>HDV220134</p>
                                </li>
                                <li>
                                    <p className={cx('label')}>Mật khẩu</p>
                                    <p className={cx('content')}>HDV220134</p>
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
                    </div>
                </Dialog>
            </Container>
        </Fragment>
    );
}
