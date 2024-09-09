import React from "react";

export function Footer(){
  return (
      <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Graphical</h2>
          <p className="text-sm">© 2024 All rights reserved.</p>
        </div>
        <div className="mb-4 md:mb-0">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-gray-400">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Contact</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="flex space-x-6">
        </div>
      </div>
    </footer>
  )

}
