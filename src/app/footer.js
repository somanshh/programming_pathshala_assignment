import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* CTA Section */}
      <div className="bg-white py-16 text-center">
        <h2 className="text-5xl font-semibold text-gray-700 mb-4">
          Pellentesque suscipit
          <br />
          fringilla libero eu.
        </h2>
        <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">
          Get a Demo →
        </Button>
      </div>

      {/* Footer Content */}
      <div className="bg-gray-800 text-white py-16 ">
        <div className="max-w-6xl mx-auto ml-32 flex flex-wrap justify-between">
          {/* Logo and Copyright */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="flex items-center mr-2 mb-12">
              <svg className="w-10 h-10 text-green-500" viewBox="0 0 24 24">
                <image
                  href="/icon.png"
                  x="0"
                  y="0"
                  height="24"
                  width="24"
                  color="white"
                />
              </svg>
              <span className="ml-2 text-4xl font-semibold">Nexcent</span>
            </div>
            <p className="text-sm mt-4">Copyright © 2020 Nexcent ltd.</p>
            <p className="text-sm">All rights reserved</p>
            <div className="flex space-x-4 mt-4">
              {["instagram", "dribbble", "twitter", "youtube"].map((social) => (
                <Link
                  key={social}
                  href={`https://${social}.com`}
                  className="text-gray-400 hover:text-white"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-6 h-6 bg-gray-600 rounded-full">
                    <img
                      src={`images/footer/${social}.png`}
                      alt={social}
                      className={`${social == 'twitter' || 'youtube' ? 'p-1 pt-1.5' : 'p'}`} 
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/5 ml-28 mb-8 md:mb-0">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                "About us",
                "Blog",
                "Contact us",
                "Pricing",
                "Testimonials",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-gray-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {[
                "Help center",
                "Terms of service",
                "Legal",
                "Privacy policy",
                "Status",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-gray-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h3 className="font-semibold mb-4">Stay up to date</h3>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-700 text-white rounded-l-md flex-grow"
              />
              <image
                href="/Images/icon.png"
                x="0"
                y="0"
                height="40"
                width="24"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
