import { useQuery } from "@tanstack/react-query";

const GetContent = async() => {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await res.json();

}


export default GetContent;