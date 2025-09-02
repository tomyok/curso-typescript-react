type ButtonProps = {
  style: React.CSSProperties;
  text: string;
}

function Button({style, text}: ButtonProps) {

  return (
    <button className="btn" style={style}>{text}</button>
  )
}

function page() {
  return (
    <div>
      <Button style={{
        backgroundColor:"red",
        color:"blue",
        fontSize:"50px"
      }}
      text="Hello World"
      />
    </div>
  )
}
export default page