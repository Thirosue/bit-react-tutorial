import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BaseTemplate from '@bit/thirosue.react-tutorial.base-template'; //<---- 公開したコンポーネントを利用 ※自身の設定に応じて編集
import Card from '@bit/thirosue.react-tutorial.card'; //<---- 公開したコンポーネントを利用 ※自身の設定に応じて編集

export const items = [
  {
    id: 1,
    title: 'Phone XL',
    imagePath: 'https://thirosue.github.io/hosting-image2/bit-react-tutorial/1.jpg',
    description: 'A 1st phone with one of the best screens'
  },
  {
    id: 2,
    title: 'Phone Mini',
    imagePath: 'https://thirosue.github.io/hosting-image2/bit-react-tutorial/2.jpg',
    description: 'A 2nd phone with one of the best cameras'
  },
  {
    id: 3,
    title: 'Phone Standard',
    imagePath: 'https://thirosue.github.io/hosting-image2/bit-react-tutorial/3.jpg',
    description: 'A 3rd phone with one of the best cameras'
  }
];

const useStyles = makeStyles({
  root: {
    margin: '1rem 0'
  },
});

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
