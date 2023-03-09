import Expense from './Expense';
import './Exp.css';
import Card from '../UI/Card';
function Exp(props){
    return(
        <Card className="exp">
        <Expense
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
         />
      <Expense
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        />
      
      <Expense
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        />
      
      <Expense
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        />
        </Card>
    );
}
export default Exp;