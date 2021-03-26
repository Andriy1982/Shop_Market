import Navigation from '../Navigation';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import style from './AppBar.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 20,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={style.header}>
          <Navigation />
        </Toolbar>
      </AppBar>
    </div>
  );
}
