import React, { useContext,useState,useEffect } from 'react';
import Subnote from './Subnote';
import {contexstate} from "../Reduser";
import { getToDoItemsFromLocalStorage} from "../localstorage";

const Wrapper_Subnote = () => {
 const {state}=useContext(contexstate);
//  const [todoItems, setTodoItems] = useState(getToDoItemsFromLocalStorage('note') || []);


    return (
        <div>
            {state.map(x=><Subnote item={x} key={x.id} />)}
        </div>
    );
};

export default Wrapper_Subnote;