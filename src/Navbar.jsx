import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import UsersExtract from './UsersExtract';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navlink:{
    marginRight: theme.spacing(5),
    color: 'white',
    textDecoration: 'none'
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Link className={classes.navlink} to="/UsersExtract">
            <Typography variant="h6" className={classes.title}>
            รายชื่อตรวจฟัน - ถอนฟัน
            </Typography>
          </Link>
          
          <Link className={classes.navlink} to="/UserImpacted">
            <Typography variant="h6" className={classes.title}>
            รายชื่อผ่าฟันคุด
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
