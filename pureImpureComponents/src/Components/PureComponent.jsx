
function Chocolates({numberOfChocolates}){
    return <p>I have {numberOfChocolates} Chocolates with me!</p>
}

function PureComponent() {
  return (
    <div>
      <Chocolates numberOfChocolates={1}/>
      <Chocolates numberOfChocolates={5}/>
      <Chocolates numberOfChocolates={10}/>
    </div>
  )
}

export default PureComponent
