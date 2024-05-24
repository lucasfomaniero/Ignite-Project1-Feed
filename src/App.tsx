import { Header } from "./components/Header"
import { Post } from "./components/Post"
import "./fonts/CormorantGaramond-Regular.ttf"
import style from './App.module.css'
import { Sidebar } from "./components/Sidebar"
function App() {

  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <Post author="Lucas Maniero" content="Lorem ipsum sit amet"/>
      </div>
    </div>
    
  )
}

export default App
