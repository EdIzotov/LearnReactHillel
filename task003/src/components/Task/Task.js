import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import StyledButton from '../StyledButton/StyledButton'
import './Task.css'

export default function Task({task}) {
    return (
        <Grid item xs={11}>
            <Paper xs={9} className="inline">{task.title}</Paper>
            <StyledButton className="task-remove" color="inherit">REMOVE</StyledButton>
        </Grid>
    )
}
