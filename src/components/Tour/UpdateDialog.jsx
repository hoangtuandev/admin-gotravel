import { React, memo, useState, useEffect, forwardRef } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import CurrencyInput from 'react-currency-input-field';
import moment from 'moment';

import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import CircularProgress from '@mui/material/CircularProgress';

import DatePicker from 'react-datepicker';
import { MdOutlineClose } from 'react-icons/md';
import { TbPlayerTrackNext } from 'react-icons/tb';

import 'react-datepicker/dist/react-datepicker.css';

import styles from './Tour.scss';

import * as api from '../../api';
import {
    handleCloseUpdateDialog,
    isOpenUpdateDialog,
    itemSelected,
} from './TourSlice';
import { useRef } from 'react';

const cx = classNames.bind(styles);

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function UpdateDialog(props) {
    const dispatch = useDispatch();
    const openDialog = useSelector(isOpenUpdateDialog);
    const tourSelected = useSelector(itemSelected);
    const imageRef = useRef(null);
    const { setTourList } = props;
    const currentDate = new Date();

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingDeparture, setIsLoadingDeparture] = useState(false);
    const [isLoadingSchedule, setIsLoadingSchedule] = useState(false);
    const [openAlertSuccess, setOpenAlertSuccess] = useState(false);
    const [typeTourismList, setTypeTourismList] = useState([]);
    const [vehicleList, setVehicleList] = useState([]);
    const [errorImg, setErrorImg] = useState('');
    const [imagePreview, setImagePreview] = useState('');

    const [idTour, setIdTour] = useState(tourSelected.t_ma);
    const [nameTour, setNameTour] = useState(tourSelected.t_ten);
    const [typeTourism, setTypeTourism] = useState(
        tourSelected.t_loaihinh.lht_ma
    );
    const [timeTour, setTimeTour] = useState(tourSelected.t_thoigian);
    const [priceTour, setPriceTour] = useState(tourSelected.t_gia);
    const [limitPasenger, setLimitPassenger] = useState(
        tourSelected.t_soluongkhach || ''
    );
    const [limitGuide, setLimitGuide] = useState(
        tourSelected.t_soluonghuongdanvien || ''
    );
    const [imageList, setImageList] = useState(tourSelected.t_hinhanh);

    const [startDate, setStartDate] = useState(new Date());
    const [finishDate, setFinishDate] = useState(new Date());
    const [addressDeparture, setAddressDeparture] = useState('');
    const [vehiclesDeparture, setVehicleDeparture] = useState([]);

    const [daySchedule, setDaySchedule] = useState('');
    const [nameSchedule, setNameSchedule] = useState('');
    const [vehiclesSchedule, setVehicleSchedule] = useState([]);
    const [detailsSchedule, setDetailsSchedule] = useState('');
    const [scheduleList, setScheduleList] = useState(
        tourSelected.t_lichtrinhtour
    );

    useEffect(() => {
        api.getAllTypeTourism().then((res) => {
            res.data.map((data, index) => setTypeTourismList(res.data));
        });

        api.getAllVehicle().then((res) => {
            res.data.map((data, index) => setVehicleList(res.data));
        });
    }, []);

    const updateCurrentDepartures = (departure) => {
        const start = new Date(departure.lkh_ngaykhoihanh);
        return start > currentDate;
    };

    const [departureList, setDepartureList] = useState(
        tourSelected.t_lichkhoihanh.filter(updateCurrentDepartures)
    );

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
            // itemData.push(imageRef.current.src);
            const imgs = [...imageList];
            imgs.push(imageRef.current.src);
            setImageList(imgs);
            setImagePreview('');
        }
    };

    const handleDeleteImg = (image) => {
        const imgList = [...imageList];
        for (var i = 0; i < imgList.length; i++) {
            if (imgList[i] === image) {
                imgList.splice(i, 1);
            }
        }
        setImageList(imgList);
    };

    const handleSubmitUpdateTour = () => {
        setIsLoading(true);
        api.getTypeTourismById({ lht_ma: typeTourism }).then((res) => {
            api.updateTour({
                _id: tourSelected._id,
                t_ma: idTour,
                t_ten: nameTour,
                t_loaihinh: res.data,
                t_thoigian: timeTour,
                t_gia: priceTour,
                t_hinhanh: imageList,
                t_soluongkhach: limitPasenger,
                t_soluonghuongdanvien: limitGuide,
            }).then((res) => {
                api.getAllTour().then((res) => {
                    setTourList(res.data);
                    clearTimeout(alert);
                    setIsLoading(false);
                    setOpenAlertSuccess(true);
                    setTimeout(() => setOpenAlertSuccess(false), 3000);
                });
            });
        });
    };

    const handleChangeVehicle = (vehicle) => {
        if (vehicle.status) {
            const listTemp = [...vehiclesDeparture];
            listTemp.push(vehicle.vehicleObj);
            setVehicleDeparture(listTemp);
        } else {
            const listTemp = [...vehiclesDeparture];
            for (let i = 0; i < listTemp.length; i++) {
                if (listTemp[i].pt_ma === vehicle.vehicleObj.pt_ma) {
                    listTemp.splice(i, 1);
                }
            }
            setVehicleDeparture(listTemp);
        }
    };

    const handleChangeVehicleSchedule = (vehicle) => {
        if (vehicle.status) {
            const listTemp = [...vehiclesSchedule];
            listTemp.push(vehicle.vehicleObj);
            setVehicleSchedule(listTemp);
        } else {
            const listTemp = [...vehiclesSchedule];
            for (let i = 0; i < listTemp.length; i++) {
                if (listTemp[i].pt_ma === vehicle.vehicleObj.pt_ma) {
                    listTemp.splice(i, 1);
                }
            }
            setVehicleSchedule(listTemp);
        }
    };

    const handleAddDeparture = () => {
        setIsLoadingDeparture(true);
        let start = new Date(startDate.getTime());
        let finish = new Date(finishDate.getTime());

        api.createDeparture({
            lkh_ngaykhoihanh: start.toISOString(),
            lkh_ngayketthuc: finish.toISOString(),
            lkh_diadiem: addressDeparture,
            lkh_phuongtien: vehiclesDeparture,
        }).then((res) => {
            const departure = res.data;

            api.addCalendarGuide({
                ldt_tour: tourSelected,
                ldt_lichkhoihanh: res.data,
                ldt_huongdanvien: [],
            });

            api.getTourById({ t_ma: tourSelected.t_ma }).then((res) => {
                const newDepartures = [...res.data.t_lichkhoihanh, departure];
                api.updateTourWithDeparture({
                    _id: tourSelected._id,
                    t_lichkhoihanh: newDepartures,
                }).then((res) => {
                    setVehicleDeparture([]);
                    setStartDate(new Date());
                    setFinishDate(new Date());
                    setAddressDeparture('');

                    api.getTourById({ t_ma: tourSelected.t_ma }).then((res) => {
                        setDepartureList(
                            res.data.t_lichkhoihanh.filter(
                                updateCurrentDepartures
                            )
                        );
                        setIsLoadingDeparture(false);
                    });
                });
            });
        });
    };

    const handleDeleteDeparture = (departure) => {
        api.deleteDeparture({
            _id: departure._id,
            idTour: tourSelected._id,
        }).then((res) => {
            api.deleteDepartureFromTour({
                _id: departure._id,
                idTour: tourSelected._id,
            }).then((res) => {
                api.getTourById({ t_ma: tourSelected.t_ma }).then((res) => {
                    setDepartureList(res.data.t_lichkhoihanh);
                });
            });
        });
    };

    const handleAddSchedule = () => {
        setIsLoadingSchedule(true);
        api.createScheduleTour({
            ltt_ten: nameSchedule,
            ltt_ngay: daySchedule,
            ltt_noidung: detailsSchedule,
            ltt_phuongtien: vehiclesSchedule,
        }).then((res) => {
            const schedule = res.data;
            api.getTourById({ t_ma: tourSelected.t_ma }).then((res) => {
                const newSchedule = [...res.data.t_lichtrinhtour, schedule];
                api.updateTourWithScheduleTour({
                    _id: tourSelected._id,
                    t_lichtrinhtour: newSchedule,
                }).then((res) => {
                    api.getTourById({ t_ma: tourSelected.t_ma }).then((res) => {
                        setScheduleList(res.data.t_lichtrinhtour);
                        setNameSchedule('');
                        setDaySchedule('');
                        setDetailsSchedule('');
                        setIsLoadingSchedule(false);
                    });
                });
            });
        });
    };

    const handleCloseDialog = () => {
        api.getAllActiveTour().then((res) => {
            setTourList(res.data);
        });
        dispatch(handleCloseUpdateDialog());
    };

    const handleDeleteSchedule = (schedule) => {
        api.deleteScheduleTour({
            _id: schedule._id,
            idTour: tourSelected._id,
        }).then((res) => {
            api.deleteScheduleFromTour({
                _id: schedule._id,
                idTour: tourSelected._id,
            }).then((res) => {
                setDaySchedule('');
                setNameSchedule('');
                setDetailsSchedule('');
                api.getTourById({ t_ma: tourSelected.t_ma }).then((res) => {
                    setScheduleList(res.data.t_lichtrinhtour);
                });
            });
        });
    };

    return (
        <div>
            <Dialog
                className={cx('add-dialog')}
                fullScreen
                open={openDialog}
                onClose={() => dispatch(handleCloseUpdateDialog())}
                TransitionComponent={Transition}
            >
                {openAlertSuccess && (
                    <Stack
                        sx={{ width: '400px' }}
                        spacing={2}
                        className={cx('stack-mui')}
                    >
                        <Alert
                            variant="filled"
                            severity="success"
                            className={cx('alert-popup')}
                        >
                            <AlertTitle className={cx('alert-title')}>
                                Th??nh c??ng
                            </AlertTitle>
                            C???p nh???t th??ng tin tour th??nh c??ng !
                            <span
                                className={cx('icon-close')}
                                onClick={() => setOpenAlertSuccess(false)}
                            >
                                <MdOutlineClose />
                            </span>
                        </Alert>
                    </Stack>
                )}
                <AppBar
                    sx={{ position: 'relative' }}
                    className={cx('add-dialog-appbar')}
                >
                    <Toolbar className={cx('add-dialog-toolbar')}>
                        <IconButton
                            className={cx('add-dialog-iconButton')}
                            edge="start"
                            color="inherit"
                            onClick={() => dispatch(handleCloseUpdateDialog())}
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
                            C???P NH???T TH??NG TIN TOUR
                        </Typography>
                        <Button
                            className={cx('add-dialog-btn-save')}
                            onClick={() => handleCloseDialog()}
                        >
                            THO??T
                        </Button>
                    </Toolbar>
                </AppBar>
                <div className={cx('add-form')}>
                    <div className={cx('add-form-main')}>
                        <div className={cx('title-panel')}>
                            <span>TH??NG TIN TOUR</span>
                        </div>
                        <ul>
                            <li className={cx('fields-item field-id')}>
                                <input
                                    readOnly
                                    className={cx('text-field ')}
                                    type="text"
                                    placeholder=" "
                                    value={idTour}
                                    onChange={(e) => setIdTour(e.target.value)}
                                />
                                <label className={cx('label-field')}>
                                    M?? tour
                                </label>
                            </li>
                            <li className={cx('fields-item field-name')}>
                                <input
                                    className={cx('text-field')}
                                    type="text"
                                    placeholder=""
                                    value={nameTour}
                                    onChange={(e) =>
                                        setNameTour(e.target.value)
                                    }
                                />
                                <label className={cx('label-field')}>
                                    T??n tour
                                </label>
                            </li>
                        </ul>
                        <ul>
                            <li className={cx('fields-item')}>
                                <select
                                    name="selectTypeTour"
                                    id="selectTypeTour"
                                    className={cx('text-field select-field')}
                                    value={typeTourism}
                                    onChange={(e) =>
                                        setTypeTourism(e.target.value)
                                    }
                                >
                                    <option>Ch???n lo???i h??nh tour</option>
                                    {typeTourismList.map((data, index) => (
                                        <option key={index} value={data.lht_ma}>
                                            {data.lht_ten}
                                        </option>
                                    ))}
                                </select>
                                <label className={cx('label-field')}>
                                    Lo???i h??nh tour
                                </label>
                            </li>
                            <li className={cx('fields-item')}>
                                <input
                                    className={cx('text-field')}
                                    type="text"
                                    placeholder=""
                                    value={timeTour}
                                    onChange={(e) =>
                                        setTimeTour(e.target.value)
                                    }
                                />
                                <label className={cx('label-field')}>
                                    S??? ng??y
                                </label>
                            </li>
                        </ul>
                        <ul>
                            <li className={cx('fields-item')}>
                                <span className={cx('icon-field')}>??</span>
                                <CurrencyInput
                                    className={cx('text-field field-price')}
                                    defaultValue={0}
                                    decimalsLimit={2}
                                    value={priceTour}
                                    onValueChange={(value) => {
                                        setPriceTour(value);
                                    }}
                                />
                                <label className={cx('label-field')}>
                                    Gi?? tour
                                </label>
                            </li>
                            <li className={cx('fields-item')}>
                                <input
                                    className={cx('text-field')}
                                    type="text"
                                    placeholder=""
                                    value={limitPasenger}
                                    onChange={(e) =>
                                        setLimitPassenger(e.target.value)
                                    }
                                />
                                <label className={cx('label-field')}>
                                    S??? l?????ng kh??ch t???i ??a
                                </label>
                            </li>
                        </ul>
                        <ul>
                            <li className={cx('fields-item')}>
                                <input
                                    className={cx('text-field')}
                                    type="text"
                                    placeholder=""
                                    value={limitGuide}
                                    onChange={(e) =>
                                        setLimitGuide(e.target.value)
                                    }
                                />
                                <label className={cx('label-field')}>
                                    S??? l?????ng h?????ng d???n vi??n
                                </label>
                            </li>
                            <li className={cx('fields-item')}></li>
                        </ul>
                        <div className={cx('images-upload')}>
                            <div className={cx('images-control')}>
                                <p>Th??m h??nh ???nh</p>
                                <div className={cx('url-link')}>
                                    <label>URL</label>
                                    <input
                                        placeholder="D??n ???????ng d???n h??nh ???nh v??o ????y..."
                                        type="text"
                                        value={imagePreview}
                                        onChange={(e) => handleChangeURLImg(e)}
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
                                        onClick={() => handleClickSaveImage()}
                                    >
                                        L??U H??NH ???NH
                                    </Button>
                                </div>
                            </div>
                            <div className={cx('images-list')}>
                                <p>H??nh ???nh tour</p>
                                <ul>
                                    {imageList.map((item, index) => (
                                        <li key={index}>
                                            <img src={item} alt="" />
                                            <IconButton
                                                className={cx(
                                                    'delete-departure'
                                                )}
                                                aria-label="delete"
                                                onClick={() =>
                                                    handleDeleteImg(item)
                                                }
                                            >
                                                <DeleteIcon
                                                    className={cx('icon')}
                                                />
                                            </IconButton>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={cx('save-tour')}>
                            {isLoading && (
                                <Button
                                    disabled
                                    variant="contained"
                                    size="large"
                                    onClick={() => handleSubmitUpdateTour()}
                                >
                                    <CircularProgress
                                        size={24}
                                        className={cx('circularProgress')}
                                    />
                                    &nbsp;&nbsp; C???P NH???T...
                                </Button>
                            )}
                            {!isLoading && (
                                <Button
                                    className={cx('button-save')}
                                    variant="contained"
                                    size="large"
                                    onClick={() => handleSubmitUpdateTour()}
                                >
                                    C???P NH???T
                                </Button>
                            )}
                        </div>
                    </div>

                    <div className={cx('departure')}>
                        <div className={cx('title-panel')}>
                            <span>L???CH KH???I H??NH TOUR</span>
                        </div>
                        <div className={cx('departure-schedule')}>
                            <div className={cx('calendar-control')}>
                                <div className={cx('calendar')}>
                                    <div className={cx('schedule-calendar')}>
                                        <p>Ng??y kh???i h??nh</p>
                                        <DatePicker
                                            dateFormat="dd / MM / yyyy"
                                            selected={startDate}
                                            onChange={(date) => {
                                                return setStartDate(date);
                                            }}
                                        />
                                    </div>
                                    <div className={cx('icon-next')}>
                                        <TbPlayerTrackNext />
                                    </div>
                                    <div className={cx('schedule-calendar')}>
                                        <p>Ng??y k???t th??c</p>
                                        <DatePicker
                                            dateFormat="dd / MM / yyyy"
                                            selected={finishDate}
                                            onChange={(date) => {
                                                return setFinishDate(date);
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className={cx('calender-field')}>
                                    <div className={cx('label')}>?????a ??i???m</div>
                                    <div className={cx('id-departure')}>
                                        <input
                                            type="text"
                                            placeholder="Nh???p d???a ??i???m kh???i h??nh..."
                                            value={addressDeparture}
                                            onChange={(e) =>
                                                setAddressDeparture(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>

                                <div className={cx('field-checkbox')}>
                                    <span>Ph????ng ti???n</span>
                                    <FormGroup className={cx('form-group')}>
                                        {vehicleList.map((data, index) => (
                                            <li key={index}>
                                                <FormControlLabel
                                                    className={cx(
                                                        'form-control'
                                                    )}
                                                    control={
                                                        <Checkbox
                                                            color="success"
                                                            id={data.pt_ma}
                                                            sx={{
                                                                '& .MuiSvgIcon-root':
                                                                    {
                                                                        fontSize: 26,
                                                                    },
                                                            }}
                                                            onChange={(e) =>
                                                                handleChangeVehicle(
                                                                    {
                                                                        vehicleObj:
                                                                            data,
                                                                        status: e
                                                                            .target
                                                                            .checked,
                                                                    }
                                                                )
                                                            }
                                                        />
                                                    }
                                                />

                                                <label htmlFor={data.pt_ma}>
                                                    {data.pt_ten}
                                                </label>
                                            </li>
                                        ))}
                                    </FormGroup>
                                </div>

                                <div className={cx('button-groups')}>
                                    {isLoadingDeparture && (
                                        <Button
                                            className={cx('button-save')}
                                            disabled
                                            variant="contained"
                                            size="large"
                                            onClick={() => handleAddDeparture()}
                                        >
                                            <CircularProgress
                                                size={24}
                                                className={cx(
                                                    'circularProgress'
                                                )}
                                            />
                                            &nbsp;&nbsp; ??ANG X??? L?? ...
                                        </Button>
                                    )}
                                    {!isLoadingDeparture && (
                                        <Button
                                            className={cx('button-save')}
                                            variant="contained"
                                            size="large"
                                            onClick={() => handleAddDeparture()}
                                        >
                                            TH??M V??O L???CH KH???I H??NH
                                        </Button>
                                    )}
                                </div>
                            </div>
                            <div className={cx('list-schedule')}>
                                <p className={cx('label-list')}>
                                    L???CH KH???I H??NH S???P T???I
                                </p>

                                {departureList.map((item, index) => (
                                    <Accordion
                                        className={cx('accordion')}
                                        key={index}
                                    >
                                        <AccordionSummary
                                            className={cx('accordion-summary')}
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                        >
                                            <Typography
                                                className={cx(
                                                    'typography typography-summary'
                                                )}
                                            >
                                                T???
                                                <span>
                                                    {moment(
                                                        item.lkh_ngaykhoihanh
                                                    ).format('DD/MM/YYYY')}
                                                </span>
                                                ?????n
                                                <span>
                                                    {moment(
                                                        item.lkh_ngayketthuc
                                                    ).format('DD/MM/YYYY')}
                                                </span>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails
                                            className={cx('accordion-details')}
                                        >
                                            <Typography
                                                className={cx(
                                                    'typography typography-details'
                                                )}
                                            >
                                                <span
                                                    className={cx(
                                                        'details-item'
                                                    )}
                                                >
                                                    <span
                                                        className={cx('label')}
                                                    >
                                                        ?????a ??i???m
                                                    </span>
                                                    <span
                                                        className={cx(
                                                            'content'
                                                        )}
                                                    >
                                                        {item.lkh_diadiem}
                                                    </span>
                                                </span>
                                                <span
                                                    className={cx(
                                                        'details-item'
                                                    )}
                                                >
                                                    <span
                                                        className={cx('label')}
                                                    >
                                                        Ph????ng ti???n
                                                    </span>
                                                    <span
                                                        className={cx(
                                                            'content'
                                                        )}
                                                    >
                                                        {item.lkh_phuongtien
                                                            .map(
                                                                (item, index) =>
                                                                    item.pt_ten
                                                            )
                                                            .join(', ')}
                                                    </span>
                                                </span>

                                                <IconButton
                                                    className={cx(
                                                        'delete-departure'
                                                    )}
                                                    aria-label="delete"
                                                    onClick={() =>
                                                        handleDeleteDeparture(
                                                            item
                                                        )
                                                    }
                                                >
                                                    <DeleteIcon
                                                        className={cx('icon')}
                                                    />
                                                </IconButton>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={cx('schedule-tour')}>
                        <div className={cx('title-panel')}>
                            <span>L???CH TR??NH TOUR</span>
                        </div>
                        <div className={cx('schedule-main')}>
                            <div className={cx('schedule-control')}>
                                <div className={cx('control-item ')}>
                                    <span className={cx('label')}>
                                        Ng??y{' '}
                                        <input
                                            type="text"
                                            value={daySchedule}
                                            onChange={(e) =>
                                                setDaySchedule(e.target.value)
                                            }
                                        />
                                    </span>
                                </div>
                                <div className={cx('control-item')}>
                                    <p className={cx('label')}>
                                        T??n l???ch tr??nh
                                    </p>
                                    <input
                                        type="text"
                                        placeholder="Nh???p t??n l???ch tr??nh..."
                                        value={nameSchedule}
                                        onChange={(e) =>
                                            setNameSchedule(e.target.value)
                                        }
                                    />
                                </div>

                                <div
                                    className={cx(
                                        ' control-item field-checkbox'
                                    )}
                                >
                                    <span>Ph????ng ti???n</span>
                                    <FormGroup className={cx('form-group')}>
                                        {vehicleList.map((data, index) => (
                                            <li key={index}>
                                                <FormControlLabel
                                                    className={cx(
                                                        'form-control'
                                                    )}
                                                    control={
                                                        <Checkbox
                                                            color="success"
                                                            id={`${data.pt_ma}Schedule`}
                                                            sx={{
                                                                '& .MuiSvgIcon-root':
                                                                    {
                                                                        fontSize: 26,
                                                                    },
                                                            }}
                                                            onChange={(e) =>
                                                                handleChangeVehicleSchedule(
                                                                    {
                                                                        vehicleObj:
                                                                            data,
                                                                        status: e
                                                                            .target
                                                                            .checked,
                                                                    }
                                                                )
                                                            }
                                                        />
                                                    }
                                                />

                                                <label
                                                    htmlFor={`${data.pt_ma}Schedule`}
                                                >
                                                    {data.pt_ten}
                                                </label>
                                            </li>
                                        ))}
                                    </FormGroup>
                                </div>

                                <div className={cx('control-item')}>
                                    <p className={cx('label')}>N???i dung</p>
                                    <textarea
                                        placeholder="N???i dung l???ch tr??nh..."
                                        value={detailsSchedule}
                                        onChange={(e) =>
                                            setDetailsSchedule(e.target.value)
                                        }
                                    ></textarea>
                                </div>
                                <div
                                    className={cx('control-item button-groups')}
                                >
                                    {isLoadingSchedule && (
                                        <Button
                                            className={cx('button-save')}
                                            disabled
                                            variant="contained"
                                            size="large"
                                        >
                                            <CircularProgress
                                                size={24}
                                                className={cx(
                                                    'circularProgress'
                                                )}
                                            />
                                            &nbsp;&nbsp; ??ANG X??? L?? ...
                                        </Button>
                                    )}
                                    {!isLoadingSchedule && (
                                        <Button
                                            className={cx('button-save')}
                                            variant="contained"
                                            size="large"
                                            onClick={() => handleAddSchedule()}
                                        >
                                            TH??M V??O L???CH TR??NH TOUR
                                        </Button>
                                    )}
                                </div>
                            </div>
                            <div className={cx('schedule-list')}>
                                {scheduleList.map((item, index) => (
                                    <Accordion
                                        className={cx('accordion')}
                                        key={index}
                                    >
                                        <AccordionSummary
                                            className={cx('accordion-summary')}
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                        >
                                            <Typography
                                                className={cx(
                                                    'typography typography-summary'
                                                )}
                                            >
                                                Ng??y {item.ltt_ngay}:{' '}
                                                {item.ltt_ten}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails
                                            className={cx('accordion-details')}
                                        >
                                            <Typography
                                                className={cx(
                                                    'typography typography-details'
                                                )}
                                            >
                                                <span
                                                    className={cx(
                                                        'details-item'
                                                    )}
                                                >
                                                    <span
                                                        className={cx('label')}
                                                    >
                                                        Ph????ng ti???n
                                                    </span>
                                                    <span
                                                        className={cx(
                                                            'content'
                                                        )}
                                                    >
                                                        {item.ltt_phuongtien
                                                            .map(
                                                                (item, index) =>
                                                                    item.pt_ten
                                                            )
                                                            .join(', ')}
                                                    </span>
                                                </span>
                                                <span
                                                    className={cx(
                                                        'details-item'
                                                    )}
                                                >
                                                    <span
                                                        className={cx('label')}
                                                    >
                                                        N???i dung
                                                    </span>
                                                    <span
                                                        className={cx(
                                                            'content'
                                                        )}
                                                    >
                                                        {item.ltt_noidung}
                                                    </span>
                                                </span>

                                                <IconButton
                                                    className={cx(
                                                        'delete-departure'
                                                    )}
                                                    aria-label="delete"
                                                    onClick={() =>
                                                        handleDeleteSchedule(
                                                            item
                                                        )
                                                    }
                                                >
                                                    <DeleteIcon
                                                        className={cx('icon')}
                                                    />
                                                </IconButton>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}

export default memo(UpdateDialog);
