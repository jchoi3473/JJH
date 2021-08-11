import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import './Main.css';


function Main() {

    const [inputValue, setInputValue] = useState('');
    const [searchResult, setSearchResult] = useState('');

    const postSearch = async function(sentence){
        console.log("triggered")
        const body = { sentence : sentence};
        //change url(localhost)
        const response = await axios.post(
          "localhost:8080",
          body
        );
        //need to do something so that we can validate user(correctness)
        if(response){
          console.log(response)
          //setSearchResult(resonse.sentence)
          return response
        }
      };
    const onSearchChange = (e) =>{
        setInputValue(e.target.value)
    }
    const onClickSearch = async function(){
        console.log("triggered")
        const res = await postSearch(inputValue)
        setSearchResult(res)
    }
    //placeholder 수정
    return (
    <div className="Main">
        <div className = "Search-Container">
            <input
            className = "Input-Style"
            placeholder="Search"
            value={inputValue}
            onChange={e => onSearchChange(e)}
            />
            <button className = "Button-Style" onClick = {() => onClickSearch()}>Search</button>
        </div>
        <div className = "Result-Style">{searchResult}</div>
    </div>
  );
}

export default Main;
