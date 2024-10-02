
let numberOfChocolates=0;

function Chocolates(){
    numberOfChocolates=numberOfChocolates+1;  //BAD:Chocolates component is modifying the outside variable 
    return <p>I have {numberOfChocolates} Chocolates with me!</p>
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
