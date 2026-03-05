 import Header from './header'
import Footer from './footer'
import TiketInfo from './tickets' // <-- এই লাইনটি অবশ্যই লাগবে
import './App.css'
import { Suspense } from 'react'

// ডাটা ফেচ করার প্রমিজ
const ticketPromiss = fetch('/ticket-info.json')
                    .then(res => res.json())

function App() {
  return (
    <>
       
      <Header />

      <main className="container mx-auto py-10">
        <h1 className="text-center text-3xl font-bold my-5">Vite + Reactsss</h1>

       
        <Suspense fallback={<h3 className="text-center">Tickets are coming .......</h3>}>
          <TiketInfo ticketPromiss={ticketPromiss}></TiketInfo>
        </Suspense>
      </main>

    
      <Footer />
    </>
  )
}

export default App