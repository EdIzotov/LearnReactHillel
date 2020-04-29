import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardActionArea, CardActions, CardContent, Typography, CircularProgress, Button } from '@material-ui/core'
import DetailList from '../AlbumList/AlbumList'
import { getAuthorById } from '../../api'
import './Author.css'
import PostProvider from '../../providers/PostProvider'

class Author extends Component {
    state = {
        isLoading: false,
        author: {},
        buttonTitle: 'DETAILS'
    }
    displayMore = () => {
        this.setState(state => ({
            buttonTitle: state.buttonTitle === 'DETAILS' ? 'HIDE' : 'DETAILS'
        }))
    }
    loadAuthor() {
        this.setState({
            isLoading: true
        })
        const {authorId} = this.props
        getAuthorById(authorId).then(response => {
            this.setState({
                isLoading: false,
                author: response
            })
        }).catch(error => {
            console.log(error)
            this.setState({
                isLoading: false
            })
        })
    }
    componentDidMount() {
        this.loadAuthor()
    }
    componentDidUpdate(prevProps) {
        if ((prevProps.authorId !== this.props.authorId) && !!this.props.authorId) {
            this.loadAuthor()
        }
    }
    render() {
        return (
            <div id='author-block'>
                <Card className="author">
                    <CardActionArea>
                        {(this.state.isLoading && <div className="loader"><CircularProgress /></div>) || 
                        (<CardContent>
                            <Typography gutterBottom variant="h5" component="h2">{this.state.author.name}</Typography>
                            <Typography gutterBottom variant="h5" component="h2">{this.state.author.username}</Typography>
                            <Typography gutterBottom variant="h5" component="h2">{this.state.author.email}</Typography>
                        <PostProvider>{(posts, isLoading) => {
                            return null
                        }}</PostProvider>
                        </CardContent>)}
                        <hr />
                        {(this.state.buttonTitle === 'HIDE') && <DetailList authorId={this.state.author.id} />}
                    </CardActionArea>
                    <CardActions>
                        <Button variant="outlined" color="primary" onClick={this.displayMore}>{this.state.buttonTitle}</Button>
                    </CardActions>
                </Card>                
            </div>
        )
    }
}

Author.propTypes = {
    author: PropTypes.string
}

export default Author
