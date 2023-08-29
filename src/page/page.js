import React,{useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import { fetchData } from "../redux/action";

const Page = () => {
    const data =useSelector((state)=>state.data.data)
    const loading =useSelector((state)=>state.data.loading)
    const error = useSelector((state) => state.data.error)
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
    
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error:{error.message}</p>
    }
    const newData = new Set(data.map((item) => (
        item.impact
    )))
    const unData= Array.from(newData)

    return (
        <div>
            {unData.map((item) => (
                <p key={item.id}>{item}</p>
            ))}
        </div>
    )
}


export default Page