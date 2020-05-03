import React from 'react'
import {DialogContent, DialogContentText, TextField, DialogActions} from '@material-ui/core'

export default function DialogWindowForm() {
    return (
        <>
            <DialogContent>
                <DialogContentText>Input task summary and assign on a user</DialogContentText>
                <TextField autoFocus margin="dense" id="task-title" label="Input task summary" type="text" fullWidth />
            </DialogContent>
            <DialogActions></DialogActions>
        </>
    )
}
