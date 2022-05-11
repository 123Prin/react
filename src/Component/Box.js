import './Box.css';
import { FiCheck } from "react-icons/fi";


function Firstbox (props){
    return(
        
        <div className='allbox'>
        <div className="box">
        
        <h3>{props.head}</h3>
        <aside className="line">{props.lines}</aside>
        <div className="hello"><h1>${props.Rs}<span>/mo</span></h1></div>
        <button>{props.newbutton}</button>
        <div class="down">
        <article>{props.Question}</article>
    <p>{props.lineone}</p>
        
{
  props?.newline?.map((lineone)=>(
    <p><FiCheck size="15px" color='blue' padding-right='10px'/>{lineone}</p>
  ))

}

        </div>
        </div>
        </div>


    );
}
export default Firstbox;