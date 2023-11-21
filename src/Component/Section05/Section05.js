import React from 'react';
import '../Section05/Section05.css';
import STImg from '../../assets/images/kids.png';

export default function Section05() {
  return (
    <>
     <div className='fifthSection'>
        <div className='fifth'>
        <div className="fifthImg">
            <img src={STImg} alt="" />
          </div>
          <div className='fifthDes'>
            <span>Create profiles for kids</span>
            <span>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</span>
          </div>
        </div>
      </div> 
    </>
  )
}
