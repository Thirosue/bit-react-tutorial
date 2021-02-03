## Step5

```
% bit import thirosue.react-tutorial/card

successfully ran yarn install at /Users/hirosue/workspace/bit-react-tutorial

successfully imported one component
- up to date thirosue.react-tutorial/card
```

* modify to use the modules that App.js.

```javascript
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BaseTemplate from '@bit/thirosue.react-tutorial.base-template';
import Card from '@bit/thirosue.react-tutorial.card';

// abridgement

function App() {
  const classes = useStyles();

  return (
    <BaseTemplate>
      <Grid className={classes.root} container spacing={3}>
        {items.map(item =>
          <Grid key={item.id} item xs={12} sm={4} md={3}>
            <Card
              title={item.title}
              imagePath={item.imagePath}
              description={item.description}
            />
          </Grid>
        )}
      </Grid>
    </BaseTemplate>
  );
}

export default App;
```