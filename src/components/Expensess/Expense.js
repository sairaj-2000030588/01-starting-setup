import './Expense.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const Expense=(props)=> 
{
    let title=props.title;

  const click=()=>
  {
  title='updated';
  console.log(title);
  };

    return (
         <Card className="expense-item">
           <ExpenseDate date={props.date} />
            <div className="expense-item__description">
               <h2>{title}</h2> 
                <div className="expense-item__price">{props.amount}</div>
           </div>
            <button onClick={click} className="expense-item__price">CHANGE TITLE</button>
        </Card>

    );
}
export default Expense;