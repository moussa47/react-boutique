import React from 'react'
import {MdPhone,MdEmail} from 'react-icons/all';
import styled from 'styled-components';

export default function Footer() {
    return (
        <divContainer>
        <div class=" bg-primary ">    
        <div className="container">
            <ul className="list">
                <li><MdPhone/> <span>775614057</span></li>
                <li> <MdEmail/> <span>moussak67@hotmail.com</span></li>
            </ul>
        </div>
     </div>
        </divContainer>
     
    )
}
const divContainer = styled.div`
  
}

`
