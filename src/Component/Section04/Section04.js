import React from 'react';
import '../Section04/Section04.css';
import tvImg from '../../assets/images/device-pile.png';
import tvVideo from '../../assets/videos/video4.m4v';

export default function Section04() {
  return (
    <>
      <div className='fourthSection'>
        <div className='fourth'>
          <div className='fourthDes'>
            <span>Watch everywhere</span>
            <span>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</span>
          </div>
          <div className="fourthImg">
            <img src={tvImg} alt="" />
            <video autoPlay loop src={tvVideo}></video>
          </div>
        </div>
      </div>
    </>
  )
}
