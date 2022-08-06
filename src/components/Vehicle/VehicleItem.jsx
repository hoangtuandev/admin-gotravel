import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { MdDelete, MdEdit, MdRemoveRedEye } from 'react-icons/md';

import styles from './Vehicle.scss';
import {
    handleOpenDeleteDialog,
    handleOpenViewDialog,
    handleSetItemSelected,
    handleOpenUpdateDialog,
} from './VehicleSlice';

const cx = classNames.bind(styles);

function VehicleItem(props) {
    const { item } = props;
    const dispatch = useDispatch();

    const handleClickView = () => {
        dispatch(handleSetItemSelected(item));
        dispatch(handleOpenViewDialog());
    };

    const handleClickDelete = () => {
        dispatch(handleSetItemSelected(item));
        dispatch(handleOpenDeleteDialog());
    };

    const handleClickUpdate = () => {
        dispatch(handleSetItemSelected(item));
        dispatch(handleOpenUpdateDialog());
    };

    return (
        <tr>
            <td className={cx('id-vehicle')}>{item.pt_ma}</td>
            <td className={cx('name-vehicle')}>{item.pt_ten}</td>
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

export default VehicleItem;
