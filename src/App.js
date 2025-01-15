import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const users = [
  { firstName: "John", id: 1, metadata: 'ab9283jrjasodfj2m' },
  { firstName: "Emily", id: 2, metadata: 'ab9283jrjasodfj2m'  },
  { firstName: "Michael", id: 3, metadata: 'ab9283jrjasodfj2m'  },
  { firstName: "Sarah", id: 4, metadata: 'ab9283jrjasodfj2m'  },
  { firstName: "David", id: 5, metadata: 'ab9283jrjasodfj2m'  },
  { firstName: "Jessica", id: 6, metadata: 'ab9283jrjasodfj2m'  },
  { firstName: "Daniel", id: 7, metadata: '3923094kjasdf'  },
  { firstName: "Olivia", id: 8, metadata: 'ab9283jrjasodfj2m'  },
  { firstName: "Matthew", id: 9, metadata: 'ab9283jrjasodfj2m' },
  { firstName: "Sophia", id: 10, metadata: 'ab9283jrjasodfj2m'  }
]

function App() {
  const [searchItem, setSearchItem] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value; //searchTerm, leveraged to filter on the users array to return filtered copy

    setSearchItem(searchTerm);
    
    const filteredItems = users.filter(user => {
      //filter conditions go here
      return user.firstName.toLowerCase().includes(searchTerm.toLowerCase());
    });
    
    setFilteredUsers(filteredItems);
  }

  return (
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder='Type to search'
      ></input>
      <ul>
        {filteredUsers.map(user => <li key={user.id}>{user.firstName + " " + user.metadata}</li>) /* presentation of each object */} 
      </ul>
      <Footer></Footer>
    </Router>
  );
}

export default App;
