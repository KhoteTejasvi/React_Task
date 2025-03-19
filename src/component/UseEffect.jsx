// import React, { useState, useEffect } from 'react'

// function UseEffect() {
//   console.log(' c render')
//   const [state, setFunction] = useState(0)
//   const [teju, setTeju] = useState(0)
//   const [idk, setIdk] = useState(0)
//   let increment = () => setFunction(state + 10)
//   //   let zero = () => setFunction(0)
//   let Steju = () => setTeju(teju - 10)
//   let Sidk = () => setIdk(idk + 10)
//   //   let zero = () => setFunction(0)
//   let decrement = () => setFunction(state - 10)

//   useEffect(() => {
//     console.log('always useeffect')
//   })
//   useEffect(() => {
//     console.log('only one useeffect')
//   },[])
//   useEffect(() => {
//     console.log('only with  state,idk')
//   },[state,idk])
//   useEffect(() => {
//     console.log('only with teju')
//   },[teju])

//   return (
//     <div>
//       count : {state}
//       <br />
//       <button onClick={increment}>increment</button>
//       <button onClick={() => setFunction(0)}>0</button>
//       <button onClick={Steju}>Steju</button>
//       <button onClick={Sidk}>Sidk</button>
//       <button onClick={() => setFunction(0)}>0</button>
//       <button onClick={decrement}>decrement</button>
//     </div>
//   )
// }

// export default UseEffect

////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from 'react'

// function UseEffect() {
//   const [size, setSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   })
//   const onchange = () =>
//     setSize({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     })

//   useEffect(() => {
//     console.log('only one')
//     const handleChange = () => {
//       setSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       })
//     }
//     window.addEventListener('resize', handleChange)
//     return () => window.removeEventListener('resize', handleChange)
//   }, [])
//   //     useEffect(() =>    onchange = () =>
//   //     setSize({
//   //       width: window.innerWidth,
//   //       height: window.innerHeight,
//   //     })
//   //     window.addEventListener('resize'),onchange )
//   // , []}
//   return (
//     <div>
//       {size.width} width
//       <br />
//       {size.height} height
//       <button onClick={onchange}>show the info</button>
//     </div>
//   )
// }

// export default UseEffect

/////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react'
// // fetch('https://jsonplaceholder.typicode.com/todos')
// //   .then((response) => response.json())
// //   .then((json) => console.log(json))
// function UseEffect() {
//   const [todo, setTodo] = useState(null)
//   useEffect(() => {
//     console.log('only');
//   fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((response) => response.json())
//     .then((json) => setTodo(json))
//   }, [])
//   return (
//     <div>
//       <h1>get all info</h1>
//       {todo ? (
//         todo.map((item) => (
//           <div key={item.id}>
//             {/* <h1>completed:{item.completed ? 'yes':'no'}</h1> */}
//             <h1>completed:{`${item.completed} `}</h1>
//             <h1>id:{item.id}</h1>
//             <h1>userId:{item.userId}</h1>
//             <h1>title:{item.title}</h1>
//             <hr />
//           </div>
//         ))
//       ) : (
//         <p> loadding</p>
//       )}
//     </div>
//   )
// }

// export default UseEffect

///////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react'

// function UseEffect() {
//   const [todo, setTodo] = useState([])
//   const [task, setTask] = useState('')
//   const [editId, setEditId] = useState(null)

//   //   get the data from api
//   useEffect(() => {
//     console.log('only')
//     fetch('https://jsonplaceholder.typicode.com/todos')
//       .then((response) => response.json())
//       .then((json) => setTodo(json))
//   }, [])

//   //   create data
//   const addTodo = () => {
//     if (task.trim() === '') return
//     const newTodo = {
//       id: Date.now(),
//       title: task,
//       completed: false,
//       userId: 1,
//     }
//     setTodo([newTodo, ...todo])
//     setTask('')

//     // api post request
//     fetch('https://jsonplaceholder.typicode.com/todos', {
//       method: 'POST',
//       body: JSON.stringify(newTodo),

//       headers: { 'Content-Type': 'application/json' },
//     })
//       .then((res) => res.json())
//       .then((data) => console.log('added:', data))
//   }

//   const deleteTodo = (id) => {
//     setTodo(todo.filter((todo) => todo.id !== id))

//     fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
//       method: 'DELETE',
//     }).then(() => console.log('delete ', id))
//   }

//   const editTodo = (id, title) => {
//     setTask(title)
//     setEditId(id)
//   }

//   //   fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//   const updateTodo = () => {
//     if (task.trim() === '') return
//     setTodo(
//       todo.map((item) => (item.id === editId ? { ...todo, title: task } : todo))
//     )
//     fetch(`https://jsonplaceholder.typicode.com/todos/${editId}`, {
//       method: 'PATCH',
//       body: JSON.stringify({ title: task }),

//       headers: { 'Content-Type': 'application/json' },
//     }).then(() => console.log('update', editId))
//     setTask('')
//     setEditId(null)
//   }

//   return (
//     <div>
//       <h1>create todo</h1>
//       <input
//         type='text'
//         placeholder='enter somehting'
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       />
//       <button onClick={editId ? updateTodo : addTodo}>
//         {editId ? 'update' : 'add'}
//       </button>
//       <hr />
//       <h1>get all info</h1>
//       {todo ? (
//         todo.map((item) => (
//           <div key={item.id}>
//             {/* <h1>completed:{item.completed ? 'yes':'no'}</h1> */}
//             <h1>completed:{`${item.completed} `}</h1>
//             <h1>id:{item.id}</h1>
//             <h1>userId:{item.userId}</h1>
//             <h1>title:{item.title}</h1>
//             <button onClick={() => editTodo(item.id, item.title)}>edit</button>
//             <button onClick={() => deleteTodo(item.id)}>delete</button>
//             <hr />
//           </div>
//         ))
//       ) : (
//         <p> loadding</p>
//       )}
//     </div>
//   )
// }

// export default UseEffect

///////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react';

function UseEffect() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState('');
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
        const data = await response.json();
        setTodo(data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // Create a new todo
  const addTodo = async () => {
    if (task.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      title: task,
      completed: false,
      userId: 1,
    };

    setTodo([newTodo, ...todo]);
    setTask('');

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      console.log('Added:', data);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    setTodo(todo.filter((item) => item.id !== id));

    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
      });
      console.log('Deleted:', id);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  // Edit a todo
  const editTodo = (id, title) => {
    setTask(title);
    setEditId(id);
  };

  // Update a todo
  const updateTodo = async () => {
    if (task.trim() === '') return;

    setTodo(todo.map((item) => (item.id === editId ? { ...item, title: task } : item)));

    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${editId}`, {
        method: 'PATCH',
        body: JSON.stringify({ title: task }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Updated:', editId);
    } catch (error) {
      console.error('Error updating todo:', error);
    }

    setTask('');
    setEditId(null);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Enter something"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={editId ? updateTodo : addTodo}>{editId ? 'Update' : 'Add'}</button>
      <hr />

      <h1>All Todos</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        todo.map((item) => (
          <div key={item.id}>
            <h3>Title: {item.title}</h3>
            <p>Completed: {item.completed ? 'Yes' : 'No'}</p>
            <button onClick={() => editTodo(item.id, item.title)}>Edit</button>
            <button onClick={() => deleteTodo(item.id)}>Delete</button>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default UseEffect;

