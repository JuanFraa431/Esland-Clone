import { useEffect } from "preact/hooks";
import { useProgressiveNumber } from "../hooks/useProgressiveNumbers";

export const CountUp = ({ initial, decimals, final, duration }:
    {initial:number, final: number, duration?: number, decimals?: number}
    ) => {
    const [count, setCount] = useProgressiveNumber(initial, duration, decimals)

    useEffect(() =>{
        setCount(final)
    }, [])

    return <span>{count}</span>
}