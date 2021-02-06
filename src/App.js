import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import DialogContent from '@material-ui/core/DialogContent';
import TopBar from '@bit/thirosue.react-tutorial.top-bar'; //<---- 公開したコンポーネントを利用 ※自身の設定に応じて編集
import Footer from '@bit/thirosue.react-tutorial.footer'; //<---- 公開したコンポーネントを利用 ※自身の設定に応じて編集
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <TopBar className="top-bar" />
        <DialogContent>
          Content
        </DialogContent>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
