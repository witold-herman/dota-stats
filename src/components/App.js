import React, {useState} from 'react';
import './Result.css'

const APIKey = '24AEFA39163B4816E15315CCC0A13484';
const dotaID = '87570498';
const steamID = '76561198047836226';
// Moj 76561198047836226
// Kario 76561198011566914
// Mesiox 76561198053885597
const App = () => {
    const [hasError, setErrors] = useState(false);
    const [data, setData] = useState({});
    const [games, setGames] = useState('');
    const [gameName, setGameName] = useState(['', '', '', '', '', '', '', '']);
    const [inputSteamId, setId] = useState('');


    async function fetchData() {
        const res = await fetch(`/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${APIKey}&steamid=${inputSteamId}&format=json`);
        // res
        //     .json();
        return res.json();
        //     .then(res => {
        //         setData(res)
        //     })
        //     .catch(err => setErrors(err));
    }


    const onChange = (e) => {
        setId(e.target.value);
        // if (data.response !== undefined) {
        //     console.log(data.response.games);
        //     setGames(data.response.games);
        // }

    };

    const handleClick = () => {

        fetchData()
         //   .then((res) => setGames(res.response.games))
            .then( (res) => setGameName([
                res.response.games[0].name,
                res.response.games[1].name,
                res.response.games[2].name]
          //     res.response.games[3].name]
            ))
            .then(() => console.log('no jest'))
            .catch(err => setErrors(err));



    };

    return (
        <div>
            <span>Has error: {JSON.stringify(hasError)}</span>
            <hr/>
            <span>Names of 4 last played games: {`${gameName[0]}, ${gameName[1]}, ${gameName[2]}, ${gameName[3]} `}</span>
            <hr/>
            <button onClick={onChange}>
                Click for data
            </button>
            <button onClick={handleClick}>
                Click for last 4 games
            </button>
            <input onChange={onChange}/>
        </div>

    )
};

export default App;
