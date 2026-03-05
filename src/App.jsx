 import TiketInfo from './ticket'
import './App.css'
import { Suspense } from 'react'

const ticketPromiss = fetch('../public/ticket-info.json')
                    .then(res => res.json())
               
                   

function App() {
  

  return (
    <>
       
      <h1>Vite + Reactsss</h1>

      <Suspense fallback={<h3>Ticket are coming .......</h3>}>
 <TiketInfo ticketPromiss={ticketPromiss}></TiketInfo>
</Suspense>
     
    </>
  )
}

export default App
