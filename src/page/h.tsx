import { Button, Layout, Table, Tag } from 'antd';
import { FC } from 'react';
import Icon_sreach from '../images/Icon_sreach.png';
import Icon_edit from '../images/Icon_edit.png';

const { Content } = Layout;
const Service: FC = () => {

  return (
    <Content
      className="site-layout-conten"
      style={{
        marginRight: '33px',
        padding: 24,
        minHeight: 280,
      }}
    >
      <div className="projects" style={{ background: "#FFFFFF", borderRadius: "24px", }}>
        <div className="card">
          <div className="card-title">
            <h2 style={{ fontSize: "36px", fontWeight: "bold", }}>Danh sách gói vé</h2>
          </div>

          <div className="card-header">
            <div className="search-wrapper">
              <input type="search" placeholder="Tìm bằng số vé" />
              <img src={Icon_sreach} alt="" />
            </div>

            <div className="card-button">
              <Button >Xuất file (.cvs)</Button>
              
                  {/*  */}
             

            </div>

          </div>

        

        </div>
      </div>
    </Content>
  )
};


export default Service;