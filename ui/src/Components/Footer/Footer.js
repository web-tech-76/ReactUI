import React ,{Fragment}from "react";
import {AppBar, Toolbar, Typography } from "@material-ui/core"; 
export default props => (
  <Fragment>
    <AppBar color="transparent" position="relative">
      <Toolbar>
        <Typography  variant="overline" gutterBottom>
          {<p>Footer</p>}
        </Typography>
      </Toolbar>
  </AppBar>
  </Fragment>
);