import React, { useState } from 'react'

const Todo1 = () => {
    let [todo, setTodo] = useState("")//onchange
    let [todonew, setTodoNew] = useState([])//onSubmit

    let handleSubmit = (e) => {
        // setTodoNew(todo)//only present value printing 
        setTodoNew((preVal) => { //here getting previous and current values
            return [...preVal, todo]
        })

        setTodo("")
        e.preventDefault()
    }


    return (
        <>
            <div className='container m-5' style={{display:"grid", justifyContent:'center'}}>
                <h1  className="text-success" style={{textAlign:'center'}}>Todo App</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" required value={todo} placeholder='Enter Todo ' className='rounded circle' onChange={(e) => setTodo(e.target.value)} />
                    <button className='btn btn-primary btn-sm' type='submit'>
                        Add Todo
                    </button>
                </form>

                <div>
                    <ul style={{background:'pink'}}>
                        {
                            todonew.map((todoitems, index) => {
                                return <li key={index}>{todoitems} <button>Delete</button> <button>Edit</button></li>
                            })
                        }
                    </ul>

                </div>
            </div>

        </>
    )
}

export default Todo1