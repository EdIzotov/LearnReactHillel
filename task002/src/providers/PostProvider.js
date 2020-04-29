import { Component } from 'react'
import { getAllPosts } from '../api'

export default class PostProvider extends Component {
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
        const {posts, isLoading} = this.state
        return this.props.children(posts, isLoading)
    }
}
