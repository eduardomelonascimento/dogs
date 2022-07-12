import React from 'react'
import Loading from './Loading'

export default function LoadingOverlay() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-opacity-50 bg-black z-50 flex items-center justify-center">
      <Loading height={"100px"} width="100px"/>
    </div>
  )
}

