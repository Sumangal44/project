import { useState } from 'react'
import PWABadge from './PWABadge.tsx'
import './App.css'
import { ModeToggle } from './components/mode-toggle.tsx'
import { Button } from './components/ui/button.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ModeToggle />
      <h1>fixed deposite management system</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-lg bg-blue-600">
        Click on the Vite and React logos to learn more
      </p>
      <PWABadge />
    </>
  )
}

export default App
