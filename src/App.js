import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Profile from './Components/Profile';
import NewPost from './Components/NewPost';
import Messages from './Components/Messages';

const App = () => {
  const [currentPage, setCurrentPage] = useState('/');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <Home />;
      case '/register':
        return <Register />;
      case '/login':
        return <Login />;
      case '/profile':
        return <Profile />;
      case '/newpost':
        return <NewPost />;
      case '/messages':
        return <Messages />;
      default:
        return <Home />;
    }
  };

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPage(path);
  };

  return (
    <div>
      <Navbar navigate={navigate} />
      {renderPage()}
    </div>
  );
};

export default App;