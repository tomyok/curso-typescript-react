type Color = "red" | "blue" | "green";

type ButtonProps = {
  text: string;
  subtitle?: string;
  color?: Color;
}

function Button(props: ButtonProps) {

const {text} = props;

  return (
    <button className="btn">{text}</button>
  )
}

function page() {
  return (
    <div>
      <Button text="Hello World"
      color="red"
      />
    </div>
  )
}
export default page