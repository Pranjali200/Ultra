import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Search.css'
 function Search({placeholder,data}){
    const [filteredData, setfilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = data.filter((value) => {
        return value.name1.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setfilteredData([]);
      } else {
        setfilteredData(newFilter);
      }
    };
    

    return(
            <div className='content' id='forsearch'>
                 <input type="text" value={wordEntered} placeholder={placeholder} onChange={handleFilter} className="search" id="searchID1" autoComplete="off" style={{borderRadius:'10px'}}/> 
                 {/* <button id="b1" type='submit'><img id="imb1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" alt=""/></button> */}
    { filteredData.length !== 0 &&( 
        <div className="dataResult1">
        {filteredData.map((value,key)=>{
               // return <a className="dataItem1" href={value.link1} >{value.name1}</a> 
            return <Link to={value.link1} className="dataItem1"><p>{value.name1}</p></Link>
        })}
        </div>  
   )}
            </div>
       );
 }

export default Search;