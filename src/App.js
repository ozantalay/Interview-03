import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  return <GenerateList />;
}

const GenerateList = () => {
  //KODUNUZ BURAYA GELECEK
  const [activites,setActivites]=useState([])

  const fetchActivity=async()=>{
    try{
      const response=await axios.get("https://www.boredapi.com/api/activity")
      setActivites(item=>[...item,response.data])
    }catch(error){
      console.log('hata meydana geldi',error);
    }
  }
  return(
    <div style={{textAlign:'center', marginTop:'50px'}}>
      <h1>Random Activity Generator</h1>
      <button onClick={fetchActivity} style={{marginTop:'10px', border:"1px solid black", borderRadius:'2px', backgroundColor:'black', color:'white', width:'100px'}}>Tıklayın</button>
      <div>
        {activites.map((item,index)=>(
          <ExpandableListItem key={index} item={item}/> 
        ))}
      </div>



    </div>
  )
}
const ExpandableListItem = ({ item }) => {
  // KODUNUZ BURAYA GELECEK
  const[showDetails,setShowDetails]=useState(false)

  return (
    <div style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h3>{item.activity}</h3>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && (
        <div style={{ marginTop: "10px" }}>
          <p><strong>Type:</strong> {item.type}</p>
          <p><strong>Participants:</strong> {item.participants}</p>
          <p><strong>Price:</strong> {item.price}</p>
          {item.link && <p><strong>Link:</strong> <a href={item.link} target="_blank" rel="noopener noreferrer">Activity Link</a></p>}
          <p><strong>Accessibility:</strong> {item.accessibility}</p>
        </div>
      )}
    </div>
  );
};

export default App;