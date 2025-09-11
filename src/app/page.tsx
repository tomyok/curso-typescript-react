"use client"

import { Dispatch, SetStateAction, useState } from "react"

type ButtonProps = {
setCount: Dispatch<SetStateAction<number>>;
}

function Button({setCount}: ButtonProps) {

  return (
    <button className="btn" onClick={() => setCount(10)}>Hello</button>
  )
}

function page() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <Button
        setCount={setCount}
      />
    </div>
  )
}
export default page