import { React, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import { MdAdd } from 'react-icons/md';
import { TbArrowBackUp } from 'react-icons/tb';
import { ImSearch } from 'react-icons/im';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';

import styles from './Tour.scss';
import * as api from '../../api';
import TourItem from './TourItem';

import {
    handleCloseStopedTour,
    handleOpenAddDialog,
    handleOpenStopedTour,
    isOpenAddDialog,
    isOpenStopDialog,
    isOpenUpdateDialog,
    isOpenViewDialog,
    isShowStopedTour,
} from './TourSlice';
import AddDialog from './AddDialog';
import UpdateDialog from './UpdateDialog';
import StopDialog from './StopDialog';
import ViewDialog from './ViewDialog';

const cx = classNames.bind(styles);

function Tour() {
    const dispatch = useDispatch();
    const openAddDialog = useSelector(isOpenAddDialog);
    const openUpdateDialog = useSelector(isOpenUpdateDialog);
    const openStopDialog = useSelector(isOpenStopDialog);
    const showStopedTour = useSelector(isShowStopedTour);
    const openViewDialog = useSelector(isOpenViewDialog);
    const [tourList, setTourList] = useState([]);
    const [allTour, setAllTour] = useState([]);
    const [stopedTourList, setStopedTourList] = useState([]);
    const [sortValue, setSortValue] = useState(0);
    const [keySearching, setKeySearching] = useState('');

    useEffect(() => {
        api.getAllActiveTour().then((res) => {
            setTourList(res.data);
            setAllTour(res.data);
        });

        api.getAllStopedTour().then((res) => {
            setStopedTourList(res.data);
        });
    }, []);

    useEffect(() => {
        api.searchingTour({ keySearch: keySearching }).then((res) => {
            setTourList(res.data);
        });
        setSortValue(0);
    }, [keySearching]);

    const handleChangeSortValue = (event, newAlignment) => {
        setSortValue(newAlignment);

        if (newAlignment === 1) {
            tourList.sort((a, b) => parseFloat(a.t_gia) - parseFloat(b.t_gia));
        } else if (newAlignment === -1) {
            tourList.sort((a, b) => parseFloat(b.t_gia) - parseFloat(a.t_gia));
        }
    };

    const handleGetAllActiveTour = () => {
        api.getAllActiveTour().then((res) => {
            setTourList(res.data);
            dispatch(handleCloseStopedTour());
        });

        api.getAllStopedTour().then((res) => {
            setStopedTourList(res.data);
        });
    };

    return (
        <div className={cx('tour')}>
            <div>
                {!showStopedTour && (
                    <Button
                        variant="contained"
                        className={cx('button-add')}
                        onClick={() => dispatch(handleOpenAddDialog())}
                    >
                        <MdAdd className={cx('icon')} />
                        <span>Thêm Tour mới</span>
                    </Button>
                )}
                {showStopedTour && (
                    <Button
                        variant="contained"
                        className={cx('button-add')}
                        onClick={() => handleGetAllActiveTour()}
                    >
                        <TbArrowBackUp className={cx('icon')} />
                        <span>TOUR ĐANG HOẠT ĐỘNG</span>
                    </Button>
                )}
                {!showStopedTour && (
                    <Button
                        variant="contained"
                        className={cx('button-stopedTour')}
                        onClick={() => dispatch(handleOpenStopedTour())}
                    >
                        <span>TOUR NGƯNG HOẠT ĐỘNG</span>
                    </Button>
                )}

                {!showStopedTour && (
                    <div className={cx('filter-tours')}>
                        <div className={cx('searching-tour')}>
                            <input
                                value={keySearching}
                                onChange={(e) =>
                                    setKeySearching(e.target.value)
                                }
                                type="text"
                                placeholder="Nhập tên tour..."
                            />
                            <ImSearch className={cx('icon-search')} />
                        </div>
                        <ToggleButtonGroup
                            color="error"
                            value={sortValue}
                            exclusive
                            onChange={handleChangeSortValue}
                            aria-label="Platform"
                            className={cx('toggle-button-group')}
                        >
                            <ToggleButton value={1}>
                                {allTour.length > 0 &&
                                allTour[0].t_gia < allTour[1]
                                    ? 'Giá tour giảm dần'
                                    : 'Giá tour tăng dần'}
                            </ToggleButton>
                            <ToggleButton value={-1}>
                                {allTour.length > 0 &&
                                allTour[0].t_gia < allTour[1]
                                    ? 'Giá tour tăng dần'
                                    : 'Giá tour giảm dần'}
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                )}

                {tourList.length === 0 && (
                    <div className={cx('empty-tourList')}>
                        <p>Không tìm thấy kết quả phù hợp!</p>
                        <img
                            src="https://res.cloudinary.com/phtuandev/image/upload/v1660285963/GoTravel/undraw_Explore_re_8l4v_lvunn9.png   "
                            alt=""
                        />
                    </div>
                )}

                {!showStopedTour && tourList.length > 0 && (
                    <table className={cx('tour_table')}>
                        <thead>
                            <tr>
                                <th className={cx('left-col')}></th>
                                <th className={cx('left-col')}>Tên tour</th>
                                <th className={cx('left-col')}>
                                    Loại hình tour
                                </th>
                                <th className={cx('center-col')}>Thời gian</th>
                                <th className={cx('center-col')}>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                            </tr>
                            {tourList.map((data, index) => (
                                <TourItem key={index} data={data}></TourItem>
                            ))}
                        </tbody>
                    </table>
                )}
                {showStopedTour && stopedTourList.length === 0 && (
                    <div className={cx('empty-tourList')}>
                        <p>Không tìm thấy kết quả phù hợp!</p>
                        <img
                            src="https://res.cloudinary.com/phtuandev/image/upload/v1660285963/GoTravel/undraw_Explore_re_8l4v_lvunn9.png   "
                            alt=""
                        />
                    </div>
                )}

                {showStopedTour && stopedTourList.length !== 0 && (
                    <table className={cx('tour_table stoped-tours')}>
                        <thead>
                            <tr>
                                <th className={cx('left-col')}></th>
                                <th className={cx('left-col')}>Tên tour</th>
                                <th className={cx('center-col')}>
                                    Loại hình tour
                                </th>
                                <th className={cx('center-col')}>Thời gian</th>
                                <th className={cx('center-col')}>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                            </tr>
                            {stopedTourList.map((data, index) => (
                                <TourItem
                                    setTourList={setTourList}
                                    setStopedTourList={setStopedTourList}
                                    key={index}
                                    data={data}
                                ></TourItem>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            {openAddDialog && <AddDialog setTourList={setTourList}></AddDialog>}
            {openUpdateDialog && (
                <UpdateDialog setTourList={setTourList}></UpdateDialog>
            )}
            {openStopDialog && (
                <StopDialog
                    setTourList={setTourList}
                    setStopedTourList={setStopedTourList}
                ></StopDialog>
            )}
            {openViewDialog && <ViewDialog></ViewDialog>}
        </div>
    );
}

export default Tour;
