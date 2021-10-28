import React from 'react';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

export default function Contact() {
  return (
      
    <div className="bg-white" id="Contact">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Call Or Text</h2>
            <div className="mt-3">
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                <a href="tel:1-615-430-3114">
                  <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </a>
                </div>
                <div className="ml-3 text-base text-gray-500">
                    <a href="tel:1-615-430-3114">
                  <p>+1 (615) 430 3114</p>
                  </a>
                  <p className="mt-1">Mon-Fri 8am to 5pm CST</p>
                </div>
              </div>
              <div className="mt-6 flex">
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Email Me</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                </div>
                <div className="ml-3 text-base< text-gray-500">
                
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                <a href="mailto:zpuckettdesign@gmail.com" target="_blank" rel="noreferrer">
                  <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </a>
                </div>
                <div className="ml-3 text-base text-gray-500" >
                    <a href="mailto:zpuckettdesign@gmail.com" target="_blank" rel="noreferrer">
                  <p>zpuckettdesign@gmail.com.com</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}