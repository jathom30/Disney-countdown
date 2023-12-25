import './App.css'
import { Mickey } from './mickey'

// a date object for January 26, 2024  7:45 AM EST
const dDate = new Date(2024, 0, 26, 7, 45, 0, 0)
const startDate = new Date(2023, 11, 25, 0, 0, 0, 0)
const today = new Date()

function App() {
  const month = dDate.toLocaleString('default', { month: 'long' })
  const day = dDate.getDate()
  const year = dDate.getFullYear()
  const daysSinceStart = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 3600 * 24))
  const daysUntilDisney = Math.floor((dDate.getTime() - today.getTime()) / (1000 * 3600 * 24)) + 1
  const percent = Math.floor((daysSinceStart / daysUntilDisney) * 100)

  return (
    <div className='App'>
      <div className="App__content">
        <p>Disney countdown</p>
        <div className='App__mickey'>
          <Mickey fill={percent} />
          <div className='text-block'>
            <h1>{daysUntilDisney}</h1>
            <h2>Days</h2>
          </div>
        </div>
        <p>{month} {day}, {year}</p>
      </div>
    </div>
  )
}

export default App