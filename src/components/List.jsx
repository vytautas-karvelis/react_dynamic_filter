import React from 'react'

const List = ({items}) => {
    return (
        <ul>
            {items.map(item=>(
                <li style={{borderBottom:"1px solid lightgray"}}>{item.title}</li>
            ))}
        </ul>
    )
}

export default List
