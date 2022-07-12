import React, { useContext } from 'react'
import LoadingOverlay from '../Components/loading/LoadingOverlay';
import { UserContext } from '../contexts/UserContext'

function Home() {
  const userContext = useContext(UserContext);
  
  if (userContext.loading) return <LoadingOverlay/>
  return (
    <div>Home</div>
  )
}

export default Home