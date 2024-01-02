import { useDraggable } from '@dnd-kit/core';

export const CircleImages = ({ src, pos }: { src: string; pos: { x: number, y: number } }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: src,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      className="CircleImages"
      style={{ ...style, left: pos.x, top: pos.y }} {...listeners} {...attributes}
    >
      <img src={src} />
    </div>
  )
}