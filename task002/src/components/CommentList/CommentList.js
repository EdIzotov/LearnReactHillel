import React, { Component } from 'react'
import { List, CircularProgress, Divider } from '@material-ui/core'
import PropTypes from 'prop-types'
import { getCommentsByPostId } from '../../api'
import Comment from '../Comment/Comment'

class CommentList extends Component {
    state = {
        comments: [],
        isLoading: false
    }
    loadComments() {
        this.setState({
            isLoading: true
        })
        const {postid} = this.props
        getCommentsByPostId(postid).then(response => {
            this.setState({
                comments: response,
                isLoading: false
            })
        }).catch(error => {
            console.log(error)
            this.setState({
                isLoading: false
            })
        })
    }
    componentDidMount() {
        this.loadComments()
    }
    render() {
        return (
            <div id="post-list">
                <List xs={12}>
                    {this.state.isLoading && <div className="loader"><CircularProgress /></div>}
                    {this.state.comments.map(comment => <Comment
                            key={comment.id} 
                            id={comment.id}
                            username={comment.name} 
                            email={comment.email}
                            body={comment.body}
                        ><Divider variant="inset" component="li" /></Comment>
                    )}
                </List>
            </div>
        )
    }
}

CommentList.propTypes = {
    postid: PropTypes.number.isRequired
}

export default CommentList
