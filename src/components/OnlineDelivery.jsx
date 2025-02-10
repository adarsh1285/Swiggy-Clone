import React, { useEffect, useState } from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Card from "./Card"

export default function OnlineDelivery() {
    const [data, setData] = useState([]);

    const fetchTopRestaurant = async () => {
        const response = await fetch("http://localhost:5000/top-restaurant-chains");
        const apiData = await response.json();
        setData(apiData);
    }

    useEffect(() => {
        fetchTopRestaurant();
    }, []
    )
    return (<>
        <div className="flex justify-center">
            <div className="w-[1200px] m-4  ">
               <div className="flex"><div className="text-[25px] font-bold text-[#02060ceb] ">Restaurant with online food delivery in lucknow</div></div><br></br>
                <div className="">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {
                            data.map(
                                (d, i) => {
                                    return <Card {...d} key={i} />
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </>)
}