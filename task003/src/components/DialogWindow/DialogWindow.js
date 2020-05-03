import React, {useState, useContext} from 'react'
import {Dialog, DialogTitle} from '@material-ui/core'
import ThemeContext from '../../contexts/ThemeContext'
import StyledButton from '../StyledButton/StyledButton'
import DialogWindowForm from './DialogWindowForm/DialogWindowForm'

export default function FormDialog() {
    const [open, setOpen] = useState(false)
    const {theme} = useContext(ThemeContext)
    const style = theme === 'light' ? 'primary' : 'secondary'
    const handleDialogOpen = () => {
        setOpen(true)
    }
    const handleDialogClose = () => {
        setOpen(false)
    }
    return (
        <>
            <StyledButton onClick={handleDialogOpen} variant="outlined" color={style} id="add-task-button">ADD TASK</StyledButton>
            <Dialog open={open} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">ADD TASK</DialogTitle>
                <DialogWindowForm />
            </Dialog>
        </>
    )
}
