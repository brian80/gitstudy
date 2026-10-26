import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      데브런 팀원에 의해 내용 수정됨
      이번엔 제대로 디자인수정함
      
      디자인에  h1 추가합니다.
      <h1>제목 멋지죠?</h1>
    </>
  )
}

export default App
