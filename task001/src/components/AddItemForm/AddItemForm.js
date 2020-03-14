import React, { Component } from 'react'
import './AddItemForm.css'

class AddItemForm extends Component {
    state = {
        name: '',
        categoryItem: '',
        category: this.props.categories.length > 0 ? this.props.categories[0] : '',
        price: 0,
        count: 0
    }
    onInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSelectChange = event => {
        this.setState({
            category: event.target.value
        })
    }
    handleAddItem = () => {
        const {addItem} = this.props
        if (+this.state.count > 0) {
            addItem(this.state)
            this.setState({name: '', category: '', price: 0, count: 0})
        }
    }
    handleOnCategoryRemove = () => {
        const {onCategoryRemove} = this.props
        onCategoryRemove(this.state.category)
    }
    renderCategories = () => {
        return this.props.categories.map((category, index) => {
            let k = index + 1
            return <option className="option" value={category} key={k}>{category}</option>
        })
    }
    componentDidUpdate(prevProps) {
        if (prevProps.categories.length !== this.props.categories.length) {
            this.setState({
                category: this.props.categories.length > 0 ? this.props.categories[0] : ''
            })
        }
    }
    render() {
        return (
            <div id="add-item" className="add-block">
                <input value={this.state.name} onChange={this.onInputChange} type="text" name="name" placeholder="name" id="item-name" className="add-item" />
                <br />
                <select value={this.state.category} onChange={this.onSelectChange} type="text" name="category" placeholder="category" id="item-category" className="add-item">{this.renderCategories()}</select>
                <button className="delete-category" onClick={this.handleOnCategoryRemove}>remove</button>
                <br />
                <input value={this.state.price} onChange={this.onInputChange} type="text" name="price" placeholder="price" id="item-price" className="add-item" />
                <br />
                <input value={this.state.count} onChange={this.onInputChange} type="text" name="count" placeholder="count" id="item-count" className="add-item" />
                <br />
                <button onClick={this.handleAddItem}>Add Item</button>
            </div>
        )
    }
}

export default AddItemForm
