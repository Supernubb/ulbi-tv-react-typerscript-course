import { useState, useEffect } from 'react'
import Card, { CardVariant } from './components/Card'
import UserList from './components/UserList'
import { IUser } from './types/types'
import axios from 'axios'

const App = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        try {
            const response = await axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/users`);
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Card onClick={(num) => console.log(`click`, num)} variant={CardVariant.outlined} width='200px' height='200px'>
                <button>Button</button>
                <div>dasdsa</div>
            </Card>
            <UserList users={users} />
        </div>
    )
}

export default App