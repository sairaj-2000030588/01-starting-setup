import './Card.css';
function Card(props){
    const cl= 'card '+props.className;
return <div className={cl}>{props.children}</div>;
}
export default Card;