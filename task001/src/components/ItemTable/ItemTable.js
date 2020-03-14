import React, { Component } from 'react'
import './ItemTable.css'
import Item from '../Item/Item'

class ItemTable extends Component {
    handleOnItemRemove = (id) => {
        const {onItemRemove} = this.props
        onItemRemove(id)
    }
    handleOnItemEdit = (id) => {
        const {onItemEdit} = this.props
        onItemEdit(id)
    }
    renderItems() {
        const {items} = this.props
        return items.map((item, index) => {
            const i = index + 1
            return <Item key={i} item={item} i={i} handleOnItemRemove={this.handleOnItemRemove} handleOnItemEdit={this.handleOnItemEdit} /> // <tr key={i}><td data={item}>i</td><td>{item.name}</td><td>{item.category}</td><td>{item.price}</td><td>{item.count}</td><td></td></tr>
        })
    }
    render() {
        const content = this.props.items.length > 0 ? this.renderItems() : <tr><td>No Content</td></tr>        
        return (
            <div id="main-content">
                <table id="content">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Item</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Count</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ItemTable
