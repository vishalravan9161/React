
import Card from './components/Card'

function App() {
  return (
    <div className='flex gap-4 p-5'>
    <Card user="Vishal Ravan" age={24} img='https://plus.unsplash.com/premium_photo-1776104180199-2cead081b8a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzR8fHxlbnwwfHx8fHw%3D' />
    <Card  user='Sarthak' age={22} img='https://images.unsplash.com/photo-1778174739838-8f154a589ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D'/>
    <Card  user='Sanyshi' age={22} img='https://images.unsplash.com/photo-1656077217715-bdaeb06bd01f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWFydGh8ZW58MHx8MHx8fDA%3D'/>
     <Card user='Falana ji' age={23} img='https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D'/>
   
    </div>
  )
}

export default App
