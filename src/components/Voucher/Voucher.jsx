import { React } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { MdAdd } from 'react-icons/md';

import { MdRemoveRedEye, MdDelete, MdEdit } from 'react-icons/md';

import { handleOpenAddDialog, isOpenAddDialog } from './VoucherSlice';
import styles from './Voucher.scss';
import AddDialog from './AddDialog';

const cx = classNames.bind(styles);

function Voucher() {
    const dispatch = useDispatch();
    const openAddDialog = useSelector(isOpenAddDialog);
    return (
        <div className={cx('voucher')}>
            <div>
                <div>
                    <Button
                        variant="contained"
                        className={cx('button-add')}
                        onClick={() => dispatch(handleOpenAddDialog())}
                    >
                        <MdAdd className={cx('icon')} />
                        <span>Thêm phiếu giảm giá</span>
                    </Button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th className={cx('text-center')}>Mã phiếu</th>
                            <th className={cx('text-left')}>Giá trị</th>
                            <th className={cx('text-center')}>Điều kiện</th>
                            <th className={cx('text-center')}>Ngày bắt đầu</th>
                            <th className={cx('text-center')}>Ngày kết thúc</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={cx('text-center id-voucher')}>
                                BOO1659403115010
                            </td>
                            <td className={cx('text-left value-voucher')}>
                                590.000 đ
                            </td>
                            <td className={cx('text-center ')}>
                                {'>'} 2.000.000 đ
                            </td>
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
                                    <Button
                                        color="error"
                                        className={cx('icon')}
                                    >
                                        <MdDelete />
                                    </Button>
                                    <Button
                                        color="primary"
                                        className={cx('icon')}
                                    >
                                        <MdRemoveRedEye />
                                    </Button>

                                    <Button
                                        color="success"
                                        className={cx('icon')}
                                    >
                                        <MdEdit />
                                    </Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {openAddDialog && <AddDialog></AddDialog>}
        </div>
    );
}

export default Voucher;
