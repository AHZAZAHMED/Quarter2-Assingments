import {resolve} from "path";
export default async function BlogPage(){
    await new Promise((resolve) =>{
        setTimeout(resolve,5000)
    })
    return(
        <div className="w-screen h-screen flex">
      <h1 className=" items-center justify-center text-5xl  bg-gradient-to-r from-cyan-900 to-cyan-500  h-2/3 w-full flex text-center mx-auto bg-dark   ">Blog</h1>
      
      </div>
    );

}