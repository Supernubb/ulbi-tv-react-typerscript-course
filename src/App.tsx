import { useState, useEffect } from 'react'
import Card, { CardVariant } from './components/Card'
import { ITodo, IUser } from './types/types'
import axios from 'axios'
import Lists from './components/Lists'
import UserItem from './components/UserItem'
import TodoItem from './components/TodoItem'
import EventsExample from './components/EventsExample'

const App = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchUsers();
        fetchTodos();
    }, [])

    const fetchUsers = async () => {
        try {
            const response = await axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/users`);
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchTodos = async () => {
        try {
            const response = await axios.get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos?_limit=10`);
            setTodos(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <EventsExample />
            <Card onClick={(num) => console.log(`click`, num)} variant={CardVariant.outlined} width='200px' height='200px'>
                <button>Button</button>
                <div>dasdsa</div>
            </Card>
            <Lists items={users} renderItem={(user: IUser) => <UserItem key={user.id} user={user} />} />
            <Lists items={todos} renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />} />
        </div>
    )
}

export default App