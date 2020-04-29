import React, {useState, useContext} from 'react'
import TaskList from './components/TaskList/TaskList'
import ThemeContext from './contexts/ThemeContext'
import './App.css'

function App() {
  const themeContext = useContext(ThemeContext)
  const [theme, setTheme] = useState(themeContext)

  themeContext.setTheme = () => {
    setTheme(theme === 'light' ? 'night' : 'light')
    localStorage.setItem('taskListTheme', theme)
  }
  
  return (
    <div className="App">
      <ThemeContext.Provider value={themeContext}>
        <TaskList />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
