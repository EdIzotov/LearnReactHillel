import React, {useState, useEffect} from 'react'
import TaskList from './components/TaskList/TaskList'
import ThemeContext from './contexts/ThemeContext'
import './App.css'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('taskListTheme') ? localStorage.getItem('taskListTheme') : 'light')
  const themeContext = {
    theme,
    toggleTheme: () => {
      setTheme(theme === 'light' ? 'night' : 'light')
    }
  }
  useEffect(() => {
    localStorage.setItem('taskListTheme', theme)
  }, [theme])
  return (
    <div className="App">
      <ThemeContext.Provider value={themeContext}>
        <TaskList />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
