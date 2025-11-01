'use client';
import { FaRupeeSign, FaUniversalAccess, FaCheckCircle, FaBullhorn } from 'react-icons/fa';

export default function About() {
  const pillars = [
    {
      icon: <FaRupeeSign className="text-[#8b1ed0] text-4xl" />,
      title: 'Affordability',
      description:
        "We get it—healthcare can feel expensive, but it doesn’t have to be. At Redcliffe Labs, we’ve made it our mission to keep high-quality tests affordable so that everyone can take care of their health without worrying about the cost.",
    },
    {
      icon: <FaUniversalAccess className="text-[#8b1ed0] text-4xl" />,
      title: 'Accessibility',
      description:
        "Life is hectic, and sometimes health takes a backseat. That’s why we’ve made it simple—if you can’t come to us, we’ll come to you. With our doorstep sample collection, you can take care of your health without stepping out of your comfort zone.",
    },
    {
      icon: <FaCheckCircle className="text-[#8b1ed0] text-4xl" />,
      title: 'Accuracy',
      description:
        "For us, every sample is personal. Behind each one is a life, a story, a family. That’s why we go all out to ensure 99.99% accuracy in every test. Because when it’s about your health, there’s no room for “almost right.”",
    },
    {
      icon: <FaBullhorn className="text-[#8b1ed0] text-4xl" />,
      title: 'Awareness',
      description:
        "We’ve noticed something—most people don’t ignore their health because they don’t care; they just don’t realise the risks. So, we’re doing our bit to change that. Whether it’s through social media or on-ground campaigns, we’re spreading the word.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-4">
        How do we plan to achieve our purpose?
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
        We stand firmly on four strong pillars to achieve our goal: <strong>Awareness, Affordability, Accessibility, and Accuracy</strong>. Every decision we make—be it in our labs, customer support, or with our collection teams—is guided by the 4As. If it doesn’t align with these principles, we don’t do it. It’s that simple.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {pillars.map((pillar, idx) => (
          <div key={idx} className="bg-[#edf7f7] rounded-xl p-6 shadow hover:shadow-lg transition duration-300">
            <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 shadow-inner">
              {pillar.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
            <p className="text-gray-600 text-sm">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
