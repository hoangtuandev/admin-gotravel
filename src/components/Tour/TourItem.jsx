import { React } from 'react';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { MdDelete, MdEdit, MdRemoveRedEye } from 'react-icons/md';

import styles from './Tour.scss';
import { handleOpenUpdateDialog, handleSetItemSelected } from './TourSlice';

const cx = classNames.bind(styles);

function TourItem(props) {
    const { data } = props;
    const dispatch = useDispatch();

    const handleClickUpdate = () => {
        dispatch(handleSetItemSelected(data));
        dispatch(handleOpenUpdateDialog());
    };

    return (
        <tr>
            <td className={cx('center-col img-tour')}>
                <img src={data.t_hinhanh[0]} alt="" />
            </td>
            <td className={cx('center-col')}>{data.t_ma}</td>
            <td className={cx('left-col name-tour-col')}>{data.t_ten}</td>
            <td className={cx('center-col')}>{data.t_thoigian} ngày</td>
            <td className={cx('center-col')}>
                {data.t_gia.toLocaleString('vi', {
                    style: 'currency',
                    currency: 'VND',
                })}
            </td>
            <td className={cx('button-group')}>
                <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                    size="large"
                >
                    <Button color="error" className={cx('icon')}>
                        <MdDelete />
                    </Button>
                    <Button color="primary" className={cx('icon')}>
                        <MdRemoveRedEye />
                    </Button>

                    <Button
                        color="success"
                        className={cx('icon')}
                        onClick={() => handleClickUpdate()}
                    >
                        <MdEdit />
                    </Button>
                </ButtonGroup>
            </td>
        </tr>
    );
}

export default TourItem;
