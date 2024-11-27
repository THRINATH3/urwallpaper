import {  useState } from "react";
import { usercontext } from "./userLoginContext";
import { useEffect } from "react";

function UserLoginStore({ children }) {
  const [curruser, setCurruser] = useState({});
  const [loginStatus, setLoginStatus] = useState(false);
  const [err, setErr] = useState('');

  async function onSubmit(data) {
    try {
      const res = await fetch(
        'https://urwallpaper-react.vercel.app/user-api/login',
        {
          method: "POST",
          headers: { "Content-type": "application/json" ,},
          body: JSON.stringify(data),
        }
      );
      let result= await res.json();
      if(result.message==='LOGIN SUCCESS')
      {
        setCurruser(result.user);
        setLoginStatus(true);
        setErr('');
        localStorage.setItem('currentUser', JSON.stringify(result.user)); // Store user in localStorage
        localStorage.setItem('token', result.token); // Store token in localStorage
      }
      else
      {
        setErr(result.message);
        setCurruser({});
        setLoginStatus(false);
        localStorage.removeItem('currentUser'); // Clean up on failure
      }
    } catch (error) {
      setErr('An error occurred. Please try again.');
    }
  }

  function logout() {
    setCurruser({});
    setLoginStatus(false);
    setErr('');
    localStorage.removeItem('currentUser'); // Clear user data
    localStorage.removeItem('token'); // Clear token
  }

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (storedUser) {
      setCurruser(storedUser);
      setLoginStatus(true);
    }
  }, []);


  return (
    <usercontext.Provider value={{ onSubmit, logout, loginStatus, err, curruser, setCurruser }}>
      {children}
    </usercontext.Provider>
  );
}

export default UserLoginStore;
