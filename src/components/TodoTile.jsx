import React from 'react'

const TodoTile = ({ title }) => {
    return (
        <div className='flex border-[10px]'>
            <input type="checkbox" />
            <p>{title}</p>
        </div>
    )
}

export default TodoTile
