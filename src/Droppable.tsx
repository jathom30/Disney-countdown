import { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable({ children }: { children: ReactNode }) {
  const { setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    height: "100%",
  };

  return (
    <div className="App" ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}
