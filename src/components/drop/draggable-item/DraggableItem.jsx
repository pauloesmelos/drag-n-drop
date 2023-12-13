import React from 'react';
import { useDrag } from 'react-dnd';
const DraggableItem = ({ id, text, onDrag}) => {
  const [{ isDragging }, drag] = useDrag({
    type: "item",
    item: { id, text},
    end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if(item && dropResult) {
            onDrag(item);
        }
    },
    collect: (monitor) => ({
        isDragging: !!monitor.isDragging()
    }),
  });
  return (
    <div 
    ref={drag}
    className="p-2 text-white bg-slate-700">
        {text}
    </div>
  )
}

export default DraggableItem;