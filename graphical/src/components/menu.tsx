import React, { useState } from "react";

export function Menu(){

  return (

    <div>
       <aside id="separator-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen" aria-label="Sidebar">
       <div className="h-full px-3 py-4 overflow-y-auto bg-slate-900">
          <ul className="space-y-2 font-medium">
             <li>
                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                   <span className="ms-3">Dashboard</span>
                </a>
             </li>
             <li>
                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                   <span className="flex-1 ms-3 whitespace-nowrap">Graphs</span>
                </a>
             </li>
             <li>
                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                   <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                </a>
             </li>
             <li>
                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                   <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                </a>
             </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
             <li>
                <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                   <span className="ms-3">Documentation</span>
                </a>
             </li>
             <li>
                <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                   <span className="ms-3">Help</span>
                </a>
             </li>
          </ul>
       </div>
    </aside> 

    </div>
  )
} 
