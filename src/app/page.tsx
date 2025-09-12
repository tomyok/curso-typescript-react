"use client"

// type ButtonProps = {
//   title?: string;
// }

// type Domain = string;

interface Domain {
domain: string;
}

function Button({domain}: Domain) {

  return (
    <button className="btn">{domain}</button>
  )
}

function page() {

  return (
    <div>
      <Button
      domain = "hola"
      />
    </div>
  )
}
export default page