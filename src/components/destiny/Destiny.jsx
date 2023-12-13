import React from 'react';
import { useDrop } from 'react-dnd';
const Destiny = ({ storage }) => {
  const [ { canDrop, isOver }, drop ] = useDrop(() => ({
    accept: "note",
    drop: () => ({ name: "destiny" }),
    collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop()
    })
  }), []);

  return (
    <div>
      <div 
      ref={drop}
      className="h-48 border-4">
        <h1 className="font-bold text-center text-xl py-2">DIV 2</h1>
        { storage.map((element, index) => (
            <div key={index * Math.random() * 1000}>
                {element}
            </div>
        )) }
      </div>
    </div>
  )
}

export default Destiny;