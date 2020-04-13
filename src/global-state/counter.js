import { useEffect, useState } from "react"


export const useCounter = () =>{
    const [loading, setLoading] = useState(true)
    const [counter, setCounter] = useState(null)
    const [number, setNumber] = useState(0)
    useEffect(async ()=>{
        let counter = await getCounter()
        setLoading(false)
        setCounter(counter)
    }, [])

    const increment = () =>{
        let number = counter.increment()
        setNumber(number)
    }

    const decrement = () =>{
        let number = counter.decrement()
        setNumber(number)
    }
    
    return {
        counter, loading, increment,decrement, number
    }
}