// import React, { useState } from 'react'
// import { todos } from '../data'
// function Todo() {
//     console.log(todos);
//   return (
//     <div>
//       <h2>todo create</h2>
//       <div>
//         <input type='text' placeholder='enter your todo or task' />
//         <button>add / update</button>
//       </div>
//       <hr />
//       {todos.map((e) => {
//         return (
//           <div key={e.id}>
//             <h1>{e.task}</h1>
//           </div>
//         )
//       })}
//     </div>
//   )
// }
// export default Todo
//////////////////////////////////////

// import React, { useState } from 'react'
// // import { todos } from '../data'
//  const todos = [
//    { id: 1, task: 'Buy groceries' },
//    { id: 2, task: 'Walk the dog' },
//    { id: 3, task: 'Finish project report' },
//    { id: 4, task: 'Call mom' },
//    { id: 5, task: 'Clean the house' },
//    { id: 6, task: 'Pay bills' },
//    { id: 7, task: 'Read a book' },
//    { id: 8, task: 'Exercise' },
//    { id: 9, task: 'Cook dinner' },
//    { id: 10, task: 'Write blog post' },
//  ]
// function Todo() {
//     const [tasks,setTasks] = useState(todos)
    
//     const deleteAll = () => setTasks([])
//     // const deleteTask = (teju) => console.log(teju);
//     const deleteTask = (azad) => {
//         setTasks(tasks.filter(function (element) {
//             // console.log(element.id !== teju) 
//             return element.id !== azad
//         } ))
//     }
//   return (
//     <div>
//       <h2>todo create</h2>
//       <div>
//         <input type='text' placeholder='enter your todo or task' />
//         <button>add / update</button>
//         <br />
//         <button onClick={deleteAll}>delete all</button>
    
//       </div>
//       <hr />
//       {tasks.map((e,index) => {
//         return (
//           <div key={e.id}>
//             <h1>{e.task}</h1>
//             <button onClick={() => deleteTask(e.id)}>delete</button>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default Todo
//////////////////////////////////////////////////////////////////////////////

import React, { useState } from 'react'

function UseState() {
    const [value,setValue] = useState('teju')
    const onChange =  (e) =>  {
        setValue(e.value)
    }
  return (
    <div>
      <form action=''>
        <input
          type='text'
          placeholder='type anything'
          value={value}
          onChange={onChange}
        />
        <h1>value : {value}</h1>
      </form>
    </div>
  )
}

export default UseState
