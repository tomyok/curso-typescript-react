"use client"

type ButtonProps = {
  children: React.ReactNode;
}

function Button({children}: ButtonProps) {

  return (
    <button className="btn">Hello World</button>
  )
}

function page() {
  return (
    <div>
      <Button>
        Hola
      </Button>
    </div>
  )
}
export default page