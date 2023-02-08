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
    <div><h5 className="font-normal text-gray-700 dark:text-gray-400">Poke-user: </h5>
      {user?.name}
      <Pokemon />
      <div></div>
    </div>
  );
}

export default Home;
