import { ReactNode } from 'react';
import { useDroppable } from '@dnd-kit/core';

export function Droppable({ children }: { children: ReactNode }) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });
  const style = {
    height: '100%',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: isOver ? 'white' : 'transparent',
  };


  return (
    <div className='App' ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}