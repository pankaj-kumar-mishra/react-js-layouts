import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import MediumNavbar from "../components/layouts/navbar/MediumNavbar";
import MediumSidebar from "../components/layouts/sidebar/MediumSidebar";
import { navbar_height } from "../utils/constants";

const ChildrenDiv = styled.div`
  height: calc(100vh - ${navbar_height});
  overflow-y: scroll;
`;

const NavbarSidebar = ({ children }) => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <MediumNavbar />
          <Grid container>
            <Grid item md={2} lg={2} xl={2}>
              <MediumSidebar />
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
              <ChildrenDiv>{children}</ChildrenDiv>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NavbarSidebar;
