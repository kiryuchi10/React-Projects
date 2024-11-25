import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './Sidebar.css';  
const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/chatbot">
          <ListItemText primary="Chatbot" />
        </ListItem>
        <ListItem button component={Link} to="/monitoring-status">
          <ListItemText primary="Monitoring Status" />
        </ListItem>
        <ListItem button component={Link} to="/alarm-history">
          <ListItemText primary="Alarm History" />
        </ListItem>
        <ListItem button component={Link} to="/statistics">
          <ListItemText primary="Statistics" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
