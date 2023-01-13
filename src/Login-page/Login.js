import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import FaceBook from './img/facebook.svg';
import Google from './img/google.svg';
import GithubIcon from './img/github.svg';

function Login() {
  return (
    <div>
      <Container fixed>
        <Box sx={{ height: '100vh' }} >
          <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 rounded-2xl shadow-2xl border ">
              <div className='p-10'>
                <h2 className="py-5 text-center text-3xl font-extrabold text-gray-900">
                  Sign in to your account
                </h2>
                <div className=' flex flex-wrap flex-row gap-3'>
                  <TextField label="Email id " placeholder='Enter Email id' variant="standard" fullWidth required />
                  <TextField label="Password" placeholder='Enter Password' variant="standard" fullWidth required />
                </div>

                <div class="flex items-center justify-between mt-5">
                  <label className="flex  cursor-pointer items-center p-2 border border-blue-800 rounded-lg ">
                    <div className="border-2  h-6 w-6 relative border-blue-800 rounded-md">
                      <input class=" appearance-none absolute right-1 bottom-1 h-3 w-3  border-white rounded-sm bg-white checked:bg-blue-800 checked:border-gray-400  bg-no-repeat cursor-pointer" type="checkbox" />
                    </div>
                    <label class="form-check-label  text-sm inline-block text-indigo-600 ml-2" for="flexCheckDefault">
                     Custome Checkbox.
                    </label>
                  </label>
                  <div class="text-sm"><a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                  </div>
                </div>

                <div className='pt-5'>
                  <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600">
                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockIcon />
                    </span>Login
                  </button>
                </div>

                <div class="text-sm text-center mt-5">
                  Don't have an account?
                  <a class=" font text-indigo-600 text-center">
                    SignUp account
                  </a>
                </div>

                <div className='py-7 relative'>
                  <hr className=' absolute w-full top-1/2 transform -translate-y-1/2 bg-black'>
                  </hr>
                  <p className=' uppercase font-semibold text-indigo-600 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-gray-50 px-2 text-xs '>
                    or login with
                  </p>
                </div>
                <div className='flex flex-wrap justify-center items-center gap-5'>
                  <img src={FaceBook} />
                  <img src={Google} />
                  <img src={GithubIcon} />
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Container >
    </div >
  )
}

export default Login;

