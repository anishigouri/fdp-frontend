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
import { FiLogOut } from 'react-icons/fi';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import { TiUser } from 'react-icons/ti';
import { GoLightBulb } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AsideStyled } from './styled';
import Button from '../button';
import { RootState } from '../../redux/store/store';
import { setTheme } from '../../redux/ducks/theme';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const listMenu = [
    {
      text: 'Meus Dados',
      icon: <TiUser />,
      route: '/admin/my-data',
    },
    {
      text: 'Pilotos',
      icon: <GiFullMotorcycleHelmet />,
      route: '/admin/pilots',
    },
  ];
  const theme = useSelector<RootState, string>(state => {
    return state.themeReducer;
  });

  function changeTheme(): void {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  }
  return (
    <AsideStyled>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            edge="start"
          >
            <MdMenu />
          </IconButton>
          Olá, Admin
          <span>
            <Button type="link" onClick={changeTheme}>
              <GoLightBulb />
            </Button>
            <img src="/assets/img/logo-horizontal.png" alt="logo" />
          </span>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <div>
          <IconButton onClick={() => setOpen(!open)}>
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
        <Divider />
        <List className="mt-auto">
          <Link to="/login" key="Logout">
            <ListItem button>
              <ListItemIcon>
                <FiLogOut />
              </ListItemIcon>
              <ListItemText primary="Sair" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </AsideStyled>
  );
};

export default Header;
