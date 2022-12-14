import { React, useState } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import AddIcon from '@mui/icons-material/Add';
import styles from './Advertisement.scss';
import AdvertisementItem from './AdvertisementItem';
import ViewAdvertisement from './ViewAvertisement';
import {
    addAdvertisement,
    deleteAdvertisement,
    handleToggleAddAdvertisement,
    listAdvertisement,
    removeAdvertisement,
    typeListAdvertisement,
    updateAdvertisement,
    viewAdvertisement,
    handleChangeTypeAdvertisement,
    activeAdvertisement,
} from './AdvertisementSlice';
import AddAdvertisement from './AddAdvertisement';
import * as api from '../../api';
import { useEffect } from 'react';
import UpdateAdvertisement from './UpdateAdvertisement';
import RemoveAdvertisement from './RemoveAdvertisement';
import DeleteAdvertisement from './DeleteAdvertisement';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import ActiveAdvertisement from './ActiveAdvertisement';
import SearchIcon from '@mui/icons-material/Search';

const cx = classNames.bind(styles);

function Advertisement() {
    const dispatch = useDispatch();
    const openView = useSelector(viewAdvertisement);
    const openAdd = useSelector(addAdvertisement);
    const openUpdate = useSelector(updateAdvertisement);
    const openRemove = useSelector(removeAdvertisement);
    const openActive = useSelector(activeAdvertisement);
    const openDelete = useSelector(deleteAdvertisement);
    const advertisements = useSelector(listAdvertisement);
    const typeList = useSelector(typeListAdvertisement);

    const [advertisementList, setAdvertisementList] = useState(advertisements);
    const [keySearching, setKeySearching] = useState('');
    const [page, setPage] = useState(1);

    const handleChangePagination = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        typeList === 1 &&
            api.getActiveAdvertisement().then((res) => {
                setAdvertisementList(res.data);
            });
        typeList === 2 &&
            api.getRemoveAdvertisement().then((res) => {
                setAdvertisementList(res.data);
            });
    }, [typeList]);

    function removeVietnameseTones(str) {
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'a');
        str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, 'e');
        str = str.replace(/??|??|???|???|??/g, 'i');
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'o');
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, 'u');
        str = str.replace(/???|??|???|???|???/g, 'y');
        str = str.replace(/??/g, 'd');
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'A');
        str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, 'E');
        str = str.replace(/??|??|???|???|??/g, 'I');
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'O');
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, 'U');
        str = str.replace(/???|??|???|???|???/g, 'Y');
        str = str.replace(/??/g, 'D');

        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
        str = str.replace(/\u02C6|\u0306|\u031B/g, '');
        str = str.replace(/ + /g, ' ');
        str = str.trim();

        // str = str.replace(
        //     /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
        //     ' '
        // );
        return str;
    }

    const handleChangeKeySearching = (newValue) => {
        setKeySearching(newValue);

        const filterByKey = (advertisement) => {
            return removeVietnameseTones(advertisement.bvqb_tieude)
                .toLowerCase()
                .includes(newValue.toLowerCase());
        };

        typeList === 1 &&
            api.getActiveAdvertisement().then((res) => {
                setAdvertisementList(res.data.filter(filterByKey));
            });

        typeList === 2 &&
            api.getRemoveAdvertisement().then((res) => {
                setAdvertisementList(res.data.filter(filterByKey));
            });
    };

    const handleAddAdvertisement = () => {
        dispatch(handleToggleAddAdvertisement(true));
    };

    return (
        <div className={cx('advertisement')}>
            <div className={cx('btn-group')}>
                {typeList === 1 && (
                    <Button
                        variant="contained"
                        className="button-add-advertisement"
                        onClick={() => handleAddAdvertisement()}
                    >
                        <AddIcon className={cx('icon')} />
                        <span> TH??M B??I VI???T</span>
                    </Button>
                )}
                {typeList === 2 && (
                    <Button
                        variant="contained"
                        className="button-add-advertisement"
                        onClick={() =>
                            dispatch(handleChangeTypeAdvertisement(1))
                        }
                    >
                        <ReplyAllIcon className={cx('icon')} />
                        <span> B??I VI???T ??ANG ????NG</span>
                    </Button>
                )}
                {typeList === 1 && (
                    <Button
                        variant="contained"
                        className="button-remove-advertisement"
                        onClick={() =>
                            dispatch(handleChangeTypeAdvertisement(2))
                        }
                    >
                        <BrokenImageIcon className={cx('icon')} />
                        <span> B??I VI???T ???? G???</span>
                    </Button>
                )}
            </div>
            <div className={cx('filter-advertisement')}>
                <div className={cx('searching')}>
                    <input
                        type="text"
                        placeholder="Nh???p t??n b??i ????ng..."
                        value={keySearching}
                        onChange={(e) =>
                            handleChangeKeySearching(e.target.value)
                        }
                    />
                    <SearchIcon className={cx('icon')} />
                </div>
                {/* <div className={cx('expired-date')}>
                    <Box width={300}>
                        <Slider
                            size="large"
                            defaultValue={10}
                            step={1}
                            min={1}
                            max={30}
                            color="error"
                            valueLabelDisplay="auto"
                        />
                    </Box>
                </div> */}
            </div>
            <div>
                {typeList === 1 && (
                    <ul className={cx('list-advertisements')}>
                        {advertisementList
                            .slice((page - 1) * 10, (page - 1) * 10 + 10)
                            .map((advertisement, index) => (
                                <AdvertisementItem
                                    key={index}
                                    advertisement={advertisement}
                                ></AdvertisementItem>
                            ))}
                    </ul>
                )}
                {typeList === 2 && (
                    <ul className={cx('list-advertisements remove-list')}>
                        {advertisementList.map((advertisement, index) => (
                            <AdvertisementItem
                                key={index}
                                advertisement={advertisement}
                            ></AdvertisementItem>
                        ))}
                    </ul>
                )}
            </div>
            {Math.ceil(advertisementList.length / 10) > 1 && (
                <div className={cx('pagination-list')}>
                    <Pagination
                        size="large"
                        count={Math.ceil(advertisementList.length / 10)}
                        page={page}
                        color="error"
                        variant="outlined"
                        className={cx('pagination')}
                        onChange={handleChangePagination}
                    />
                </div>
            )}
            {openView && <ViewAdvertisement></ViewAdvertisement>}
            {openAdd && (
                <AddAdvertisement
                    setAdvertisementList={setAdvertisementList}
                ></AddAdvertisement>
            )}
            {openUpdate && (
                <UpdateAdvertisement
                    setAdvertisementList={setAdvertisementList}
                ></UpdateAdvertisement>
            )}
            {openRemove && (
                <RemoveAdvertisement
                    setAdvertisementList={setAdvertisementList}
                ></RemoveAdvertisement>
            )}
            {openDelete && (
                <DeleteAdvertisement
                    setAdvertisementList={setAdvertisementList}
                ></DeleteAdvertisement>
            )}
            {openActive && (
                <ActiveAdvertisement
                    setAdvertisementList={setAdvertisementList}
                ></ActiveAdvertisement>
            )}
        </div>
    );
}

export default Advertisement;
