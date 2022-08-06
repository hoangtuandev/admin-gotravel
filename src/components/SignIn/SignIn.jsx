import { React, useState } from 'react';
import classNames from 'classnames/bind';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
// import Backdrop from '@material-ui/core/Backdrop';
// import CircularProgress from '@material-ui/core/CircularProgress';

import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';

import styles from './SignIn.scss';
import * as api from '../../api';
import { clientURL } from '../../app/clientURL';

const cx = classNames.bind(styles);

function SignIn() {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [contentError, setContentError] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const parseJwt = (token) => {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(
            window
                .atob(base64)
                .split('')
                .map(function (c) {
                    return (
                        '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
                    );
                })
                .join('')
        );

        return JSON.parse(jsonPayload);
    };

    const handleSubmitSignIn = (event) => {
        event.preventDefault();

        api.handleSignIn({
            tkqtv_tendangnhap: username,
        }).then((res) => {
            if (!res.data.error) {
                const admin = parseJwt(res.data);
                if (password === admin.password) {
                    setContentError('');
                    localStorage.setItem('username', admin.username);
                    if (localStorage.getItem('username')) {
                        window.location.href = `${clientURL}`;
                    }
                } else {
                    setContentError('Mật khẩu không đúng');
                }
            } else {
                setContentError('Tài khoản không tồn tại!');
            }
        });
    };

    return (
        <div className={cx('user-form sign-in')}>
            <CssBaseline />
            <Container fixed>
                <Typography
                    className={cx('user-form_content')}
                    component="div"
                    style={{ height: '100vh' }}
                >
                    <div className={cx('content-left')}>
                        <div className={cx('content-left_logo')}>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1657686014/GoTravel/Screenshot_2022-07-13_111948_kotv2a.png"
                                alt="Logo_GoTravel"
                            />
                        </div>
                    </div>

                    <div className={cx('content-right')}>
                        <div className={cx('right-form')}>
                            <form
                                className={cx('form-control')}
                                onSubmit={(event) => handleSubmitSignIn(event)}
                            >
                                <p>ADMIN</p>
                                <div className={cx('form-groups')}>
                                    <div className={cx('fields-item')}>
                                        <span className={cx('icon-field')}>
                                            <MdPersonOutline />
                                        </span>
                                        <input
                                            className={cx('text-field')}
                                            type="text"
                                            name="username"
                                            id="username"
                                            placeholder=" "
                                            value={username}
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                        />
                                        <label className={cx('label-field')}>
                                            Tên đăng nhập
                                        </label>
                                    </div>
                                    <div className={cx('fields-item')}>
                                        <span className={cx('icon-field')}>
                                            <RiLockPasswordLine />
                                        </span>
                                        <input
                                            className={cx('text-field')}
                                            type={
                                                (isShowPassword && 'text') ||
                                                (!isShowPassword && 'password')
                                            }
                                            name="password"
                                            id="password"
                                            placeholder=" "
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                        <label className={cx('label-field')}>
                                            Mật khẩu
                                        </label>
                                        <span
                                            className={cx('toggle-eye')}
                                            onClick={() =>
                                                setIsShowPassword(
                                                    !isShowPassword
                                                )
                                            }
                                        >
                                            {isShowPassword && (
                                                <AiOutlineEye
                                                    className={cx('eye-icon')}
                                                />
                                            )}
                                            {!isShowPassword && (
                                                <AiOutlineEyeInvisible
                                                    className={cx('eye-icon')}
                                                />
                                            )}
                                        </span>
                                    </div>
                                    <div
                                        className={cx(
                                            'fields-item eror-password'
                                        )}
                                    >
                                        {contentError}
                                    </div>
                                </div>
                                <div className={cx('btns-form')}>
                                    <Button
                                        disabled={!username || !password}
                                        type="submit"
                                        className={cx('button-form')}
                                        variant="contained"
                                        size="small"
                                        color="secondary"
                                    >
                                        ĐĂNG NHẬP
                                    </Button>
                                </div>
                                <div className={cx('forgot-password')}>
                                    Bạn quên mật khẩu ?
                                </div>
                            </form>
                        </div>
                    </div>
                    <div></div>
                </Typography>
            </Container>
        </div>
    );
}

export default SignIn;
