import React from 'react';

export default function Technologies() {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
            Technologies
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <img
                className="max-h-12"
                src="../js.png"
                alt="JavaScript"
              />
              <span>JavaScript</span>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <img className="max-h-12" src="../react.png" alt="React" />
              <span>React</span>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <img className="max-h-12" src="./next.svg" alt="Next.JS" />
              <span>Next.JS</span>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <img className="max-h-12" src="../nodejs.svg" alt="Node" />
              <span>Node.JS</span>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <img
                className="max-h-12"
                src="../mysql.png"
                alt="MySQL"
              />
              <span>MySQL</span>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <img
                className="max-h-12"
                src="../mongo.png"
                alt="MongoDB"
              />
              <span>MongoDB</span>
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <img
                className="max-h-12"
                src="../tailwind.png"
                alt="Tailwind"
              />
              <span>Tailwind CSS</span>
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <img
                className="max-h-12"
                src="../material.png"
                alt="Material"
              />
              <span>Material UI</span>
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <img
                className="max-h-12"
                src="../adobe.png"
                alt="Adobe"
              />
              <span>Adobe Creative Cloud</span>
            </div>
          </div>
        </div>
      </div>
   
    
     
    )
  }