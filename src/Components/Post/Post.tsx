import { ApiType } from "../../Utils/Types/types";
interface postProp {
    Content : ApiType
}

const Post = (Content:any) =>{
   
    return(
        <div className="post-wrapper p-2 shadow-sm shadow-amber-400 bg-white">
           <div className="title"><h2 className="font-bold font-[20px]">{Content.Content.title}</h2></div>
           <div className="body">{Content.Content.body}</div>
        </div>
    )
}
export default Post;