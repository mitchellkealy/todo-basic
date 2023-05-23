import { useEffect, useState } from "react"

const UsingFetch = () => {
    const [users, setUsers] = useState([])

    const fetchData = () => {
        fetch("http://localhost:3001/users/list-tasks", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: {"task1": "eat", "task2": "sleep", "task3": "repeat"}, // body data type must match "Content-Type" header
        }).then(response => {
                return response.text()
            })
            .then(data => {
                setUsers(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {users.length > 0 && (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default UsingFetch