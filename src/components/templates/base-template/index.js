import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import DialogContent from '@material-ui/core/DialogContent';
import TopBar from '@bit/thirosue.react-tutorial.top-bar';
import Footer from '@bit/thirosue.react-tutorial.footer';
import theme from './theme';

function App({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <TopBar className="top-bar" />
        <DialogContent>
          {children}
        </DialogContent>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
