import React from 'react';

const AchievementsSection = () => {
  const metrics = [
    { icon: "👥", value: "2,245,341", label: "Members" },
    { icon: "🚲", value: "46,328", label: "Clubs" },
    { icon: "🎉", value: "828,867", label: "Event Bookings" },
    { icon: "💳", value: "1,926,436", label: "Payments" }
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="lg:w-1/3 mt-6 ml-6 lg:mb-0 font-semibold tracking-normal ">
            <h2 className="text-4xl text-gray-700 mb-2 leading-tight">
              Helping a local<br />
              <span className="text-green-500">business reinvent itself</span>
            </h2>
            <p className="text-gray-600">We reached here with our hard work and dedication</p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-y-8 ">
            {metrics.map((metric, index) => (
                <div>
                    <div className="flex items-center mb-1">
                      <div className="text-green-500 text-5xl mr-2">{metric.icon}</div>
                      <div key={index} className="flex flex-col">
                          <span className="text-3xl font-bold">{metric.value}</span>
                          <span className="text-gray-500 text-sm">{metric.label}</span>
                      </div>
                    </div>  
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;