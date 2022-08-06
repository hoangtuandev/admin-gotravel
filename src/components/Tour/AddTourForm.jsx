// import { React, memo, useState, useEffect } from 'react';
// import classNames from 'classnames/bind';
// import { useDispatch } from 'react-redux';

// import Button from '@mui/material/Button';
// import { MdClose } from 'react-icons/md';

// import styles from './Tour.scss';

// import * as api from '../../api';
// import { handleCloseAddTourForm } from './TourSlice';

// const cx = classNames.bind(styles);

// function AddTourForm(props) {
//     const dispatch = useDispatch();
//     const [idTour, setIdTour] = useState('');

//     useEffect(() => {
//         setIdTour(setRandomID());
//     }, []);

//     const setRandomID = () => {
//         const current = new Date().getTime();
//         const randomID = `LHT${current}`;
//         return randomID;
//     };

//     return (
//         <div className={cx('add-tour-form')}>
//             <div className={cx('title-form')}>
//                 <button>THÊM TOUR MỚI</button>
//             </div>

//             <span className={cx('button-close-head')}>
//                 <button
//                     type="button"
//                     onClick={() => dispatch(handleCloseAddTourForm())}
//                 >
//                     <MdClose />
//                 </button>
//             </span>

//             <table>
//                 <thead></thead>
//                 <tbody>
//                     <tr>
//                         <td className={cx('label ')}>Mã tour</td>
//                         <td className={cx('content id-field')}>{idTour}</td>
//                         <td className={cx('label')}>Tên tour</td>
//                         <td className={cx('content name-field')}>
//                             <input type="text" />
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default memo(AddTourForm);
