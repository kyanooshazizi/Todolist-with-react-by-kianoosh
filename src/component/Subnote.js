import React,{useContext} from 'react';
import styles from "./Subnote.module.scss";
import DeleteIcon from '@mui/icons-material/Delete';
import {contexstate} from "../Reduser";

const Subnote = (props) => {
    const {item}=props;
    const {dispach}=useContext(contexstate);
    return (
        <div className={styles.note}>
            <h3>{item.title}</h3>
            <p>{item.note}</p>
            <button onClick={()=>{dispach({type:"DELET", pyload:item})}}><DeleteIcon/></button>
        </div>
    );
};

export default Subnote;