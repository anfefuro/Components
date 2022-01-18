import React from 'react'
import { Link } from "react-router-dom";
import { useAuth } from "react-use-auth";
import Header from '../Components/Header'

export default function HomePage() {


  return (  
    <div>
      <Header />
      <div className="text-white text-xl3"> HOMEPAGE 
      </div>
    </div>
  )
}
