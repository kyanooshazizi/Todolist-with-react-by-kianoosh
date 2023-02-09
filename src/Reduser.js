import React, { useReducer, createContext,useState,useEffect} from 'react';
import uuid from 'react-uuid';
import {saveTodoItemsToLocalStorage,getToDoItemsFromLocalStorage} from "./localstorage";
// import { getToDoItemsFromLocalStorage} from "../localstorage";

export const contexstate=createContext();
// state
const initstate=[];
const handler=(state,action)=>{
       switch(action.type){
        case "load":
          return([...action.pyload])
        case "ADD_ITEM":
              // const todoItems= getToDoItemsFromLocalStorage('note');
              state.push({
                ...action.pyload,
                id:uuid()})
                // console.log(state)
                saveTodoItemsToLocalStorage('note',[...state])
          return([...state])

        case "DELET":
          const newstate=state.filter(x => x.id!==action.pyload.id)
          saveTodoItemsToLocalStorage('note',[...newstate])
          return([...newstate])
          default:
              return state;
            }
    }

const Reduser = (props) => {
const[state,dispach]=useReducer(handler,initstate);   
useEffect(() => {
    if (getToDoItemsFromLocalStorage('note').length!==0){
      var todoItems=getToDoItemsFromLocalStorage('note');
      dispach({type:"load",pyload:todoItems})
        console.log(todoItems)
       
    }
   
 }, []);
 
 

    return (
       <contexstate.Provider value={{state,dispach}}>
        {props.children}
       </contexstate.Provider>
    );
};

export default Reduser;