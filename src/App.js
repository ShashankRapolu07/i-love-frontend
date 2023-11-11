import './App.css';
import Header from './Header.jsx';
import DropdownContainer from './Dropdown.jsx';
import BodyContent from './BodyContent.jsx';
import {useState, useEffect} from 'react';
import api from './api.json';

function App() { 

  const getLocalStorageItem = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : defaultValue;
  };

  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState(getLocalStorageItem('group', 'Status'));
  const [order, setOrder] = useState(getLocalStorageItem('order', 'Priority'));

  useEffect(() => {
    localStorage.setItem('group', JSON.stringify(group));
  }, [group]);

  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(order));
  }, [order]);

  return (
    <div className="quicksell-app">
      <Header displayOpen={open} toggleDropdown={() => setOpen(!open)}/>
      {open && <DropdownContainer group={group} order={order} setGroup={setGroup} setOrder={setOrder} toggleDropdown={() => setOpen(!open)}/>}
      <BodyContent group={group} order={order} users={api.users} tickets={api.tickets}/>
    </div>
  );
}

export default App;
