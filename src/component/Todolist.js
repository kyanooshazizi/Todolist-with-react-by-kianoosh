import React, { useContext, useState ,useEffect} from 'react';
import styles from "./Todolist.module.scss";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Fab } from '@mui/material';
// contex
import {contexstate} from "../Reduser";
const Todolist = (props) => {
    const {state,dispach}=useContext(contexstate)
    const [mynote,setMynote]=useState(
        {
            title:"",
            note:"",
            flag:false
        }
    )
    const changeHandle=(e)=>{
      const {name,value}=e.target;
      setMynote({
        ...mynote,
        [name]:value,
      }
      )
    }
const newnoteHandler=(event)=>{
    event.preventDefault();
    dispach({type:"ADD_ITEM",pyload:mynote})
    setMynote({
        title:"",
        note:"",
        flag:false
    })
}




    return (
        <form className={styles.wrapper}>
            <input type="text" 
            value={mynote.title}
            placeholder='title' name='title'
            onChange={changeHandle}
            onClick={()=>setMynote({...mynote,flag:true})}
            />
            <textarea value={mynote.note}
            onChange={changeHandle}
            name="note" rows={mynote.flag?"8":"2"} placeholder='note...'>
            </textarea>
            <Fab  onClick={newnoteHandler}>
            <LocalHospitalIcon />
            </Fab>
        </form>
    )
    
};

export default Todolist;