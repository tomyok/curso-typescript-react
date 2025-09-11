"use client"

type ButtonProps = {
  onClick: () => void;
  text: string;
}

function Button({text, onClick}: ButtonProps) {

  return (
    <button className="btn" onClick={onClick}>{text}</button>
  )
}

function page() {
  return (
    <div>
      <Button 
      onClick={() => {
        alert('Funciona!')
      }}
      text="Hello World"
      />
    </div>
  )
}
export default page