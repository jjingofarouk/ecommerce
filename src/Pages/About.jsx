import React from 'react';
import Title from '../Components/Title';
import NewsLetterBox from '../Components/NewsLetterBox';

const teamMembers = [
  {
    name: 'Farouq',
    role: 'Founder & Visionary',
    image: 'farouq.jpg',
    description: {
      summary: 'Frank founded our store with a passionate vision to transform the Ugandan footwear landscape.',
      details: [
        'With deep roots in local entrepreneurship and a keen understanding of community needs, Frank has created more than a shoe store - he\'s built a platform for local economic empowerment.',
        'His leadership philosophy centers on creating opportunities, celebrating local craftsmanship, and delivering exceptional value to every customer who walks through our doors.'
      ]
    }
  },
  {
    name: 'Suma',
    role: 'Community Connector',
    image: 'suma.png',
    description: {
      summary: 'Suma bridges our brand with the vibrant communities we serve, ensuring every customer feels valued and understood.',
      details: [
        'Her innovative approach to customer relationships goes beyond traditional sales, focusing on creating meaningful connections that reflect the spirit of Ugandan hospitality.',
        'Through strategic community engagement and heartfelt customer interactions, Suma helps transform Frank Shoe World from a store into a beloved local institution.'
      ]
    }
  },
  {
    name: 'Simon',
    role: 'Quality Guardian',
    image: 'simon.jpg',
    description: {
      summary: 'Simon ensures that every pair of shoes meets our rigorous standards of quality, comfort, and durability.',
      details: [
        'With a meticulous eye for detail and years of experience in footwear manufacturing, Simon is the backbone of our product excellence. He personally oversees every stage of shoe production.',
        'His commitment to quality goes beyond technical specifications - he understands that each shoe represents a journey, a story, and a promise of comfort to our customers.'
      ]
    }
  }
];

const testimonials = [
  {
    quote: '"Frank Shoe World understands the Ugandan spirit - resilient, stylish, and always moving forward. Their shoes are a testament to local craftsmanship!"',
    name: 'Daniel',
    role: 'Kampala Professional',
    image: 'daniel.jpg'
  },
  {
    quote: '"From rural markets to urban centers, Frank Shoe World represents the diversity and energy of Uganda. Their shoes tell our national story!"',
    name: 'Leticia',
    role: 'Fashion Entrepreneur',
    image: 'leticia.jpg'
  },
  {
    quote: '"Affordable, durable, and stylish - Frank Shoe World proves that quality isn\'t a luxury, it\'s a right for every Ugandan."',
    name: 'Ibra',
    role: 'University Student',
    image: 'ibra.jpg'
  },
  {
    quote: '"These aren\'t just shoes. They\'re a bridge connecting local artisans with modern fashion. Proudly Ugandan, genuinely global!"',
    name: 'Flower',
    role: 'Cultural Advocate',
    image: 'flower.jpg'
  }
];

const About = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Story Introduction */}
      <div className="text-center my-12">
        <Title text1={'Our'} text2={'Ugandan Shoe Journey'} />
        <p className="max-w-2xl mx-auto text-gray-600 mt-4">
          At Frank Shoe World, we're not just selling shoes. We're crafting stories, empowering communities, and walking alongside every customer's unique path.
        </p>
      </div>

      {/* Team Section */}
      <section className="my-16">
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h5 className="text-lg font-bold">{member.name}</h5>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="my-16 bg-gray-50 p-10 rounded-lg">
        <h2 className="text-center text-2xl mb-8">
          Our <span className="text-primary">Community's</span> Voice
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md flex flex-col"
            >
              <p className="flex-grow italic text-gray-600 mb-4">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h6 className="font-bold">{testimonial.name}</h6>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <NewsLetterBox />
    </div>
  );
};

export default About;