
let numberOfChocolates=0;

function Chocolates(){
    numberOfChocolates=numberOfChocolates+1;  //BAD:Chocolates component is modifying the outside variable 
    return <h2>I have {numberOfChocolates} with me!</h2>
}

function ImpureComponent() {
  return (
    <div>
      <Chocolates/>
      <Chocolates/>
      <Chocolates/>
    </div>
  )
}

export default ImpureComponent
