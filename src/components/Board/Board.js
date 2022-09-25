import React from 'react'

export const Board = () => {
  const boardRows = [1,2,3,4,5,6,7,8,9];
  const boardCols = [1,2,3,4,5,6,7,8,9];
  const colors = ["red", "green", "blue", "yellow", "purple"];
  const randomColor = () => {
    return Math.floor(Math.random() * colors.length) + 0;
  };
  return ( 
    <div style={{display: "grid", gridTemplateColumns: "repeat(9, 1fr)", width: "100%", maxWidth: "800px"}}>
      {
        boardCols.map((col) => {
          return boardRows.map((row) => {
            return <div style={{background: `${colors[randomColor()]}`}}>{row}-{col}</div>
          })
        })
      }
    </div>
  )
}
