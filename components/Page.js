import React, { Component } from 'react';
import Meta from './Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Nav from './Nav';
import ContextProvider from './ContextProvider';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const muiTheme = createMuiTheme({ userAgent: false });

// global theme can be accessed with ${props => props.theme.$} (add snippet ':tp')
const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0,0,0,0.09)'
};

const StyledPage = styled.div`
  /* always add a background colour for colour inversion accessibility */
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
@font-face {
  font-family: 'Helvetica';
  src: url('/static/radnikanext-medium-webfont.woff2')
  format('woff2');
  font-weight: normal;
  font-style: normal;
}
html {
  box-sizing: border-box;
  font-size: 10px;
}
*, *:before, *:after{
  box-sizing: inherit;
}
body{
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  line-height: 2;
  font-family: 'Helvetica';
}
a {
  text-decoration: none;
  color: ${theme.black};
}
`;

class Page extends Component {
  render() {
    return (
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={muiTheme}>
            <StyledPage>
              <Meta />
              <Nav />
              <Inner>{this.props.children}</Inner>
            </StyledPage>
          </MuiThemeProvider>
        </ThemeProvider>
      </ContextProvider>
    );
  }
}

export default Page;
