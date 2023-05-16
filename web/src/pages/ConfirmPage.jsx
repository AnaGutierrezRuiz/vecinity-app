import React from 'react';
import { Link } from 'react-router-dom';

function ConfirmPage() {

  return (
    <>
      <div className="bg-white border-b py-8">
        <div className="max-w-5xl mx-auto m-8">
          <h3 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 mb-12">
          Congrats!
          <br></br>
            Your account was created successfully ✨
          </h3>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-wrap justify-center align-center">
            <div className="w-5/6 sm:w-1/2 p-6 flex flex-col items-center justify-center">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                One last step to go:
              </h3>
              <p className="text-gray-600 mb-8">
                Please confirm your account by clicking on the link we just sent you to your email. Once you've done that, go ahead and log in!
                <br />
                <br />
              </p>
              <Link
                to="/login"
                className="mx-auto lg:mx-0 hover:underline bg-orange text-gray-800 font-bold rounded-full -mt-6 mb-0 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                Log in
              </Link>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <img src="/images/confirm.png" alt="neighbours" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmPage;
