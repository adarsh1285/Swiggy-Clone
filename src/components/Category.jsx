import React, { useEffect, useState } from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";


export default function Category() {
    const [slide, setSlide] = useState(0);
    const [categories, setCategory] = useState([]);

    const fetchCategory = async () => {
        const response = await fetch("http://localhost:5000/categories");
        const data = await response.json();
        setCategory(data);
    }

    useEffect(
        () => {
            fetchCategory();
        }, []
    )

    const nextSlide = () => { 
        if (categories.length - 8 == slide) return false;
        setSlide(slide + 3);
    }

    const preSlide = () => {
        if (slide == 0) return false;
        setSlide(slide - 3);

    }
    return (<div className="px-2">
        <div className="flex justify-center">
            <div className="w-[1200px] m-4 flex items-center justify-between ">

                <div className="text-[25px] font-bold text-[#02060ceb]">What's on your mind?</div>

                <div className="flex">
                    <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2" >
                        <FaArrowLeft onClick={preSlide} />
                    </div>
                    <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2" >
                        <FaArrowRight onClick={nextSlide} />
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="flex w-[1200px] overflow-hidden ">
                {
                    categories.map((cat, index) => {
                        return (
                            <div key={index}
                                style={{
                                    transform: `translateX(-${slide * 100}%)`
                                }}
                                className="w-[150px] shrink-0 duration-500">
                                <img src={"http://localhost:5000/images/" + cat.image} alt="" />
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
        <div className="flex justify-center"><hr className="my-6 w-[1200px] border-[1px]"/></div>

    </div>
    )
}