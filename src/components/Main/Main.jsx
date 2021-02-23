import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core'
import React from 'react';
import Form from './Form/Form.jsx';
import useStyles from './styles';

const Main = () => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                  <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
                  <CardContent>
                      <Typography align="center" variant="h5">Total Balance $100</Typography>
                      <Typography variant="subtitle1" style={{ lineHeight: '1.5rem', marginTop: '20px '}}>
                          Try saying: Add income for #$100 in category salary for Monday...
                      </Typography>
                      <Divider />
                         <Form />
                      </CardContent>
                      <CardContent className={classes.cardContent}>
                          <Grid container spacing={2}>
                               <Grid item xs={12}>
                                   {/* {list} */}
                               </Grid>
                          </Grid>
                      </CardContent>
            </Card>
        </div>
    )
}

export default Main
