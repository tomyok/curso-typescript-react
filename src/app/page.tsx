"use client"

type ButtonProps = {
  title?: string;
}

function Button({title = "Hello"}: ButtonProps) {

  return (
    <button className="btn">{title}</button>
  )
}

function page() {


  return (
    <div>
      <Button
      />
    </div>
  )
}
export default page