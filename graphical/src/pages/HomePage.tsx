import React from "React";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
    Home
    <Link to='/login' className="font-semibold text-indigo-600 hover:text-indigo-500">Get Started</Link>
    </div>
  )
}

export default HomePage
