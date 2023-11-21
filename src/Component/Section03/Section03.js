import React from 'react';
import '../Section03/Section03.css';
import STImg from '../../assets/images/mobile.jpg';

export default function Section03() {
  return (
    <>
    <div className='thirdSection'>
        <div className='third'>
        <div className="thirdImg">
            <img src={STImg} alt="" />
          </div>
          <div className='thirdDes'>
            <span>Download your shows to watch offline</span>
            <span>Save your favorites easily and always have something to watch.</span>
          </div>
        </div>
      </div>
    </>
  )
}
