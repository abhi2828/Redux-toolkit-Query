import { FormEvent, useEffect, useState } from "react"
import PostCard from "./component/PostCard"
import { useGetPostQuery, useNewPostMutation } from "./redux/api"

const App = () => {
  const {isLoading,data,error,refetch} = useGetPostQuery("")
  const [newPost] = useNewPostMutation() //  we can use any name insted."newPost" is not not compulsory  
  
  const [postList, setPostList] = useState<Post[]>([])
  const [title, setTitle] = useState<string>("")
  const [body, setBody] = useState<string>("")

const submitHandler = (e:FormEvent<HTMLFormElement>):void=>{
  e.preventDefault()
  const post:Post={
    title, body, id:Math.random()*1000, userId:Math.random()*1000
  }
  newPost(post)
  setTitle("");
  setBody("");
  
  // ******* this is another way of get data after post ****
  // .unwrap()
  // .then(() => {
  //   setTitle("");
  //   setBody("");
  //   refetch(); // Refetch posts after a new post is created
  // });
}

useEffect(() => {
  if (data) {
    const reversedData = [...data].reverse();
    setPostList(reversedData);
  }
}, [data]);



  return (
    <div className="app">
      <h2>my App</h2>
      <form onSubmit={submitHandler}>
       <input type="text" name="title" value={title} placeholder="enter title" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setTitle(e.target.value)} />
          <input type="text" name="body" value={body} placeholder="enter body" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setBody(e.target.value)} />
       <button type="submit">submit</button>
      </form>
      <div className="cardWrapper">
        {
         error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? <p>Loading...</p> : postList?.map(e=><PostCard key={e?.id} post={e} />)
        }
      </div>
    </div>
  )
}

export default App