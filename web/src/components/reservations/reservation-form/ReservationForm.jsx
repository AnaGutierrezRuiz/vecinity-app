import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import reservationsService from '../../../services/reservations';
import { useParams } from 'react-router-dom';

function ReservationForm({ onReservationCreated }) {

  const { handleSubmit, setError, formState: { errors } } = useForm({ mode: 'onBlur' });
  const [serverError, setServerError] = useState();
  const [processing, setProcessing] = useState(false);

  const [facilitySelected, setFacilitySelected] = useState("Paddle court");
  const [dateSelected, setDateSelected] = useState();

  const { id } = useParams();

  const handleFacilityChange = (event) => {
    setFacilitySelected(event.target.value);
  };

  const handleDateChange = (event) => {
    setDateSelected(event.target.value);
  };

  const onReservationSubmit = (event) => {
    event.preventDefault();
    setServerError();
    const reservation = { facility: facilitySelected, date: dateSelected };
    reservationsService.create(id, reservation)
      .then(reservation => {
        onReservationCreated();
        console.info(reservation);
        setProcessing(!processing);
      })
      .catch(error => {
        const errors = error.response?.data?.errors;
        if (errors) {
          Object.keys(errors)
            .forEach((inputName) => setError(inputName, { message: errors[inputName] }));
        } else {
          setServerError(error.message);
        }
      });
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-800 mb-6">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto ">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-green md:text-2xl dark:text-white">
                Make a reservation
              </h1>
              <form onSubmit={handleSubmit(onReservationSubmit)} className="space-y-4 md:space-y-6" action="#">
                {serverError &&
                  <div
                    className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                    role="alert">
                    <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"></path>
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                      <span className="font-medium">{serverError}</span>
                    </div>
                  </div>
                }

                {/* Select a facility */}
                <div>
                  <label htmlFor="facility" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a facility</label>
                  <select value={facilitySelected} onChange={handleFacilityChange} id="facility" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="Paddle court">Paddle court</option>
                    <option value="Multipurpose room">Multipurpose room</option>
                    <option value="Gym">Gym</option>
                  </select>
                </div>

                {/* Select a date */}

                <div>
                  <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a date</label>
                  <div className="relative">
                    <input onChange={handleDateChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                        focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-10 p-2.5" id="date"
                      type="date" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="relative w-full text-white bg-orange hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={onReservationSubmit}
                >
                 Submit reservation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

ReservationForm.defaultProps = {
  onReservationCreated: () => { }
};

export default ReservationForm;