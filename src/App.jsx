import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { data } from './components/data/data';
import DroppableArea from './components/drop/droppable-area/DroppableArea';
import DraggableItem from './components/drop/draggable-item/DraggableItem';

const App = () => {
  const [area1, setArea1] = React.useState([]);
  const [area2, setArea2] = React.useState([]);
  React.useEffect(() => {
    setArea1(data);
  }, []);
  const handleDropLeft = (item) => {
    // Remove o item da lista à esquerda
    const updatedLeftItems = area1.filter((i) => i.id !== item.id);
    setArea1(updatedLeftItems);

    // Adiciona o item à lista à direita
    setArea2((prevItems) => [...prevItems, item]);
  };
  const handleDropRight = (item) => {
    // Remove o item da lista à direita
    const updatedRightItems = area2.filter((i) => i.id !== item.id);
    setArea2(updatedRightItems);

    // Adiciona o item à lista à esquerda
    setArea1((prevItems) => [...prevItems, item]);
  };

  if(!area1) return null;
  if(!area2) return null;
  return (
    <div>
      <div className="text-3xl text-center font-bold py-4">Drag-n-Drop</div>
      <DndProvider backend={HTML5Backend}>
          <DroppableArea onDrop={handleDropLeft}>
            {area1.map((e,i) => (
              <DraggableItem key={i * Math.random() * 1000} id={e.id} text={e.text} onDrag={handleDropLeft} />
            ))}
          </DroppableArea>
          <DroppableArea onDrop={handleDropRight}>
            {area2.map((e,i) => (
              <DraggableItem key={i * Math.random() * 1000} id={e.id} text={e.text} onDrag={handleDropRight} />
            ))}
          </DroppableArea>
      </DndProvider>
    </div>
  )
}

export default App;