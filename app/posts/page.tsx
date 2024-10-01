import CardList from "../components/posts/CardList";
import ViewUserButton from "../components/posts/ViewUserButton";

const base_url ="https://jsonplaceholder.typicode.com/posts"


interface Iposts{
    userId :number;
    id:number;
    title:string;
    body:string;
}
const posts = async() => {

    const response = await fetch (base_url, {
    next: {revalidate: 3600 }
    });
        

    const posts: Iposts[]= await response.json(); 
    return (
    <>
    <p>{new Date().toLocaleDateString()}</p>
    <h1 className ="text-fucshia-500">POSTINGAN PAGE </h1> 
    {posts.map((post) => {
    return (
        <CardList key={post.id}>
        <p>{post.id}</p>
        <i>{post.title}</i>
        <i>{post.body}</i>
        <ViewUserButton userId = {post.userId}/>
    </CardList>
    )
})}
  </>     

    );
};


export default posts  ;