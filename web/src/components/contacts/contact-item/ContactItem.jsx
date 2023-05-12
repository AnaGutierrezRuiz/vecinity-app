import React from 'react';

function ContactItem({ contact, communityId }) {

  return (

    <>
      <section className="bg-white dark:bg-gray-800">
        <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto">
          <div className="w-full bg-gray-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-700">
            <div className="p-6 space-y-2 md:space-y-2 sm:p-8">
              <h1 className="text-xl font-bold text-orange leading-tight text-center tracking-tight md:text-2xl dark:text-white">
                {contact.name}
              </h1>
              <ul>
                <li className='font-bold text-green mb-1'>{contact.description}</li>
                <li className="flex flex-row">
                  <div className="mt-1 me-3">
                    <svg width="15px" height="15px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#809d7b"><path d="M18.118 14.702L14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047.42 2.783 1.66 7.83 5.283 11.453 3.805 3.805 9.286 5.456 12.302 6.113 1.165.253 2.198-.655 2.198-1.848v-3.584l-3.882-1.479z" stroke="#809d7b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </div>
                  <div>{contact.phoneNumber}</div>
                </li>
                <li className="flex flex-row">
                  <div className="mt-1 me-3">
                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#809d7b"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#809d7b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#809d7b" stroke-width="2" stroke-linecap="round"></rect> </g></svg>
                  </div>
                  <div>{contact.email}</div>
                </li>
                <li className="flex flex-row">
                  <div className="mt-1 me-3">
                    <svg fill="#809d7b" width="15px" height="15px" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" className="cf-icon-svg" stroke="#809d7b"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.417 9.57a7.917 7.917 0 1 1-8.144-7.908 1.758 1.758 0 0 1 .451 0 7.913 7.913 0 0 1 7.693 7.907zM5.85 15.838q.254.107.515.193a11.772 11.772 0 0 1-1.572-5.92h-3.08a6.816 6.816 0 0 0 4.137 5.727zM2.226 6.922a6.727 6.727 0 0 0-.511 2.082h3.078a11.83 11.83 0 0 1 1.55-5.89q-.249.083-.493.186a6.834 6.834 0 0 0-3.624 3.622zm8.87 2.082a14.405 14.405 0 0 0-.261-2.31 9.847 9.847 0 0 0-.713-2.26c-.447-.952-1.009-1.573-1.497-1.667a8.468 8.468 0 0 0-.253 0c-.488.094-1.05.715-1.497 1.668a9.847 9.847 0 0 0-.712 2.26 14.404 14.404 0 0 0-.261 2.309zm-.974 5.676a9.844 9.844 0 0 0 .713-2.26 14.413 14.413 0 0 0 .26-2.309H5.903a14.412 14.412 0 0 0 .261 2.31 9.844 9.844 0 0 0 .712 2.259c.487 1.036 1.109 1.68 1.624 1.68s1.137-.644 1.623-1.68zm4.652-2.462a6.737 6.737 0 0 0 .513-2.107h-3.082a11.77 11.77 0 0 1-1.572 5.922q.261-.086.517-.194a6.834 6.834 0 0 0 3.624-3.621zM11.15 3.3a6.82 6.82 0 0 0-.496-.187 11.828 11.828 0 0 1 1.55 5.89h3.081A6.815 6.815 0 0 0 11.15 3.3z"></path></g></svg>
                  </div>
                  <div>{contact.contactUrl}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );

}



export default ContactItem;