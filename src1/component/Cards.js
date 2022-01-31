import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes , faDownload } from "@fortawesome/free-solid-svg-icons";



function Cards(props) {

  const [show, setShow] = useState(false);

  
  

  
  return (
    <div className="col-sm-4">
    <img src={props.image} alt=""/>
    
      <div onClick={() => setShow(true)} className="image-click"></div>
    
    
    {show && <div className="close-and-download-btn-wrapper">
    <ul>
    <li><FontAwesomeIcon icon={faDownload}/></li>
    <li onClick={() => setShow(false)}><FontAwesomeIcon icon={faTimes}/></li>
    </ul>

    </div>}

    
    </div>   
  
    );
  }
  
  export default Cards;
  