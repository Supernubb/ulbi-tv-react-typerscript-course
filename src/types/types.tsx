export interface IAddres {
    street: string
    city: string
    zipcode: string
}

export interface IUser {
    id: number
    name: string
    email: string
    address: IAddres
}

export interface ITodo {
    id: number
    title: string
    completed: boolean
}