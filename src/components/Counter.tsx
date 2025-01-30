import { useCounter } from "../hooks/useCounter"

const Counter = () => {
    const { count, increment, decrement } = useCounter()
    
    return (
        <div className="counter">
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter