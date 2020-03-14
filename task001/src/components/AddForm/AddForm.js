import React, { Component } from 'react'
import './AddForm.css'
import AddItemForm from '../AddItemForm/AddItemForm'
import AddCategoryForm from '../AddCategoryForm/AddCategoryForm'

class AddForm extends Component {
    render() {
        return (
            <div id="add-form">
                <AddItemForm categories={this.props.categories} onCategoryRemove={this.props.onCategoryRemove} addItem={this.props.addItem} />
                <br />
                <br />
                <AddCategoryForm addCategory={this.props.addCategory} categories={this.props.categories} />
            </div>
        )
    }
}

export default AddForm
