import React, { Component } from 'react'

class Item extends Component {
    render() {
        const {i, item} = this.props
        return (
            <tr><td>{i}</td><td>{item.name}</td><td>{item.category}</td><td>{item.price}</td><td>{item.count}</td><td>
                <button onClick={() => this.props.handleOnItemRemove(i)}>Del</button>
                <button onClick={() => this.props.handleOnItemEdit(i)}>Edit</button>
            </td></tr>
        )
    }
}

export default Item
