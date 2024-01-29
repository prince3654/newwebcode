import './ItemDate.css'

function ItemDate(props){
    const day =props.day;
    const month =props.month;
    const year =props.year;
    
    return (
        <div>
        <div className='mfg-date'>
        <span>{day} </span>
        <span>{month} </span>
        <span>{year}</span>
        
        </div>{props.children}
        </div>);
}

export default ItemDate;