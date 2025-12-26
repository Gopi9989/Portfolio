import React from 'react';
import { FadeInView } from '../components/FadeInView';

function About() {
  return (
    <section className="py-20">
      <FadeInView>
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
              alt="Profile"
              className="rounded-lg shadow-xl w-full"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your about text here...
            </p>
          </div>
        </div>
      </FadeInView>
    </section>
  );
}

export default About;