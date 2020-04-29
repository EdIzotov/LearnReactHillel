import { useState, useEffect } from 'react'
import { getTasks } from '../api'

export default function useTasks() {
    const [isLoading, setIsLoading] = useState(false)
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        setIsLoading(true)
        getTasks()
        .then(response => {
            setIsLoading(false)
            setTasks(response)
        })
        .catch(error => {
            setIsLoading(false)
            console.log(error)
        })
    }, [])

    return {isLoading, tasks}
}
