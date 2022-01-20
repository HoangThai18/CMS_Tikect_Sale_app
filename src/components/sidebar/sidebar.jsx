import React from 'react';
import"./sidebar.css";
import home from '../../home.png';
import set from '../../set.png';
import quanli from '../../quanli.png';
import soatve from '../../soatve.png';
export default function Sidebar() {
  return <div className='sidebar'>
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <h3 className="sidebarTittle"></h3>
        <ul className="sidebarList">
          <li className="sidebarListItem active">
            <img className='sidebarimg' src={home}/> Trang chủ
          </li>
          <li className="sidebarListItem">
            <img className='sidebarimg' src={quanli}/> Quản lí vé
          </li>
          <li className="sidebarListItem">
            <img className='sidebarimg' src={soatve}/> Đối soát vé
          </li>
          <li className="sidebarListItem">
            <img className='sidebarimg' src={set}/> Cài đặt
          </li>
          <li className="sidebarListItem">
             <span className='goi'>Gói dịch vụ</span>
          </li>
          
        </ul>
      </div>
    </div>
  </div>;
}
