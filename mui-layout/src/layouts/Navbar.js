import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MainNavbar from "../components/layouts/navbar/MainNavbar";

const Navbar = ({ children }) => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <MainNavbar />
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Navbar;
