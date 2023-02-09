import {useState} from 'react'
import './App.css'
import data from './theme/schema.json'

function App() {
  console.log(data.themes);
  const [themes, setThemes] = useState(data.themes);
  return (
    <div className="flex flex-row justify-center align-middle">
      {
        themes && Reflect.ownKeys(themes).map((themeName) => (
          <div className="border-2 border-blue-50 p-3 m-3 rounded-md">
            {themeName}
          </div>
        ))
      }
    </div>
  )
}

export default App
