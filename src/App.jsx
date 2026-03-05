 import { useState, Suspense } from 'react'
import Header from './header'
import Footer from './footer'
import TiketInfo from './tickets'
import './App.css'

const ticketPromiss = fetch('/ticket-info.json').then(res => res.json())

function App() {
  const [inProgress, setInProgress] = useState(0)
  const [resolved, setResolved] = useState(0)

  // Click handler function
  const handleTicketClick = (status) => {
    if (status === 'in-progress') {
      setInProgress(prev => prev + 1)
    } else if (status === 'resolved') {
      setResolved(prev => prev + 1)
    }
  }

  return (
    <>
      <Header />
      
      {/* Stat Section - Duita Div Ek Line-e */}
      <section className="flex justify-center gap-10 py-10 bg-gray-100">
        <div className="bg-blue-600 text-white p-8 rounded-2xl w-64 text-center shadow-lg">
          <h3 className="text-xl font-bold">In Progress</h3>
          <p className="text-5xl mt-2 font-mono">{inProgress}</p>
        </div>

        <div className="bg-indigo-600 text-white p-8 rounded-2xl w-64 text-center shadow-lg">
          <h3 className="text-xl font-bold">Resolved</h3>
          <p className="text-5xl mt-2 font-mono">{resolved}</p>
        </div>
      </section>

      <main className="container mx-auto p-5">
        <Suspense fallback={<h3>Loading tickets...</h3>}>
          {/* TiketInfo-te function pathiye dite hobe */}
          <TiketInfo 
            ticketPromiss={ticketPromiss} 
            onTicketClick={handleTicketClick} 
          />
        </Suspense>
      </main>

      <Footer />
    </>
  )
}

export default App