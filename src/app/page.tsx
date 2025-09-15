"use client"

import { ComponentPropsWithoutRef } from "react"

type ButtonProps = ComponentPropsWithoutRef<"button">

function Button({ }: ButtonProps) {

  return (
    <button className="btn">{}</button>
  )
}

function page() {

  return (
    <div>
      <Button/>
    </div>
  )
}
export default page