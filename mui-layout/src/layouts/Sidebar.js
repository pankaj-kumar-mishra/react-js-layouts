import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import MainSidebar from "../components/layouts/sidebar/MainSidebar";

const ChildrenDiv = styled.div`
  height: 100vh;
  overflow-y: scroll;
`;

const Sidebar = ({ children }) => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Grid container>
        <Grid item md={2} lg={2} xl={2}>
          <MainSidebar />
        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
          <ChildrenDiv>{children}</ChildrenDiv>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Sidebar;
