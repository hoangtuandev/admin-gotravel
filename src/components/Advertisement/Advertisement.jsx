import { React, useState } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import styles from './Advertisement.scss';
import AdvertisementItem from './AdvertisementItem';
import ViewAdvertisement from './ViewAvertisement';
import {
    addAdvertisement,
    handleToggleAddAdvertisement,
    listAdvertisement,
    updateAdvertisement,
    viewAdvertisement,
} from './AdvertisementSlice';
import AddAdvertisement from './AddAdvertisement';
import * as api from '../../api';
import { useEffect } from 'react';
import UpdateAdvertisement from './UpdateAdvertisement';

const cx = classNames.bind(styles);

function Advertisement() {
    const dispatch = useDispatch();
    const openView = useSelector(viewAdvertisement);
    const openAdd = useSelector(addAdvertisement);
    const openUpdate = useSelector(updateAdvertisement);
    const advertisements = useSelector(listAdvertisement);

    const [advertisementList, setAdvertisementList] = useState(advertisements);

    useEffect(() => {
        api.getActiveAdvertisement().then((res) => {
            setAdvertisementList(res.data);
        });
    }, []);

    const handleAddAdvertisement = () => {
        dispatch(handleToggleAddAdvertisement(true));
    };

    return (
        <div className={cx('advertisement')}>
            <div>
                <Button
                    variant="contained"
                    className="button-add-advertisement"
                    onClick={() => handleAddAdvertisement()}
                >
                    <AddIcon className={cx('icon')} />
                    <span> THÊM BÀI VIẾT</span>
                </Button>
            </div>
            <div>
                <ul className={cx('list-advertisements')}>
                    {advertisementList.map((advertisement, index) => (
                        <AdvertisementItem
                            key={index}
                            advertisement={advertisement}
                        ></AdvertisementItem>
                    ))}
                </ul>
            </div>
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
        </div>
    );
}

export default Advertisement;
