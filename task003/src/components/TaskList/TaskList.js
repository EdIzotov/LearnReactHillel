import React, {useContext} from 'react'
import { Grid, Typography, CircularProgress } from '@material-ui/core'
import ThemeContext from '../../contexts/ThemeContext'
import useTasks from '../../hooks/useTasks'
import Task from '../Task/Task'
// import DialogWindow from '../DialogWindow/DialogWindow'
import Demo from '../DialogWindow/Demo'
import StyledButton from '../StyledButton/StyledButton'
import './TaskList.css'

export default function TaskList() {
    const {isLoading, tasks} = useTasks()
    console.log(tasks)
    const {theme, toggleTheme} = useContext(ThemeContext)
    const style = theme === 'light' ? 'primary' : 'secondary'
    return (
        <div id="task-list" className={theme}>
            <div>
                <div id="controls">
                    <Typography className={theme} component="h1" align="left" variant="h6" gutterBottom>Task List )</Typography>
                    <div id="buttons">
                        <StyledButton variant="contained" color={style} onClick={toggleTheme}>Theme</StyledButton>
                        <Demo />
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
