import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import NavigBar from './Components/NavigBar';
import UserCard from './Components/UserCard';
import Load from './Components/Load';

function App() {
  const [data, setData] = useState(null);
  const [click, setClick] = useState(0);
  const [load, setLoad] = useState(false);
  
  useEffect(()=>{
    const getUsers=()=>{
      setLoad(true);
      Axios.get('https://reqres.in/api/users?page=1').then((res)=>{
        setData(res.data.data);
        setLoad(false);
    })
  }
  click && getUsers();
},[click]);

const renderUsers = () => {
  if (!data) {
    return null;
  }
  return data.map((item) => {
    return <UserCard key={item.id} first_name={item.first_name} last_name={item.last_name} email={item.email} avatar={item.avatar}></UserCard>
  })
};

    return (
      <div className="App">
        <NavigBar onsetClick={setClick} />
        <div className='row'>
          {renderUsers()}
        </div>
        <Load show={load}></Load>
      </div>
      )
      }
export default App;