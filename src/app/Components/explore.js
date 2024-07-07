import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExplorePage = () => {
  return (
    <section className="bg-white py-20">
      <Card className="flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/2">
          <img
            src="/images/mobile.png"
            alt="Pixelgrade experience illustration"
            className="max-w-md min-h-80 py-20 ml-24 object-cover"
          />
        </div>
        <CardContent className="py-32 pr-72 md:w-2/3">
          <CardHeader className="p-0 mb-4 ">
            <CardTitle className="text-4xl tracking-normal font-semibold text-gray-700">
              The unseen of spending three years at Pixelgrade
            </CardTitle>
          </CardHeader>
          <p className="text-gray-600 text-sm mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <Button className="bg-green-500 hover:bg-green-600">
            Learn More
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default ExplorePage;
