// import { React, useState } from 'react';
// import classNames from 'classnames/bind';
// import { useDispatch } from 'react-redux';

// import * as Icon from 'react-icons/fc';

// import styles from './Sidenav.scss';
// import { setLabelOption } from '../GlobalSlice';
// // import ReactHtmlParser, {
// //     processNodes,
// //     convertNodeToElement,
// //     htmlparser2,
// // } from 'react-html-parser';

// const cx = classNames.bind(styles);

// const selectedStyle = {
//     cursor: 'pointer',
//     transform: 'scale(1.05)',
//     transition: 'ease-in-out 0.2s',
//     backgroundColor: 'white',
//     borderTopRightRadius: '50px',
//     borderBottomRightRadius: '50px',
//     borderLeft: '13px solid #0b9de0',
//     boxShadow: '1px 1px 7px #a8a8a8',
//     color: '#005cbefe',
//     fontWeight: '600',
// };

// function Option(props) {
//     const dispatch = useDispatch();
//     const label = props.option.label;
//     const icon = props.option.icon;
//     // const icon = new DOMParser().parseFromString(props.option.icon, 'text/xml');

//     const [styleSelected, setStyleSelected] = useState(false);

//     const handleSelectOption = (e) => {
//         setStyleSelected(true);
//         dispatch(setLabelOption(e.target.title));
//     };
//     console.log(icon);
//     return (
//         <li
//             onClick={(e) => handleSelectOption(e)}
//             title={label}
//             styles={styleSelected ? selectedStyle : ''}
//         >
//             <span className={cx('icon')} title={label}>
//                 <Icon.FcLandscape />
//             </span>
//             <span className={cx('label')} title={label}>
//                 {label}
//             </span>
//         </li>
//     );
// }

// export default Option;
