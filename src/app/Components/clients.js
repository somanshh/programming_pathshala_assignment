"use client"
import react from "react";

const ClientLogo = ({ src, alt }) => (
    <img src={src} alt={alt} className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
  );
   
  const FeatureCard = ({ icon, title, description }) => (
    <div className="flex flex-col items-center text-center shadow-sm border-spacing-0 p-4 max-w-72 min-h-52">
      <div className="bg-green-100 p-4 rounded-full mb-4">
        <img src={icon} alt="" className="w-8 h-8" />
      </div>
      <h3 className="text-3xl tracking-normal	font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
  
  const ClientSection = () => (
    <section className="">
      <div className="max-w-6xl mx-auto py-8">
        <h2 className="text-4xl tracking-normal	font-semibold text-gray-700  text-center mb-2">Our Clients</h2>
        <p className="text-center text-gray-600 mb-8">We have been working with some Fortune 500+ clients</p>
        
        <div className="flex justify-between items-center mb-16">
          {['logo1.svg', 'logo2.svg', 'logo3.svg', 'logo4.svg', 'logo5.svg', 'logo6.svg', 'logo7.svg'].map((logo, index) => (
            <ClientLogo key={index} src={logo} alt={`Client ${index + 1}`} />
          ))}
        </div>
  
        <div className="text-center mb-12">
          <h2 className="text-4xl tracking-normal	font-semibold text-gray-700  mb-2">Manage your entire community</h2>
          <h2 className="text-4xl tracking-normal	font-semibold text-gray-700  mb-4">in a single system</h2>
          <p className="text-gray-600">Who is Nextcent suitable for?</p>
        </div>
  
        <div className="flex justify-between ">
          <FeatureCard className="border-opacity-85 shadow"
            icon="/icon-membership.svg"
            title="Membership Organisations"
            description="Our membership management software provides full automation of membership renewals and payments"
          />
          <FeatureCard
            icon="/icon-associations.svg"
            title="National Associations"
            description="Our membership management software provides full automation of membership renewals and payments"
          />
          <FeatureCard
            icon="/icon-clubs.svg"
            title="Clubs And Groups"
            description="Our membership management software provides full automation of membership renewals and payments"
          />
        </div>
      </div>
    </section>
  );
  
  export default ClientSection;