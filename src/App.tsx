import {
  DndContext,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  DragEndEvent,
} from "@dnd-kit/core";
import "./App.css";
import { CircleImages } from "./CircleImages";
import { Droppable } from "./Droppable";
import { useLocalStorage } from "./useLocalStorage";
import { KeyIcon } from "./KeyIcon";

// a date object for April 8, 2024  7:45 AM EST
const dDate = new Date(2024, 3, 8, 0, 0, 0, 0);
const startDate = new Date(2024, 1, 19, 0, 0, 0, 0);
const today = new Date();

function App() {
  const [draggables, setDraggables] = useLocalStorage<
    Record<string, { x: number; y: number }>
  >({
    key: "draggables",
    initialValue: {
      "https://www.icegif.com/wp-content/uploads/2023/01/icegif-55.gif": {
        x: 0,
        y: 0,
      },
      "https://media1.giphy.com/media/f6ORvWUuYd0UDW5tHA/giphy.gif?cid=ecf05e47x66m1vgv3o6idenvu8rkzzmhn924l913tep1gc8e&ep=v1_gifs_search&rid=giphy.gif&ct=g":
        { x: 0, y: 0 },
      "https://png.pngtree.com/png-clipart/20201209/original/pngtree-cartoon-style-golden-silver-key-clipart-png-image_5671107.jpg":
        { x: 0, y: 0 },
      "https://us.123rf.com/450wm/biseeise/biseeise2401/biseeise240112020/222704609-illustrated-home-fitnessvector-house-design-concepts.jpg?ver=6":
        { x: 0, y: 0 },
    },
  });
  const mouseSensor = useSensor(MouseSensor, {});
  const touchSensor = useSensor(TouchSensor, {});
  const keyboardSensor = useSensor(KeyboardSensor, {});
  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  const month = dDate.toLocaleString("default", { month: "long" });
  const day = dDate.getDate();
  const year = dDate.getFullYear();
  const daysSinceStart = Math.floor(
    (today.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
  );
  const daysUntilDisney =
    Math.floor((dDate.getTime() - today.getTime()) / (1000 * 3600 * 24)) + 1;
  const percent = Math.floor(
    (daysSinceStart / (daysUntilDisney + daysSinceStart)) * 100
  );

  const handleDragEnd = (event: DragEndEvent) => {
    // if not over droppable area, return
    if (event.over?.id !== "droppable") return;
    // get the draggable id
    const id = event.active.id;
    // get the draggable position
    const deltaX = event.delta.x;
    const deltaY = event.delta.y;
    // update the state
    setDraggables((prev) => ({
      ...prev,
      [id]: {
        x: prev[id].x + deltaX,
        y: prev[id].y + deltaY,
      },
    }));
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <Droppable>
        <div className="App__castle">
          <img src="https://photos.zillowstatic.com/fp/99d752270c1641de08486ca310dfc546-uncropped_scaled_within_1536_1152.webp" />
        </div>
        <div className="App__content">
          <div className="App__mickey">
            <KeyIcon fill={percent} />
            {/* <Mickey fill={50} /> */}
            <div className="text-block">
              <h1>{daysUntilDisney}</h1>
              <h2>Days</h2>
            </div>
            {Object.keys(draggables).map((draggableId) => (
              <CircleImages
                key={draggableId}
                src={draggableId}
                pos={draggables[draggableId]}
              />
            ))}
          </div>
          <p>keys in our hands countdown</p>
          <p>
            {month} {day}, {year}
          </p>
        </div>
      </Droppable>
    </DndContext>
  );
}

export default App;
