import React, { useEffect, useState } from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Card from "./Card"

export default function () {
    const [slide, setSlide] = useState(0);
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

    const nextSlide = () => { 
        // if (data.length - 8 == slide) return false;
        // setData(slide + 3);
        console.log("clide");
    }

    const preSlide = () => {
        // if (slide == 0) return false;
        // setData(slide - 3);
        console.log("clide");
    }
 
    return (<div className="px-3">
        <div className="flex justify-center">
            <div className="w-[1200px] m-4 flex items-center justify-between ">

                <div className="text-[25px] font-bold text-[#02060ceb]">Top Restaurant chains in Lucknow</div>

                <div className="flex">
                    <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2" >
                        <FaArrowLeft onClick={preSlide}/>
                    </div>
                    <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2" >
                        <FaArrowRight onClick={nextSlide}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="flex w-[1200px] gap-7 overflow-hidden">
                {
                    data.map(
                        (d, i) => {
                            return <Card width="w-full md:w-[250px]" {...d} key={i}/>
                        }
                    )
                }
            </div>
        </div>
        <div className="flex justify-center"><hr className="my-1 w-[1200px] border-[2px]"/></div>
    </div>
    )
}