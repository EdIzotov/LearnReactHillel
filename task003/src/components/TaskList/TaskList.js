import React, {useContext} from 'react'
import { Button, Grid, Typography, CircularProgress } from '@material-ui/core'
import ThemeContext from '../../contexts/ThemeContext'
import useTasks from '../../hooks/useTasks'
import Task from '../Task/Task'
import './TaskList.css'

export default function TaskList() {
    const {isLoading, tasks} = useTasks()
    const {theme, setTheme} = useContext(ThemeContext)
    console.log(theme)
    return (
        <div id="task-list" className={theme}>
            <div>
                <div id="controls">
                    <Typography className="light" component="h1" align="left" variant="h6" gutterBottom>Task List )</Typography>
                    <div id="buttons">
                        <Button variant="contained" id="theme-button" onClick={setTheme}>Theme</Button>
                        <Button variant="contained" color="primary" id="add-task-button">Add Task</Button>
                    </div>
                </div>
                <Grid container spacing={1}>
                    {isLoading && <div className="loader"><CircularProgress color="inherit" /></div>}
                    {tasks.map((task, index) => <Task key={index} task={task} />)}
                </Grid>
            </div>
        </div>
    )
}
