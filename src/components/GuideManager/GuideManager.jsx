import { React } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';

import styles from './GuideManager.scss';
import { addProfile, handleToggleAddProfile } from './GuideManagerSlice';
import AddProfile from './AddProfile';

const cx = classNames.bind(styles);

function GuideManager() {
    const dispatch = useDispatch();
    const openAdd = useSelector(addProfile);

    const handleAddProfile = () => {
        dispatch(handleToggleAddProfile(true));
    };

    return (
        <div className={cx('guide-manager')}>
            <div className={cx('buttons-group')}>
                <Button
                    variant="contained"
                    className="button-add-advertisement"
                    onClick={() => handleAddProfile()}
                >
                    <AddIcon className={cx('icon')} />
                    <span>THÊM HỒ SƠ HDV</span>
                </Button>
            </div>
            <div className="box-manager">
                <table>
                    <thead>
                        <tr>
                            <td></td>
                            <td>Tài khoản</td>
                            <td className={cx('name-guide')}>Hướng dẫn viên</td>
                            <td>Năm sinh</td>
                            <td>Đánh giá</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <PersonIcon
                                    className={cx('user-icon')}
                                ></PersonIcon>
                            </td>
                            <td>HDV220134</td>
                            <td className={cx('name-guide')}>
                                Phạm Hoàng Tuấn
                            </td>
                            <td>2000</td>
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
                                        <VisibilityIcon
                                            className={cx('icon')}
                                        />
                                    </Button>
                                    <Button color="success">
                                        <EditIcon className={cx('icon')} />
                                    </Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <PersonIcon
                                    className={cx('user-icon')}
                                ></PersonIcon>
                            </td>
                            <td>HDV220134</td>
                            <td className={cx('name-guide')}>
                                Phạm Hoàng Tuấn
                            </td>
                            <td>2000</td>
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
                                        <VisibilityIcon
                                            className={cx('icon')}
                                        />
                                    </Button>
                                    <Button color="success">
                                        <EditIcon className={cx('icon')} />
                                    </Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {openAdd && <AddProfile></AddProfile>}
        </div>
    );
}

export default GuideManager;
