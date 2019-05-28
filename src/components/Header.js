import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from 'antd';
import './styling/app.css';
const SubMenu = Menu.SubMenu;



function Header() { 
  return (
    <Menu
    style={{ width: 256 }}
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
    color="white"
  >

    <SubMenu className='nAv' key="sub2" title={<span><Icon type="appstore" /><span>Welcome</span></span>}>
      <Menu.Item key="5"><Link style={{color: 'white'}} to="/">Home</Link></Menu.Item>
      <Menu.Item key="6"><Link style={{color: 'white'}} to="/first">First</Link></Menu.Item>
      <SubMenu key="sub3" title="Ready For More">
        <Menu.Item key="7"><Link style={{color: 'white'}} to="/third">Second</Link></Menu.Item>
        <Menu.Item key="8"><Link style={{color: 'white'}} to="/second">Signup</Link></Menu.Item>
      </SubMenu>
    </SubMenu>
    
  </Menu>
);
}

export default Header;