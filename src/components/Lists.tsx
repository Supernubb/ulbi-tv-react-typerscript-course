import { ReactNode } from 'react'

interface ListsProps<T> {
    items: T[]
    renderItem: (item: T) => ReactNode
}

export default function Lists<T>(props: ListsProps<T>) {
    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    )
}