import React from 'react'

const ThemeContext = React.createContext({
    theme: localStorage.getItem('taskListTheme') ? localStorage.getItem('taskListTheme') : 'light',
    setTheme: () => {}
})

export default ThemeContext
