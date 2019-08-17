import React, { Component } from "react";
// Basic elements.
import { Box, Button, Heading, Grommet, Text } from "grommet";
// Animation.
import { Collapsible } from "grommet";
// Responsive design.
import { ResponsiveContext, Layer } from "grommet";
import { Music, FormClose } from "grommet-icons";
import ArtistBios from "./Content";
import './App.css';

const greenShades = {
  neutral: "#2B996D",
  dark: "#154D36",
  light: "#8CEFC7"
};

const grommetTheme = {
  global: {
    colors: {
      topbar: greenShades.neutral,
      sidebar: greenShades.dark
    },
    font: {
      family: "HelveticaNeue",
      size: "17px"
    }
  },
  image: {
    extend: "border-radius: 10px"
  }
};

const AppBar = function(props) {
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
    />
  );
};

class App extends Component {
  state = {
    // Whether the sidebar is in view.
    sidebar: false,
    selectedArtist: "chopin"
  };

  sidebarMenu = (
    <React.Fragment>
      <Text animation="slideDown">
        Click to learn more
        <br /> about each artist.
      </Text>

      <br />

      {["Chopin", "Mozart", "Beethoven", "Bach"].map(composer => (
        <Button
          key={composer}
          primary={false}
          color="white"
          label={composer}
          margin="small"
          onClick={() => this.updateArtistSelection(composer.toLowerCase())}
        />
      ))}
    </React.Fragment>
  );

  updateArtistSelection(artist) {
    this.setState(s => ({ selectedArtist: artist, sidebar: false }));
  }

  render() {
    // Destructure the sidebar state.
    const { sidebar, selectedArtist } = this.state;
    return (
      // full option expands to entire viewport.
      <Grommet theme={grommetTheme} full>
        {/* ResponsiveContext's behavior 
        is based on the size. */}
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                {/* Specify h2 here. */}
                <Heading level="2" margin="none">
                  popular classical artists
                </Heading>
                {/* Buttons can have icons! */}
                <Button
                  icon={<Music />}
                  onClick={() => {
                    this.setState(s => ({ sidebar: !s.sidebar }));
                  }}
                ></Button>
              </AppBar>

              <Box direction="row" flex overflow={{ horizontal: "hidden" }}>

                {/* Body content */}
                <ArtistBios size={size} artist={this.state.selectedArtist} />
                
                {/* Sidebar */}
                {!sidebar || size !== "small" ? (
                  <Collapsible direction="horizontal" open={sidebar}>
                    <Box
                      flex
                      width="medium"
                      elevation="xlarge"
                      align="center"
                      background="#121212"
                      justify="center"
                    >
                      {this.sidebarMenu}
                    </Box>
                  </Collapsible>
                ) : (
                  <Layer>
                    <Box
                      background={greenShades.neutral}
                      tag="header"
                      justify="end"
                      align="center"
                      direction="row"
                    >
                      <Button
                        icon={<FormClose />}
                        onClick={() => this.setState({ sidebar: false })}
                      />
                    </Box>
                    <Box
                      fill
                      background="#121212"
                      align="center"
                      justify="center"
                    >
                      {this.sidebarMenu}
                    </Box>
                  </Layer>
                )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
