import { React } from 'react';
import classNames from 'classnames/bind';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { MdRemoveRedEye, MdDelete, MdEdit } from 'react-icons/md';

import styles from './Voucher.scss';
// import * as api from '../../api';

const cx = classNames.bind(styles);

function VoucherItem() {
    return (
        <tr>
            <td className={cx('text-center id-voucher')}>BOO1659403115010</td>
            <td className={cx('text-left value-voucher')}>590.000 đ</td>
            <td className={cx('text-center ')}>{'>'} 2.000.000 đ</td>
            <td className={cx('text-center')}>08/08/2022</td>
            <td className={cx('text-center')}>08/08/2022</td>
            <td className={cx('text-center')}></td>
            <td className={cx('text-center')}>
                <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                    size="large"
                    className={cx('buttons-group')}
                >
                    <Button color="error" className={cx('icon')}>
                        <MdDelete />
                    </Button>
                    <Button color="primary" className={cx('icon')}>
                        <MdRemoveRedEye />
                    </Button>

                    <Button color="success" className={cx('icon')}>
                        <MdEdit />
                    </Button>
                </ButtonGroup>
            </td>
        </tr>
    );
}

export default VoucherItem;
