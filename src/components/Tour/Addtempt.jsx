// import { React, memo, useState, useEffect, forwardRef } from 'react';
// import classNames from 'classnames/bind';
// import { useSelector, useDispatch } from 'react-redux';

// import Select from 'react-select';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import CloseIcon from '@mui/icons-material/Close';
// import Slide from '@mui/material/Slide';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Container from '@material-ui/core/Container';

// import styles from './Tour.scss';

// import * as api from '../../api';
// import { handleCloseAddDialog, isOpenAddDialog } from './TourSlice';

// const cx = classNames.bind(styles);

// const Transition = forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

// function AddDialog(props) {
//     const dispatch = useDispatch();
//     const openDialog = useSelector(isOpenAddDialog);
//     const [typeTourismList, setTypeTourismList] = useState([]);
//     var typeTourisms = [];

//     const [idTour, setIdTour] = useState('');

//     useEffect(() => {
//         setIdTour(setRandomID());
//         api.getAllTypeTourism().then((res) => {
//             getTypeTourismLis(res.data);
//         });
//     }, []);

//     const getTypeTourismLis = (list) => {
//         list.map((data, index) =>
//             typeTourismList.push({
//                 value: data.lht_ten,
//                 label: data.lht_ten,
//             })
//         );
//     };

//     const setRandomID = () => {
//         const current = new Date().getTime();
//         const randomID = `T00${current}`;
//         return randomID;
//     };

//     return (
//         <div>
//             <Dialog
//                 className={cx('add-dialog')}
//                 fullScreen
//                 open={openDialog}
//                 onClose={() => dispatch(handleCloseAddDialog())}
//                 TransitionComponent={Transition}
//             >
//                 <AppBar
//                     sx={{ position: 'relative' }}
//                     className={cx('add-dialog-appbar')}
//                 >
//                     <Toolbar className={cx('add-dialog-toolbar')}>
//                         <IconButton
//                             className={cx('add-dialog-iconButton')}
//                             edge="start"
//                             color="inherit"
//                             onClick={() => dispatch(handleCloseAddDialog())}
//                             aria-label="close"
//                         >
//                             <CloseIcon className={cx('add-dialog-icon')} />
//                         </IconButton>
//                         <Typography
//                             className={cx('add-dialog-typography')}
//                             sx={{ ml: 2, flex: 1 }}
//                             variant="h6"
//                             component="div"
//                         >
//                             THÊM TOUR MỚI
//                         </Typography>
//                         <Button className={cx('add-dialog-btn-save')}>
//                             SAVE
//                         </Button>
//                     </Toolbar>
//                 </AppBar>
//                 {/* <div className={cx('add-form')}>
//                     <CssBaseline />
//                     <Container fixed>
//                         <Typography
//                             className={cx('add-form-typography')}
//                             component="div"
//                             style={{ height: '100vh' }}
//                         >
//                             <ul>
//                                 <li className={cx('fields-item field-id')}>
//                                     <input
//                                         className={cx('text-field ')}
//                                         type="text"
//                                         name="username"
//                                         id="username"
//                                         placeholder=" "
//                                         value={idTour}
//                                         onChange={(e) =>
//                                             setIdTour(e.target.value)
//                                         }
//                                     />
//                                     <label className={cx('label-field')}>
//                                         Mã tour
//                                     </label>
//                                 </li>
//                                 <li className={cx('fields-item field-name')}>
//                                     <input
//                                         className={cx('text-field')}
//                                         type="text"
//                                         name="username"
//                                         id="username"
//                                         placeholder=" "
//                                     />
//                                     <label className={cx('label-field')}>
//                                         Tên tour
//                                     </label>
//                                 </li>
//                             </ul>
//                             <ul>
//                                 <li className={cx('fields-item')}>
//                                     <Select
//                                         className={cx('select-field')}
//                                         placeholder="Loại hình tour"
//                                         options={typeTourismList}
//                                     >
//                                         <option label="ONE" value="ONE">
//                                             ONE
//                                         </option>
//                                         <option>TWO</option>
//                                         <option>THREE</option>
//                                     </Select>
//                                 </li>
//                                 <li className={cx('fields-item')}>
//                                     <input
//                                         className={cx('text-field')}
//                                         type="text"
//                                         name="username"
//                                         id="username"
//                                         placeholder=" "
//                                     />
//                                     <label className={cx('label-field')}>
//                                         Tên tour
//                                     </label>
//                                 </li>
//                             </ul>
//                         </Typography>
//                     </Container>
//                 </div> */}
//             </Dialog>
//         </div>
//     );
// }

// export default memo(AddDialog);
