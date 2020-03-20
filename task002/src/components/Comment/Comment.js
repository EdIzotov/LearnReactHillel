import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Typography, ListItem, ListItemText } from '@material-ui/core'
import './Comment.css'

class Comment extends Component {
    render() {
        const {username, email, body} = this.props
        return (
            <ListItem className="comment">
                <ListItemText primary={username} secondary={
                    <Fragment>
                        <Typography component="span" variant="body2" color="textPrimary">
                            {email}<br />
                        </Typography>
                        {body}
                    </Fragment>
                }></ListItemText>
            </ListItem>
        )
    }
}

Comment.propTypes = {
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default Comment
