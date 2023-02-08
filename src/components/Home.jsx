import React, { useEffect } from 'react';
import useAuthContext from "../context/AuthContext";
import Pokemon from './Pokemon';

const Home = () => {
  const { user, getUser } = useAuthContext();

  useEffect(() => {
    if (!user){
      getUser();
    }
  }, [])
  
  return (
    <div>
     {user ? <><h5 className="font-normal text-gray-700 dark:text-gray-400">Poke-user: {user?.name}</h5> <Pokemon /></> : user?.name}
      {user?.name}
      
      <div></div>
    </div>
  );
}

export default Home;
