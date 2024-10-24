import React from 'react'

const TodoTile = ({ title, icon }) => {
    return (
        <div className='flex border-[10px]'>
            <input type="checkbox" />
            <p>{title}</p>
            <img src={`https://savefiles.org/${icon}?shareable_link=123`} alt={title} />
        </div>
    )
}

export default TodoTile
