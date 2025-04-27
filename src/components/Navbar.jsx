// import React from 'react';
// import { NavLink } from 'react-router-dom';
// // import './Navbar.css'; // Optional: You can create a CSS file for styling

// const Navbar = () => {
//     return (
//         <nav>
//             <ul>
//                 <li>
//                     <NavLink to="/" exact activeClassName="active">Home</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/about" activeClassName="active">About</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/team" activeClassName="active">Team</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/career" activeClassName="active">Career</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/pricing" activeClassName="active">Pricing</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/contact" activeClassName="active">Contact</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/login" activeClassName="active">Login</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/signup" activeClassName="active">Signup</NavLink>
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Button, Space, Typography, Grid, Drawer } from 'antd';
import { 
  RocketOutlined, 
  MenuOutlined, 
  CloseOutlined,
  UserOutlined,
  UserAddOutlined
} from '@ant-design/icons';

const { Header } = Layout;
const { Title } = Typography;
const { useBreakpoint } = Grid;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const screens = useBreakpoint();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  // Common menu items
  const menuItems = [
    { key: 'home', label: <NavLink to="/" exact activeClassName="ant-menu-item-selected">Home</NavLink> },
    { key: 'about', label: <NavLink to="/about" activeClassName="ant-menu-item-selected">About</NavLink> },
    { key: 'team', label: <NavLink to="/team" activeClassName="ant-menu-item-selected">Team</NavLink> },
    { key: 'career', label: <NavLink to="/career" activeClassName="ant-menu-item-selected">Career</NavLink> },
    { key: 'pricing', label: <NavLink to="/pricing" activeClassName="ant-menu-item-selected">Pricing</NavLink> },
    { key: 'contact', label: <NavLink to="/contact" activeClassName="ant-menu-item-selected">Contact</NavLink> },
  ];

  // Auth buttons
  const authButtons = (
    <Space size="middle" style={{ marginLeft: screens.md ? 0 : 'auto' }}>
      <Button 
        icon={<UserOutlined />}
        type="text" 
        className="auth-btn"
      >
        <NavLink to="/login" activeClassName="active">Login</NavLink>
      </Button>
      <Button 
        icon={<UserAddOutlined />}
        type="primary"
      >
        <NavLink to="/signup" activeClassName="active">Sign Up</NavLink>
      </Button>
    </Space>
  );

  return (
    <Header className="app-header" style={{
      position: 'sticky',
      top: 0,
      zIndex: 10,
      width: '99%',
      padding: '10px',
      background: '#141414',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
      height: '64px',
      lineHeight: '64px'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        maxWidth: '1200px', 
        margin: '0 auto',
        width: '100%'
      }}>
        {/* Logo Section */}
        <div className="logo" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginRight: screens.md ? '48px' : 'auto'
        }}>
          <RocketOutlined style={{
            fontSize: '28px',
            color: '#1890ff',
            marginRight: '12px'
          }} />
          <Title level={3} style={{
            color: 'white',
            margin: 0,
            fontWeight: 600,
            fontSize: screens.xs ? '18px' : '24px'
          }}>
            Nova
          </Title>
        </div>

        {/* Desktop Navigation */}
        {screens.md ? (
          <>
            <Menu
              theme="dark"
              mode="horizontal"
              items={menuItems}
              style={{
                flex: 1,
                background: 'transparent',
                borderBottom: 'none',
                minWidth: 0
              }}
            />
            {authButtons}
          </>
        ) : (
          <>
            {authButtons}
            <Button 
              type="text" 
              icon={<MenuOutlined />} 
              onClick={showDrawer}
              style={{ 
                color: 'white',
                marginLeft: '16px',
                fontSize: '20px'
              }}
            />
          </>
        )}

        {/* Mobile Drawer */}
        <Drawer
          title={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <RocketOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
              <Title level={4} style={{ margin: 0 }}>Nova</Title>
            </div>
          }
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
          extra={
            <Button 
              type="text" 
              icon={<CloseOutlined />} 
              onClick={onClose}
            />
          }
          bodyStyle={{ padding: 0 }}
          headerStyle={{ padding: '16px 24px' }}
          width="280px"
        >
          <Menu
            mode="vertical"
            items={menuItems}
            style={{ borderRight: 0 }}
            onClick={onClose}
          />
          <div style={{ padding: '16px 24px' }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Button 
                block 
                icon={<UserOutlined />}
                style={{ textAlign: 'left' }}
              >
                <NavLink to="/login" activeClassName="active">Login</NavLink>
              </Button>
              <Button 
                block 
                type="primary" 
                icon={<UserAddOutlined />}
              >
                <NavLink to="/signup" activeClassName="active">Sign Up</NavLink>
              </Button>
            </Space>
          </div>
        </Drawer>
      </div>
    </Header>
  );
};

export default Navbar;