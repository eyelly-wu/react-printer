import React, { useRef } from 'react'
import { hot } from 'react-hot-loader'
import Printer from '@eyelly/react-printer'

function App() {
  const printContent = useRef(null)

  return (
    <>
      <div ref={printContent}> this is content to print </div>
      <div> this is normal content </div>
      <Printer shotcut={true} content={printContent} newWindow>
        <button>print</button>
      </Printer>
    </>
  )
}

export default hot(module)(App)
