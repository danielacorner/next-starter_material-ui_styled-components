import React from 'react';
import Head from 'next/head';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

try {
  injectTapEventPlugin();
} catch (e) {}

const muiTheme = createMuiTheme({ userAgent: false });

export default class extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <div>
          <Head>
            <title>Next.js 2 with Material-UI Example</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>

          <AppBar
            title="Page Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />

          <h1>Page content</h1>
          <p>Next.js 2 with Material-UI Example</p>
        </div>
      </MuiThemeProvider>
    );
  }
}
// import Link from 'next/link';
// import Welcome from '../components/Welcome';
// const Home = () => {
//   return (
//     <div>
//       <Welcome />
//     </div>
//   );
// };

// export default Home;
