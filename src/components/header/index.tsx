import React, { useState } from 'react';
import {
  Toolbar,
  IconButton,
  AppBar,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import { MdMenu, MdChevronLeft } from 'react-icons/md';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { AsideStyled } from './styled';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const listMenu = [
    {
      text: 'Pilotos',
      icon: <GiFullMotorcycleHelmet />,
      route: '/admin/pilots',
    },
  ];

  function handleDrawerOpen(): void {
    setOpen(true);
  }

  function handleDrawerClose(): void {
    setOpen(false);
  }
  return (
    <AsideStyled>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MdMenu />
          </IconButton>
          Olá, Admin
          <img src="/assets/img/logo-horizontal.jpeg" alt="logo" />
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <div>
          <IconButton onClick={handleDrawerClose}>
            <MdChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List>
          {listMenu.map(item => (
            <Link to={item.route} key={item.text}>
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </AsideStyled>
  );
};

export default Header;
