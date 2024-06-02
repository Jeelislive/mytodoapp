import React from 'react'
import { Link, useLocation } from 'react-router-dom';   

function Navbar() {
    const location = useLocation();

  return (
    <div>
          <nav className="bg-gray-800 py-4">
              <div className="container mx-auto px-4">
                  <div className="flex justify-between items-center">
                      <div className="flex items-center">
                          
                      </div>
                      <div>
                          { location.pathname !== '/todo' && (
                              <Link to="/login" className="text-white mr-4">
                                  Login
                              </Link>
                          ) }

                          { location.pathname !== '/todo' && (
                              <Link to="/signup" className="text-white mr-4">
                                  Signup
                              </Link>
                          ) }   

                          { location.pathname === '/todo' && (
                              <Link to="login" className="text-white mr-4">
                                  Logout
                              </Link>
                          ) }
                      </div>

                  </div>
              </div>
          </nav>
    </div>
  )
}

export default Navbar
