type ButtonProps = {
  text: string;
  subtitle?: string;
  color?: string;
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
      <Button text="Hello World"/>
    </div>
  )
}
export default page