import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import {Link, withRouter} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import ListItem from "@material-ui/core/ListItem";
import {makeStyles} from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BarChartIcon from "@material-ui/icons/BarChart"
import FilterVintageIcon from '@material-ui/icons/FilterVintage'
import TimelineIcon from '@material-ui/icons/Timeline';
import PublicIcon from '@material-ui/icons/Public';
const useStyles  = makeStyles((theme)=>({
    drawerDiv: {
        backgroundColor:theme.palette.primary.light
    }
}))

const NavDrawer = withRouter(({history,drawer_open,toggleDrawer})=>{
    const isActive = (history, path) => {
        if (history.location.pathname == path)
            return {color: '#ff4081'}
        else
            return {color: '#ffffff'}
    }
    const classes = useStyles()
    return(
        <Drawer anchor={"left"} open={drawer_open} onClose={toggleDrawer}>
            <div onClick={toggleDrawer} className={classes.drawerDiv}>
                <List>
                    <Link to="/">
                        <ListItem button>
                                <ListItemIcon style={isActive(history,"/")} >
                                    <HomeIcon/>
                                </ListItemIcon>
                                <ListItemText style={isActive(history,"/")}>
                                     Home
                                </ListItemText>
                        </ListItem>
                    </Link>
                   <Link to={"/users"}>
                      <ListItem button>
                          <ListItemIcon style={isActive(history, "/users")}>
                              <PersonIcon/>
                          </ListItemIcon>
                          <ListItemText style={isActive(history, "/users")}>
                              Users
                          </ListItemText>
                      </ListItem>
                   </Link>
                    <Link to={"/demand"}>
                        <ListItem button>
                            <ListItemIcon style={isActive(history,"/demand")} >
                                <BarChartIcon/>
                            </ListItemIcon>
                            <ListItemText style={isActive(history,"/demand")}>
                                Demands
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Link to={"/harvest"}>
                        <ListItem button>
                            <ListItemIcon style={isActive(history,"/harvest")} >
                                <FilterVintageIcon/>
                            </ListItemIcon>
                            <ListItemText style={isActive(history,"/harvest")}>
                               Harvest
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Link to={"/charts"}>
                        <ListItem button>
                            <ListItemIcon style={isActive(history,"/charts")} >
                               <TimelineIcon/>
                            </ListItemIcon>
                            <ListItemText style={isActive(history,"/charts")}>
                               Charts
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Link to={"/news"}>
                        <ListItem button>
                            <ListItemIcon style={isActive(history,"/news")} >
                                <PublicIcon/>
                            </ListItemIcon>
                            <ListItemText style={isActive(history,"/news")}>
                                Announcements
                            </ListItemText>
                        </ListItem>
                    </Link>
                </List>
            </div>
        </Drawer>
    )
})
export default NavDrawer