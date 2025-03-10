import React from 'react'

function Props(props) {
  //    let a = [{...props}]
  //    console.log(a.map((i) => i.keys ));
  return (
    <>
      <h1>
        {' '}
        {props.i
          ? props.i
          : props.ii
          ? props.ii
          : props.iii
          ? props.iii
          : props.iii
          ? props.iv
          : props.iv
          ? props.iv
          : props.iv ? props.iv : 'null'}
      </h1>
    </>
  )
}

export default Props
