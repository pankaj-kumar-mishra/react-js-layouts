import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SimpleNavbar from "../components/layouts/navbar/SimpleNavbar";
import SimpleSidebar from "../components/layouts/sidebar/SimpleSidebar";
import styled from "styled-components";
import { navbar_height } from "../utils/constants";

const ChildrenDiv = styled.div`
  height: calc(100vh - ${navbar_height});
  overflow-y: scroll;
`;

const SidebarNavbar = ({ children }) => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Grid container>
        <Grid item md={2} lg={2} xl={2}>
          <SimpleSidebar />
        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
          <SimpleNavbar />
          <ChildrenDiv>{children}</ChildrenDiv>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SidebarNavbar;
