import React, { Component,Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from  "./pagesAdmin/Dashboard";
import Login from "./pagesAdmin/Login";
import Profile from "./pagesAdmin/Profile";
import Profile2020 from "./pagesAdmin/Profile2020";
import PerminVideo from "./pagesAdmin/PerminVideo";
import PerminWebsite from "./pagesAdmin/PerminWebsite";
import PerminPublikasi from "./pagesAdmin/PerminPublikasi";
import PerminDesain1 from "./pagesAdmin/PerminDesain1";
import PerminDesain2 from "./pagesAdmin/PerminDesain2";
import ViewPermintaanW from "./pagesAdmin/ViewPermintaanW";
import ViewPermintaanV from "./pagesAdmin/ViewPermintaanV";
import ViewPermintaanP from "./pagesAdmin/ViewPermintaanP";
import ViewPermintaanD from "./pagesAdmin/ViewPermintaanD";
import ViewPermintaanW2 from "./pagesAdmin/ViewPermintaanW2";
import ViewPermintaanV2 from "./pagesAdmin/ViewPermintaanV2";
import ViewPermintaanP2 from "./pagesAdmin/ViewPermintaanP2";
import ViewPermintaanD2 from "./pagesAdmin/ViewPermintaanD2";

class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<div/>}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login"/>
          </Route>
          <Route exact path="/dashboard" component={ Dashboard } />
          <Route path="/login" component={ Login } />
          <Route path="/profile" component={ Profile } />
          <Route path="/profile2020" component={ Profile2020 } />
          <Route path="/permintaan-video" component={ PerminVideo } />
          <Route path="/permintaan-website" component={ PerminWebsite } />
          <Route path="/permintaan-publikasi" component={ PerminPublikasi } />
          <Route path="/permintaan-desain-1" component={ PerminDesain1 } />
          <Route path="/permintaan-desain-2" component={ PerminDesain2 } />
          <Route path="/view-permintaan-web" component={ ViewPermintaanW } />
          <Route path="/view-permintaan-video" component={ ViewPermintaanV } />
          <Route path="/view-permintaan-publikasi" component={ ViewPermintaanP } />
          <Route path="/view-permintaan-desain" component={ ViewPermintaanD } />
          <Route path="/view-permintaan-web2" component={ ViewPermintaanW2 } />
          <Route path="/view-permintaan-video2" component={ ViewPermintaanV2 } />
          <Route path="/view-permintaan-publikasi2" component={ ViewPermintaanP2 } />
          <Route path="/view-permintaan-desain2" component={ ViewPermintaanD2 } />
          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;