import React, { Component } from 'react'
// import PropTypes from 'prop-types'
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
        const postViews = []
        this.state.posts.forEach((post, index) => {
            postViews.push(<Post 
                key={post.id} 
                userid={post.userId} 
                postid={post.id}
                title={post.title}
                body={post.body}
                updateAuthorId={this.props.updateAuthorId}
            ></Post>)
        })
        return (
            <div id="post-list">
                <Grid item xs={12} ref={this.myRef}>
                    {(this.state.isLoading && <div className="loader"><CircularProgress /></div>) || postViews}
                </Grid>
            </div>
        )
    }
}

// PostList.propTypes = {
//     // posts: PropTypes.array
// }

export default PostList
