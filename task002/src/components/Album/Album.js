import React, { Component } from 'react'
import { ListItem, ListItemText } from '@material-ui/core'

class Album extends Component {
    render() {
        const {title} = this.props
        return (
            <ListItem className="album">
                <ListItemText primary={title}></ListItemText>
            </ListItem>
        )
    }
}

export default Album
