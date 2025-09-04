type ButtonProps = {
  userAges: Record<"jorge" | "bob" | "alice",number>
  text: string;
}

function Button({text}: ButtonProps) {

  return (
    <button className="btn">{text}</button>
  )
}

function page() {
  return (
    <div>
      <Button 
      userAges={{
        alice: 20,
        bob: 23,
        jorge: 21
      }}
      text="Hello World"
      />
    </div>
  )
}
export default page