import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography, CardActionArea, CardActions, Button, Divider } from '@material-ui/core'
import CommentList from '../CommentList/CommentList'
import './Post.css'

class Post extends Component {
    state = {
        buttonTitle: 'MORE'
    }
    handleUpdateAuthor = () => {
        const {updateAuthorId, userid} = this.props
        updateAuthorId(userid)
    }
    displayMore = () => {
        this.setState(state => ({
            buttonTitle: state.buttonTitle === 'MORE' ? 'HIDE' : 'MORE'
        }))
    }
    render() {
        const {userid, postid, title, body} = this.props
        return (
            <Card className="post" user={userid} postid={postid}>
                <CardActionArea>
                    <CardContent>
                        <Typography className="post-title" gutterBottom variant="h6">
                            {title}
                        </Typography>
                        {(this.state.buttonTitle === 'HIDE') && <Typography>{body}</Typography>}
                    </CardContent>
                    <hr />
                    {(this.state.buttonTitle === 'HIDE') && <CommentList postid={postid} />}
                </CardActionArea>
                <CardActions>
                    <Button variant="outlined" color="primary" onClick={() => {this.displayMore(); this.handleUpdateAuthor()}}>{this.state.buttonTitle}</Button>
                </CardActions>
                <Divider />
            </Card>
        )
    }
}

Post.propTypes = {
    userid: PropTypes.number.isRequired, 
    postid: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
    updateAuthorId: PropTypes.func
}

export default Post
