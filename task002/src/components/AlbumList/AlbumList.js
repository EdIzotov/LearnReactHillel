import React, { Component } from 'react'
import { List, CircularProgress, Divider } from '@material-ui/core'
import { getAlbumsByUserId } from '../../api'
import Album from '../Album/Album'
import './AlbumList.css'

class AlbumList extends Component {
    state = {
        albums: [],
        isLoading: false
    }
    loadAlbums() {
        this.setState({
            isLoading: true
        })
        const {authorId} = this.props
        getAlbumsByUserId(authorId).then(response => {
            this.setState({
                albums: response,
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
        this.loadAlbums()
    }
    render() {
        return (
            <div id="post-list" className="scroll">
                <List xs={12}>
                    {this.state.isLoading && <div className="loader"><CircularProgress /></div>}
                    {this.state.albums.map(album => <Album
                        key={album.id} 
                        title={album.title}><Divider variant="inset" component="li" />
                    </Album>)}
                </List>
            </div>
        )
    }
}

export default AlbumList
