import { React } from 'react';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { MdDelete, MdEdit, MdRemoveRedEye } from 'react-icons/md';

import styles from './TypeTourism.scss';
import {
    handleOpenDeleteDialog,
    handleOpenViewDialog,
    handleSetItemSelected,
    handleOpenUpdateDialog,
} from './TypeTourismSlice';

const cx = classNames.bind(styles);

function TypeItem(props) {
    const dispatch = useDispatch();
    const { data } = props;

    const handleClickView = () => {
        dispatch(handleSetItemSelected(data));
        dispatch(handleOpenViewDialog());
    };

    const handleClickDelete = () => {
        dispatch(handleSetItemSelected(data));
        dispatch(handleOpenDeleteDialog());
    };

    const handleClickUpdate = () => {
        dispatch(handleSetItemSelected(data));
        dispatch(handleOpenUpdateDialog());
    };

    return (
        <tr>
            <td className={cx('id-type')}>{data.lht_ma}</td>
            <td className={cx('name-type')}>{data.lht_ten}</td>
            <td className={cx('button-group')}>
                <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                    size="large"
                >
                    <Button
                        color="error"
                        className={cx('icon')}
                        onClick={() => handleClickDelete()}
                    >
                        <MdDelete />
                    </Button>
                    <Button
                        color="primary"
                        className={cx('icon')}
                        onClick={() => handleClickView()}
                    >
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

export default TypeItem;
