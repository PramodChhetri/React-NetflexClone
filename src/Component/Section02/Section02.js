import React from 'react';
import '../Section02/Section02.css';
import tvImg from '../../assets/images/tv.png';
import tvVideo from '../../assets/videos/video-tv.m4v';

export default function Section02() {
  return (
    <>
      <div className='secondSection'>
        <div className='second'>
          <div className='secDes'>
            <span>Enjoy on your TV</span>
            <span>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</span>
          </div>
          <div className="secImg">
            <img src={tvImg} alt="" />
            <video autoPlay loop src={tvVideo}></video>
          </div>
        </div>
      </div>
    </>
  )
}
