import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, CircularProgress } from '@material-ui/core'
import { getAllPosts } from '../../api'
import Post from '../Post/Post'

class PostList extends Component {
    state = {
        posts: [],
        isLoading: false
    }
    loadPosts() {
        this.setState({
            isLoading: true
        })
        getAllPosts().then(response => {
            this.setState({
                posts: response,
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
        this.loadPosts()
    }
    render() {
        return (
            <div id="post-list">
                <Grid item xs={12}>
                    {this.state.isLoading && <div className="loader"><CircularProgress /></div>}
                    {this.state.posts.map(post => <Post
                        key={post.id} 
                        userid={post.userId} 
                        postid={post.id}
                        title={post.title}
                        body={post.body}
                        updateAuthorId={this.props.updateAuthorId}
                    ></Post>)}
                </Grid>
            </div>
        )
    }
}

PostList.propTypes = {
    updateAuthorId: PropTypes.func
}

export default PostList
