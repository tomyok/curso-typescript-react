type Numbers = 2 | 3 | 4;

type ButtonProps = {
  //padding: number[]
  //padding: [number, number, number?]
  padding: [Numbers]
}

function Button({padding}: ButtonProps) {


  return (
    <button className="btn">{padding}</button>
  )
}

function page() {
  return (
    <div>
      <Button padding={[3]}
      />
    </div>
  )
}
export default page