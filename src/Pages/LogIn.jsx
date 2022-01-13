import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function LogIn() {

  let navigate = useNavigate();

  const { register, watch } = useForm ();

  const user = watch("user");
  const password = watch("password");
  const remember = watch("remember");

    return (
        <div className="container mx-auto w-1/3 border mb-5 rounded bg-white min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-28">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h1 className="mt-6 text-center text-2xl text-gray-900">
                Iniciar sesión
              </h1>
            </div>
          <div className="mt-8 space-y-6 " action="#" method="POST">
          <input type="hidden" name="remember" value="true"/>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="px-1 text-sm text-gray-400">Correo Electrónico</label>
              <input {...register("user")} id="email-address" name="email" type="email" autocomplete="email" required className="mb-5 bg-white rounded relative block w-full px-3 py-3 rounded-b-md border-2 border-blue-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-blue-600 focus:outline-none"/>
            </div>
            <div className="mt-5">
              <label for="password" class="px-1 text-sm text-gray-400">Contraseña</label>
              <input {...register("password")} id="password" name="password" type="password" autocomplete="current-password" required className="bg-white rounded relative block w-full px-3 py-3 rounded-b-md border-2 border-blue-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-blue-600 focus:outline-none"/>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input {...register("remember")} id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-200 focus:ring-indigo-200 border-gray-200 rounded"/>
              <label for="remember-me" class="font-bold ml-2 block text-sm text-gray-500">
                Recuerdame
              </label>
            </div>
            
            <div class="text-sm">
              <div onClick={() => {navigate('/forgotpass');}} class="font-bold font-medium text-blue-700 hover:text-blue-500">
                ¿Olvidó su contraseña?
              </div>
            </div>
          </div>
    
          <div clasName='mt-10'>
            <button onClick={() => {navigate('/');}} type="submit" class="mt-20 font-bold group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              </span>
              Ingresar
            </button>
          </div>
        </div>
      </div>
    </div>
    );
}
