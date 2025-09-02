type ButtonProps = {
  backgroundColor?: string;
  color: string;
  text: string;
}

function Button({backgroundColor, color, text}: ButtonProps) {

  return (
    <button className="btn" style={{
      backgroundColor,
      color
    }}>{text}</button>
  )
}

function page() {
  return (
    <div>
      <Button backgroundColor="red" color="blue" text="Hello World"
      />
    </div>
  )
}
export default page