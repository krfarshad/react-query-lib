import React  from "react";
import { useQuery } from '@tanstack/react-query';
import GetContent from '../../Utils/Context/GetContent';
import Post from "../Post/Post";
const Main:React.FC = ():JSX.Element=>{
    const {isLoading,isError , data } = useQuery(['data'],GetContent);
    if(isLoading){
        return (
            <div className="text-center">
                loading ...
            </div>
        )
    }   
    if(isError){
        return (
            <div className="text-center">
                woooops sth is wrong ...
            </div>
        ) 
    }
    return(

        <>
            {Array.from(data).map((item)=>{
                return(
                    <div className="container mx-auto py-4">
                        <div className="mb-8">
                            <Post Content={item}  />
                        </div>
                    </div>
                )
            })}
        </>
    )
}
export default Main;