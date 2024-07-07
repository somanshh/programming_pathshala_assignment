import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const ClientLogo = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300 pr-8"
  />
);

const CustomerCard = () => {
  return (
    <Card className="max-w max-h-fit -mx-auto pt-4 bg-gray-100 ">
      <div className="flex">
        <div className="w-1/3 pl-44">
          <Image
            src="/images/tesla.png"
            alt="Tesla logo"
            width={326}
            height={336}
            className="rounded-lg"
          />
        </div>
        <div className="w-1/2 ml-20">
          <p className="text-gray-600 my-4 text-sm leading-relaxed">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <div className="mt-4 ">
            <p className="font-semibold mb-4 text-green-600">Tim Smith</p>
            <p className="text-sm text-gray-500">
              British Dragon Boat Racing Association
            </p>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex justify-between items-center mb-16">
              {[
                "/Images/clients/Logo1.png",
                "/Images/clients/Logo2.png",
                "/Images/clients/Logo3.png",
                "/Images/clients/Logo4.png",
                "/Images/clients/Logo5.png",
                "/Images/clients/Logo6.png",
                "/Images/clients/Logo7.png",
              ].map((logo, index) => (
                <ClientLogo
                  key={index}
                  src={logo}
                  alt={`Client ${index + 1}`}
                />
              ))}
            <Link
              href="/customers"
              className="text-green-600 hover:text-green-700 flex items-center"
            >
              <p className="text-xl font-semibold pl-4">
                Meet all customers
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                  />
              </svg>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CustomerCard;
