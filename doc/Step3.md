## Step3

```
% bit import thirosue.react-tutorial/text-field

successfully ran yarn install at /Users/hirosue/workspace/bit-react-tutorial

successfully imported one component
- up to date thirosue.react-tutorial/text-field
```

```
% bit import thirosue.react-tutorial/typography

successfully ran yarn install at /Users/hirosue/workspace/bit-react-tutorial

successfully imported one component
- up to date thirosue.react-tutorial/typography
```

* import & use atoms

```
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '@bit/thirosue.react-tutorial.typography';
import TextField from '@bit/thirosue.react-tutorial.text-field';


                    <Grid item xs={6} sm={8} md={4}>
                        <Typography variant="h6" marked="left" gutterBottom>
                            Language
                        </Typography>
                        <TextField
                            select
                            SelectProps={{
                                native: true,
                            }}
                            className={classes.language}
                        >
                            {LANGUAGES.map((language) => (
                                <option value={language.code} key={language.code}>
                                    {language.name}
                                </option>
                            ))}
                        </TextField>
                    </Grid>
```

* App.js

```javascript
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import DialogContent from '@material-ui/core/DialogContent';
import TopBar from '@bit/thirosue.react-tutorial.top-bar';
import Footer from '@bit/thirosue.react-tutorial.footer';
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
```

