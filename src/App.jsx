import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { data } from './components/data/data';
import Destiny from './components/destiny/Destiny';
import Kanban from './components/kanban/Kanban';

const App = () => {
  const [notes, setNotes] = React.useState([]);
  const [storage, setStorage] = React.useState([]);
  React.useEffect(() => {
    setNotes(data);
    console.log("armaze");
  }, []);
  React.useEffect(() => {
    console.log(notes);
  }, [notes]);
  if(!notes) return null;
  return (
    <div>
      <div className="text-3xl text-center font-bold py-4">Drag-n-Drop</div>
      <DndProvider backend={HTML5Backend}>
        {notes.map((e,i) => (
          <Kanban element={e} key={i * Math.random() * 1000} setStorage={setStorage} notes={notes} setNotes={setNotes} storage={storage} data={data} />
        ))}
        <Destiny storage={storage} />
      </DndProvider>
    </div>
  )
}

export default App;