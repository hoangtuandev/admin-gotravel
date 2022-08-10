// import { React, useState, useEffect } from 'react';
// import classNames from 'classnames/bind';
// import { useSelector, useDispatch } from 'react-redux';

// import { MdAdd } from 'react-icons/md';
// import Button from '@mui/material/Button';

// import styles from './Tour.scss';
// import * as api from '../../api';
// import TourItem from './TourItem';

// import {
//     handleOpenAddDialog,
//     isOpenAddDialog,
//     isOpenStopDialog,
//     isOpenUpdateDialog,
//     isShowStopedTour,
// } from './TourSlice';
// import AddDialog from './AddDialog';
// import UpdateDialog from './UpdateDialog';
// import StopDialog from './StopDialog';

// const cx = classNames.bind(styles);

// function StopedTour() {
//     const dispatch = useDispatch();
//     const openAddDialog = useSelector(isOpenAddDialog);
//     const openUpdateDialog = useSelector(isOpenUpdateDialog);
//     const openStopDialog = useSelector(isOpenStopDialog);
//     const openStopedTour = useSelector(isShowStopedTour);
//     const [tourList, setTourList] = useState([]);

//     useEffect(() => {
//         api.getAllStopedTour().then((res) => {
//             setTourList(res.data);
//         });
//     }, []);

//     return (
//         <div className={cx('tour')}>
//             <div>
//                 {/* {openAddDialog && (
//                     <AddDialog setTourList={setTourList}></AddDialog>
//                 )}
//                 {openUpdateDialog && (
//                     <UpdateDialog setTourList={setTourList}></UpdateDialog>
//                 )}
//                 {openStopDialog && (
//                     <StopDialog setTourList={setTourList}></StopDialog>
//                 )} */}

//                 <table
//                     className={cx('tour_table stoped-tours')}
//                     open={openStopedTour}
//                 >
//                     <thead>
//                         <tr>
//                             <th className={cx('left-col')}></th>
//                             <th className={cx('center-col')}>Mã tour</th>
//                             <th className={cx('left-col')}>Tên tour</th>
//                             <th className={cx('center-col')}>Thời gian</th>
//                             <th className={cx('center-col')}>Giá</th>
//                             <th></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td></td>
//                         </tr>
//                         {tourList.map((data, index) => (
//                             <TourItem key={index} data={data}></TourItem>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default StopedTour;
