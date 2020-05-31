import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import classes from "./Cards.module.css"
import CountUp from 'react-countup'
import cx from 'classnames'         //this is uded for adding or grouping  multiple css styles togeting
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    console.log(confirmed);

    if (!confirmed) {
        return 'Loading'
    }
    return (
        <div className={classes.container}>
            <Grid container spacing={3} justify="center">   {/* material ui theme*/}
                <Grid item component={Card} xs={12} md={3} className={cx(classes.Card, classes.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2} separator="," />     {/* this is used for animation the numbers ,instaled by 'react-countup'  */}
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of active cases of covid19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(classes.Card, classes.recoverd)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottocm>Recoverd</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of recoveries from covid19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(classes.Card, classes.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of deaths in covid19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
