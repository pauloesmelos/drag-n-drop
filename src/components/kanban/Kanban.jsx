import React from 'react';
import { useDrag } from 'react-dnd';
const Kanban = ({ element, setStorage, notes, setNotes, storage, data }) => {
  const [ { isDragging }, drag] = useDrag(() => ({
    type: "note",
    item: { name: element },
    end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if(item && dropResult) {
            alert(`You move ${item.name} into ${dropResult.name}`);
            let list = storage;
            list.push(item.name);
            setStorage(list);
            let filter = [];
            for(let i = 0; i < data.length; i++) {
                for(let j = 0; j < storage.length; j++) {
                   if(data[i] !== storage[j]) {
                    // continue
                   }
                }
            }
        }
    },
    collect: (monitor) => ({
        isDragging: !!monitor.isDragging()
    })
  }), []);
  return (
    <div ref={drag}>
      {element}
    </div>
  )
}

export default Kanban;