import React, {useState, useEffect} from 'react';
import axiosClient from '../../src//services/axiosInstance'
import {Link} from 'react-router-dom';
import {Tip} from "../types/tip";

const LoginPage = () => {
  const [eyeball, setEyeBall] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password:""
  });
  const [tip, setTip] = useState<Tip | null>(null);

  useEffect(() => {
    fetchTip();
  }, [])


  async function fetchTip(){
    try {
    const client = axiosClient();
    const response = await client.get<Tip>("/tips/random");
    console.log(response)
    setTip(response.data);
    } catch (error) {
      console.error(`Failed to fetch tip: ${error}`);
    }
  };

  function handleEyeBall(){
    setEyeBall(!eyeball);
  }

  function handleChange(e:React.SyntheticEvent){
    var target = e.target as HTMLInputElement
    const {name, value} = target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleLoginSubmit(){
    console.log("Login", formData);
  }

  return (
    <div className=''>
      <div className="grid grid-cols-3 font-sans p-4">
        <div className="col-span-2 flex justify-center items-center w-full rounded bg-indigo-700">
          <div className='w-56 glex-flex-col'>
          {tip != null && (
            <p>{tip.body}</p>
          )}
          </div>
        </div>
        <form onSubmit={handleLoginSubmit} className="ml-2 col-span-1 p-6 rounded border">
          <div className="flex flex-wrap mb-5">
            <h1 className="flex-auto font-medium text-slate-200">Login</h1>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email' className="block text-sm font-medium leading-6 text-gray-500">Email:</label>
            <div className='mt-2'>
              <input type="text" id="email" required onChange={handleChange} className='w-full rounded-md border-0 py-1.5 shadow-sm'></input>
            </div>
          </div>
          <div>
            <label htmlFor='password' className="block text-sm font-medium leading-6 text-gray-500">Password:</label>
            <div className='relative mt-2'>
              <input type={eyeball ? 'text' : 'password'} id="password" required onChange={handleChange} className='block w-full rounded-md border-0 py-1.5 shadow-sm'></input>
              <button type="button" id="eyeball" onClick={handleEyeBall} className="absolute inset-y-0 end-0 z-20 px-3 cursor-pointer text-gray-600 rounded-e-md bg-transparent">
                {eyeball ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className='flex justify-between'>
            <Link to="/" className='text-sm'>Forgot Password?</Link>
            <button type="submit" className="justify-self-end mt-6 bg-indigo-700 hover:bg-indigo-300 text-white font-bold px-1 py-1 rounded">
                Submit
            </button>
          </div>
        </form>
      </div>
    </div>

  )
};

export default LoginPage;
