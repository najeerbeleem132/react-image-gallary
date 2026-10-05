import axios from 'axios'
import react, { useEffect, useState } from 'react'
import Card from './components/Card';

const App = () => {


/* some code are comments below becase of different method to try the code */

/* 
  Fetch API 
    const loaddata = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
} */

const [data,setData] = useState([]);
const [btndata,Setbuttondata]=useState(1);
const loaddata = async () => {
  //const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30');
  const response = await axios.get(`https://picsum.photos/v2/list?page=${btndata}&limit=10`);
 // console.log(response.data);
  setData(response.data);
}

useEffect(function(){ //it will load the process side be side, it take process in footpath.
  loaddata();
},[btndata]);

let userdata = <h3 className='text-gray-500 text-xl bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semi-bold'>Loading ...</h3>
if(data.length > 0 ) {
  //console.log(data);
  userdata = data.map(function(elem,id){
    return <div key={id}>
      <Card elem={elem} />
    </div>
  })
}

  return (
    <>
     <div className='bg-black text-white h-full'>
       {/* <button className='bg-yellow-500 text-white p-5 rounded m-5 active:scale-95 cursor-pointer' onClick={loaddata}>Load Images</button> */}
        <div className='bg-black displaydata flex flex-wrap gap-5'>
          {userdata}
        </div>
        <div className='navigation buttons flex justify-center items-center p-4 gap-5'>
          <div style={{opacity: btndata == 1? 0.5 : 1}} className='btnprev btn bg-yellow-500 text-black p-5 rounded cursor-pointer active:scale-95' onClick={()=>{
            if(btndata > 1){
              Setbuttondata(btndata-1)
              setData([]);
            }
          }}>Prev</div>
          <h3>Page {btndata}</h3>
          <div className='btnnext btn bg-yellow-500 text-black p-5 rounded cursor-pointer active:scale-95' onClick={()=>{
            Setbuttondata(btndata+1)
            setData([])
          }}>Next</div>
        </div>
     </div>
     </>
  )
}
export default App