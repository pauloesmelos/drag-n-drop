import React from 'react';
import { useDrag } from 'react-dnd';
const Kanban = ({ element, setStorage, notes, setNotes, storage, data }) => {
  const [ { isDragging }, drag] = useDrag(() => ({
    type: "note",
    item: { name: element },
    end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if(item && dropResult && !storage.includes(item.name)) {
            alert(`You move ${item.name} into ${dropResult.name}`);
            setStorage([...storage, item.name]);
            setNotes(notes.filter((e) => e !== item.name));
            console.log([...storage, item.name]);
            console.log(notes.filter((e) => e !== item.name));
            console.log(notes.length);
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