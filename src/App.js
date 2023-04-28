import logo from './logo.svg';
import './App.css';

function App() {
  const imageAddress="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
  const post=[{image:imageAddress,name:"Post 1"},{image:imageAddress,name:"Post 3"},{image:imageAddress,name:"Post 2"}]
  return (
    <div className="App">
      <div className='bg-blue-300 w-100 text-white flex flex-row justify-start pl-4 text-2xl py-2'>Facebook</div>
      <div className='flex flex-col'>
      {post.map((p)=>{
        return(
        <div className='flex flex-col items-center'>
          <div className='font-bold'>{p.name}</div>
          <img src={p.image} className='h-1/6 w-1/3'/>
          <div className='flex flex-row'>
            <button className='border px-2 my-2 border-gray-500 rounded' onClick={()=>{alert("LIked")}}>Like</button>
            <button className='border px-2 my-2 border-gray-500 rounded'>Dislike</button>
            <button className='border px-2 my-2 border-gray-500 rounded'>Share</button>
          </div>
        </div>)
      })}
      </div>
    </div>
  );
}

export default App;
