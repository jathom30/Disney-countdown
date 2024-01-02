export const CircleImages = ({ src, pos }: { src: string; pos: { left?: string; right?: string; top?: string; bottom?: string; scale?: string } }) => {
  return (
    <div
      className="CircleImages"
      style={pos}
      draggable
      onDragStart={(e) => {
        console.log(e)
      }}
      onDragEnd={e => {
        console.log(e)
      }}
    >
      <img src={src} />
    </div>
  )
}