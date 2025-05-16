import { useEffect, useState } from "react"

function LearningUseEffect(){

  // type 1 of useEffect hook
  // useEffect(()=>{
  //   console.log("Hello from useEffect")
  //   //fetch courses from backend = get ==localhost:5000/api/books
  // },[])
  // useEffect(fn, [])
  //type 2 of useEffect hook
  const [number,setNumber] = useState(0)
  function increment(){
    setNumber(number + 1)
  }
  useEffect(()=>{
    console.log("useEffect triggered")
  },[number]) //component/page re-render hune bela ma useEffect trigger huncha

  // useEffect(fn, [number])

  // type 3 of useEffect hook
  useEffect(()=>{
    console.log("type 3 of useEffect triggered")
  }) //execute every time when component/page re-render
  // useEffect(fn)
  return(
    <div>
      
    <h1>I m learning use effect hook today!</h1>
    <h3>{number}</h3>
    <button onClick={increment}>+</button>
    </div>

  )
}

export default LearningUseEffect