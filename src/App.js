import Firstbox from "./Component/Box";
import sdata from "./Component/Sadata";
import Monty from "./Component/monty";

function Prince() {
  return (
    <div>
      <Monty />


      {sdata.map((data) => (
        <Firstbox
        
          head={data.heading}
          lines={data.firstline}
          Rs={data.price}
          newbutton={data.button}
          Question={data.ques}
          newline={data.lineone}
         />
      ))


      }
    </div>

  );
}
export default Prince;