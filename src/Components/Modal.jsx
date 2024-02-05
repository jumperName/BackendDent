import React, { useEffect, useState } from "react";
import "./Modal.css";
import Calendar from "react-calendar";
import Moment from "react-moment";


function Modal({ setOpenModal }) {

  const [value, onChange] = useState(new Date());

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
              console.log(value)
            }}
          >
            
          </button>
        </div>
       
        <div className="body">
        <Calendar        
        onChange={onChange} 
        value={value}
            
        onClickDay={(day) => {console.log(day) 
          onChange(day.dateString)
        }
        }
        
         />
      
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;