## Step4

* make template components

```javascript
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
```

* add & build & add tag & export


* import

```
% bit import thirosue.react-tutorial/base-template

successfully ran yarn install at /Users/hirosue/workspace/bit-react-tutorial

successfully imported one component
- up to date thirosue.react-tutorial/base-template
```

* modify to use the template that created App.js.

```javascript
import React from 'react';
import BaseTemplate from '@bit/thirosue.react-tutorial.base-template';

function App() {
  return (
    <BaseTemplate>
      Content
    </BaseTemplate>
  );
}

export default App;
```