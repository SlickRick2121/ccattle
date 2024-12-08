import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif">About Us</h2>
            <p className="text-gray-700 leading-relaxed">
              Approximately 3 hours West of Dallas, TX. On October 8th 1939,
              Bessie Sharrock married Clyde Caldwell in Sweetwater, TX.
              Throughout both the Sharrock and Caldwell family's there has
              always been a long lineage of Farmer's and Rancher's.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Caldwell Land + Cattle Co. strives for greatness in their product.
              Our mission is to overcome and be a change to the national issue
              of processed and genetically modified beef.
            </p>
          </div>
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1516467508483-a7212febe31a"
              alt="Texas landscape"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;