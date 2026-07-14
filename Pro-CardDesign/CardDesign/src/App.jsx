// import React from 'react'

import Card from "./components/Card"

function App() {
  return (
    

      <div className="">
           <div className=" grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center
            ">

            <Card user='Vishal Ravan' likes='110.1K' posts='100' views='17.1M' img='https://plus.unsplash.com/premium_photo-1778145833266-ed2bdb17076c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8' />
            <Card user='Sanyashi' likes='100.2K' posts='230' views='2.8M' img='https://i.pinimg.com/736x/86/6b/a5/866ba5508b7f996a8fc6bbcf9402b1be.jpg'/>
            <Card user='Abhishek' likes='190.8K' posts='50' views='10.1M' img='https://i.pinimg.com/474x/62/24/ab/6224ab8b26bf89afa27b2e0441f6b503.jpg'/>
            <Card user='Shartak' likes='70.4K' posts='40' views='11.6M' img='https://i.pinimg.com/736x/12/d0/a6/12d0a641548325203a22940fc6d556bb.jpg'/>
            <Card user='Abhay' likes='90.7K' posts='30' views='13.1M' img='https://i.pinimg.com/736x/9b/3d/92/9b3d922b58b05c001876d639532bfcaf.jpg'/>
            <Card user='Vijay' likes='40.0K' posts='89' views='10.6M' img='https://i.pinimg.com/736x/0c/21/e0/0c21e07a4f8fcedfc797a31d97870cf4.jpg'/>
            <Card user='Rohit' likes='50.1K' posts='60' views='15.6M' img='https://i.pinimg.com/736x/3e/12/01/3e120144ffacafb5a2ea5b48ca1e9690.jpg'/>
            <Card user='Falana ji' likes='20.9K' posts='30' views='11.4M' img='https://i.pinimg.com/736x/e8/73/09/e87309140a70f6fdd138bd1dbdd187f2.jpg'/>



           </div>

      </div>
  
  )
}

export default App