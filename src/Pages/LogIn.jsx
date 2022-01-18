import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useUser from '../Hooks/useUser';
import { useForm } from 'react-hook-form';

export default function LogIn() {

  //validaciones corre y pass--github


  const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {isLoginLoading, hasLoginError, login, isLogged} = useUser()

  useEffect(() => {
    if (isLogged) navigate('/')
  }, [isLogged])

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password })
  };

  const { register, watch} = useForm();

  const user = watch("user");
  const pass = watch("pass");

    return (
      <>
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading &&
        <form onSubmit={handleSubmit} className="container mx-auto w-1/3 border mb-5 rounded bg-white min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-28">
          <div className="max-w-md w-full space-y-8">
              <div>
                <h1 className="mt-6 text-center text-2xl text-gray-900">
                  Iniciar sesión
                </h1>
              </div>
            <div>
            <div className="mt-10 mb-5 rounded-md shadow-sm -space-y-px">
              <div>
                <label class="px-1 text-sm text-gray-400">Correo Electrónico</label>
                <input {...register('user')} onkeyUp={(e) => setUsername(e.target.value)} type="email" autocomplete="email" required className="bg-white rounded relative block w-full px-3 py-3 rounded-b-md border-2 border-blue-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-blue-600 focus:outline-none"/>
                <p className="text-red-500 text-xs italic">{!user ? "Complete este campo" : ""}</p>
              </div>
              <div className="mt-5">
                <label class="px-1 text-sm text-gray-400">Contraseña</label>
                <input {...register('pass')} onKeyUp={(e) => setPassword(e.target.value)} type="password" autocomplete="current-password" required className="bg-white rounded relative block w-full px-3 py-3 rounded-b-md border-2 border-blue-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-blue-600 focus:outline-none"/>
                <p className="text-red-500 text-xs italic">{!pass ? "Complete este campo" : ""}</p>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-200 focus:ring-indigo-200 border-gray-200 rounded"/>
                <label for="remember-me" class="font-bold ml-2 block text-sm text-gray-500">
                  Recuerdame
                </label>
              </div>
              
              <div class="text-sm">
                <div class="font-bold font-medium text-blue-700 hover:text-blue-500">
                  ¿Olvidó su contraseña?
                </div>
              </div>
            </div>
      
            <div clasName='mt-10'>
              <button class="mt-20 font-bold group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                </span>
                Ingresar
              </button>
            </div>
          </div>
          </div>
        </form>
      }
      {hasLoginError && <strong>Credentials are invalid</strong>}
      </>
    );
}
