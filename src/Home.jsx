import { useState } from "react"

function Home(){
  // let meroNumber = 0
  // function increment(){
  //   meroNumber = meroNumber + 1
  //   // console.log(meroNumber)
  // }
  // function decrement(){
  //   meroNumber = meroNumber - 1
  //   // console.log(meroNumber)
  // }


  // let something = useState(100) //[100,f]
  // let myValue = something[0] // 100
  // let myFunction = something[1] // f

  let [myValue, setMyValue] = useState(100) // [100,f]

  function increment(){
    setMyValue(myValue + 1)
    // console.log(myValue)
  }
  function decrement(){
    setMyValue(myValue - 1)
    // console.log(myValue)
  }
  return(
    <div>
    <h1>{myValue}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h1>Learning useState hook</h1>
    </div>
  )
}


export default Home