import React, { Component } from "react";
// Basic elements.
import { Box, Button, Heading, Grommet, Text } from "grommet";

export default AppBar = function(props) {
  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="topbar"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      style={{ zIndex: "1" }}
      animation="slideDown"
      {...props}
    >
      {/* Specify h2 here. */}
      <Heading level="2" margin="none">
        hottest classical artists
      </Heading>
      {/* Buttons can have icons! */}
      <Button
        icon={<Music />}
        onClick={() => {
          this.setState(s => ({ sidebar: !s.sidebar }));
        }}
      ></Button>
    </Box>
  );
};
