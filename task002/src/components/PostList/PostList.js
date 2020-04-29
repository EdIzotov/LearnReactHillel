import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, CircularProgress } from '@material-ui/core'
import Post from '../Post/Post'
import PostProvider from '../../providers/PostProvider'

class PostList extends Component {
    render() {
        return (
            <div id="post-list">
                <Grid item xs={12}>
                    <PostProvider>
                        {(posts, isLoading) => {
                            return (
                                <div>
                                    {isLoading && <div className="loader"><CircularProgress /></div>}
                                    {posts.map(post => <Post
                                        key={post.id} 
                                        userid={post.userId} 
                                        postid={post.id}
                                        title={post.title}
                                        body={post.body}
                                        updateAuthorId={this.props.updateAuthorId}
                                    ></Post>)}
                                </div>
                            )

                        }}
                    </PostProvider>
                </Grid>
            </div>
        )
    }
}

PostList.propTypes = {
    updateAuthorId: PropTypes.func
}

export default PostList
