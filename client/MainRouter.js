import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import ViewDemandPage from "./demand/ViewDemandPage";
import {CssBaseline} from "@material-ui/core";
import AddUserPage from "./user/AddUserPage";
import AddDemandPage from "./demand/AddDemandPage";
import EditDemandPage from "./demand/EditDemandPage";
import ViewHarvestPage from "./harvest/ViewHarvestPage";
import AddHarvestPage from "./harvest/AddHarvestPage";
import EditHarvestPage from "./harvest/EditHarvestPage";
import ViewChartsPage from "./charts/ViewChartsPage";
import ViewNewsPage from "./news/ViewNewsPage";
import AddNewsPage from "./news/AddNewsPage";
import EditNewsPage from "./news/EditNewsPage";
const MainRouter = () => {
    return (<div>
      <CssBaseline/>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/users" component={Users}/>
        <PrivateRoute exact path={"/users/add"} role={"Admin"} component={AddUserPage}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/signin" component={Signin}/>
        <PrivateRoute exact path="/user/edit/:userId" component={EditProfile}/>
        <PrivateRoute exact path={"/demand/"} role={"Any"} component={ViewDemandPage}/>
        <PrivateRoute exact path={"/demand/add"} role={"Admin"} component={AddDemandPage}/>
        <PrivateRoute exact path={"/demand/edit/:demandID" } role={"Admin"} component={EditDemandPage}/>
        <PrivateRoute exact path={"/harvest"} role={"Any"} component={ViewHarvestPage}/>
        <PrivateRoute exact path={"/harvest/add"} role={"officer"} component={AddHarvestPage}/>
        <PrivateRoute exact path={"/harvest/edit/:harvestID"} role={"officer"} component={EditHarvestPage}/>
        <PrivateRoute exact path={"/charts"} role={"Any"} component={ViewChartsPage}/>
        <PrivateRoute exact path={"/news"} role={"officer"} component={ViewNewsPage} />
        <PrivateRoute exact path={"/news/add"} role={"Admin"} component={AddNewsPage}/>
        <PrivateRoute exact path={"/news/edit/:newsID"} role={"Admin"} component={EditNewsPage}/>
        <Route path="/user/:userId" component={Profile}/>
      </Switch>
    </div>)

}

export default MainRouter
