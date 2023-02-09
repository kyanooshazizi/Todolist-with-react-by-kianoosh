import React from 'react';
import styles from "./Header.module.scss";
import HighlightIcon from '@mui/icons-material/Highlight';

const Header = (props) => {
    return (
        <div className={styles.Header}>
         <HighlightIcon color="primary" className={styles.icon}/>
         <span className={styles.text}>Todolist</span>
        </div>
    );
};

export default Header;