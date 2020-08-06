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
import { MdMenu, MdChevronLeft, MdInbox, MdMail } from 'react-icons/md';
import { AsideStyled } from './styled';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  function handleDrawerOpen(): void {
    setOpen(true);
  }

  function handleDrawerClose(): void {
    setOpen(false);
  }
  return (
    <AsideStyled>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MdMenu />
          </IconButton>
          teste
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
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <MdInbox /> : <MdMail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AsideStyled>
  );
};

export default Header;
