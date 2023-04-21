
 function Counter({onIncrement,count,onDecrement}){
   
   
    return (
        <div>
            {count==0?<p>number should not lesser than 0</p>:null}
            {count==10?<p>number should not greater than 10</p>:null}
            <p>{count}</p>
            <button onClick={onIncrement}>increment</button>
            <button onClick={onDecrement}>Decrement</button>
            
        </div>
    )
}
<p>aaaa</p>
export default Counter