import React from 'react';

export function TodoTask({index, todo, value, deleteTask}) {
	return <div className='flex justify-between w-3/4 mt-4 bg-[#3f80ff] sm:w-2/3 lg:w-1/3'>
		<span className='px-3 py-2'>{todo.task}</span>
		<button className='px-3 py-2 bg-[#ffbe3f] duration-150 hover:bg-[#b01e15]' onClick={() => deleteTask(index)}>✓</button>
	</div>
}