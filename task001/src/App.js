import React, { Component } from 'react'
import './App.css'
import ItemTable from './components/ItemTable/ItemTable'
import AddForm from './components/AddForm/AddForm'

class App extends Component {
  state = {
    categories: [
      "Electronics", 
      "Food", 
      "Automobile"
    ],
    items: [{name: 'Video Player Sharp', category: 'Electronics', price: 300, count: 5}]
  }

  addCategory = category => {
    const {categories} = this.state
    const updatedCategories = [
      ...categories,
      category
    ]
    this.setState({
      categories: updatedCategories
    })
  }

  onCategoryRemove = name => {
    const {categories} = this.state
    const updatedCategories = categories.filter(category => category !== name)
    this.setState({
      categories: updatedCategories
    })
  }

  addItem = item => {
    const {items} = this.state
    item.count = +item.count
    const updatedItems = [
      ...items,
      item
    ]
    this.setState({
      items: updatedItems
    })
  }

  onItemRemove = (id) => {
    const {items} = this.state
    const updatedItems = items.filter((item, index) => {
      if (index + 1 !== id) {
        return item
      } else {
        if (+item.count > 1) {
          item.count = item.count - 1
          return item
        }
      }
      return index + 1 !== id
    })
    this.setState({
      items: updatedItems
    })
  }

   onItemEdit = (id) => {
     return this.state.items[id - 1]
   }

  render() {
    return (
      <div className="App">
        <ItemTable items={this.state.items} onItemRemove={this.onItemRemove} onItemEdit={this.onItemEdit}/>
        <AddForm editItem={this.onItemEdit} addCategory={this.addCategory} onCategoryRemove={this.onCategoryRemove} categories={this.state.categories} addItem={this.addItem} items={this.state.items} />
      </div>
    )
  }
}

export default App
