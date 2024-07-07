// components/calander.js

import React from 'react';

const calander = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <img src="/images/calender.png" alt="Signup" className="w-full h-auto" />
        </div>
        <div className="lg:w-1/2 lg:pl-15 ml-20 mr-15">
          <h2 className="text-4xl font-semibold text-gray-700 tracking-wide mb-4 ">
            How to design your site footer like we did
          </h2>
          <p className="text-gray-600 mb-6 ">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default calander;
