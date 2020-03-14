import React, { Component } from 'react'

class AddCategoryForm extends Component {
    state = {
        category: ''
    }
    onInputChange = event => {
        this.setState({
          category: event.target.value
        })
    }
    handleAddCategory = () => {
        const {addCategory, categories} = this.props
        if (!categories.includes(this.state.category)) {
            addCategory(this.state.category)
            this.setState({category: ''})
        }
    }
    render() {
        return (
            <div id="add-category" className="add-block">
                <input type="text" value={this.state.category} name="category" placeholder="category" id="add-category" className="add-item" onChange={this.onInputChange} />
                <br />
                <button onClick={this.handleAddCategory}>Add Category</button>
            </div>
        )
    }
}

export default AddCategoryForm
