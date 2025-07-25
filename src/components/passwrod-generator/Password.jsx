import { useState, useCallback, useEffect, useRef } from 'react'




export const Password = () => {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
 
  //Having refrence of any DOM element
  const passRef = useRef(null)

  // it returned a memoized callback used for optimization
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "{}[]@&%^&*()!"

    for(let i = 1; i <= length; i++ ){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  //used for performing side effects
  useEffect(() => {
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])


  const copySign = useCallback(async() => {
    passRef.current?.select();
    //passRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>

      <div className="p-4 w-full max-w-md mx-auto shadow-md rounded-lg my-8 text-white bg-gray-500">
        <h1 className='my-4 text-xl text-center'>Password Generator</h1>
        <div className='flex  rounded-lg overflow-hidden mb-4'>
            <input type="text" ref={passRef} value={password} className="w-full py-2 px-3 outline-none bg-gray-100 text-orange-400 " placeholder='Password' readOnly/>
            <button className='outline-none bg-blue-700 text-white px-3 py-2 shrink-0 cursor-pointer' onClick={copySign}>Copy</button>
        </div>
        <div className="text-orange-400 flex items-center gap-x-1">
            <input type="range" min={0} max={100} value={length} onChange={(e) => {setLength(e.target.value)}} className='cursor-pointer'/> Length({length})
            <input type="checkbox" className='cursor-pointer' defaultChecked={numberAllowed} onChange={(e) => {setNumberAllowed((prev) => !prev)}}/>Numbers
            <input type="checkbox" className='cursor-pointer' defaultChecked={charAllowed} onChange={(e) => {setCharAllowed((prev) => !prev)}}/>Characters
        </div>
      </div>  
    </>
  )
}


