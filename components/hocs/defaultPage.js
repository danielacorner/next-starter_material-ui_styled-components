// // hocs/default-page.js
// export default Page => class DefaultPage extends React.Component {
//   static getInitialProps(ctx) {
//     // Ensures material-ui renders the correct css prefixes server-side
//     let userAgent
//     if (process.browser) {
//       userAgent = navigator.userAgent
//     } else {
//       userAgent = ctx.req.headers['user-agent']
//     }

//     // Check if Page has a `getInitialProps`; if so, call it.
//     const pageProps = Page.getInitialProps && Page.getInitialProps(ctx);

//     // Return props.
//     return { ...pageProps, userAgent }
//   }
//   // ...
//   render() {
//     return (
//       <MuiThemeProvider theme={theme}>
//         <Page />
//       </MuiThemeProvider>
//     );
//   }
// }
