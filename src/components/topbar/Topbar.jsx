import React from 'react';
import"./topbar.css";
import companyLogo from '../../insight.png';
import accnotimail from '../../accnotimail.png';


export default function Topbar() {
  return <div clasName ="topbar">
      <div className="topbarWrapper">
      <div className="topLeft">
        <span className="logo"><img className='logo'src={companyLogo}/></span>
      </div>
      <div className="topRight">
        <div className="topbarIcionContainer">
        <img className='acc' src={accnotimail}/>
        </div>
        
      </div>
      </div>
     
  </div>;
}
