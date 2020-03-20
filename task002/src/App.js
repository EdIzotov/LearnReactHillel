import React, { Component } from 'react'
import './App.css'
import PostList from './components/PostList/PostList'
import Author from './components/Author/Author'
import { Grid } from '@material-ui/core'

class App extends Component {
  state = {
    authorId: ''
  }
  updateAuthorId = authorId => {
    this.setState({
      authorId: authorId.toString()
    })
  }
  render() {
    return (
      <div className="App">
        <Grid container>
          <PostList updateAuthorId={this.updateAuthorId} />
          <div id="author">
            {!!this.state.authorId && <Author authorId={this.state.authorId} />}
          </div>          
        </Grid>
      </div>
    )
  }
}

export default App
