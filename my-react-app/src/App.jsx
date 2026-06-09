import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Title() {
  return <h1>I'm the title</h1>;
}
function App() {

  return (
    <div>
      <Title/>
      <button>I;m Button</button>
      <p>I;m P</p>
    </div>
  )

}

export default App
