import React from 'react';
import { useDrop } from 'react-dnd';
const DroppableArea = ({ onDrop, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "item",
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
        isOver: !!monitor.isOver(),
    })
  });
  return (
    <div 
    className="border-4 border-red-500 mt-10 h-[300px]"
    ref={drop}>
        {children}
    </div>
  )
}

export default DroppableArea;