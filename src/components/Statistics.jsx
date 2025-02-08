import statisticsBackground from "../assets/images/home_page/statistics/statistics_bg.webp";
import CountUp from 'react-countup';
import React, { useEffect, useState, useRef } from 'react';

const statisticsDetails = [
  {
    description: "Years of hard work",
    quantity: 37,
  },
  {
    description: "Happy customer",
    quantity: 500000,
  },
  {
    description: "Qualified team member",
    quantity: 28,
  },
  {
    description: "Monthly orders",
    quantity: 750000,
  },
];

const Statistics = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative my-12">
      <img
        src={statisticsBackground}
        alt="Statistics Background"
        className="hidden lg:block"
      />
      <div className="container grid grid-cols-2 gap-6 lg:absolute lg:grid-cols-4 md:left-6 md:top-6 xl:left-12 2xl:left-40 lg:left-10 lg:top-8 xl:top-12 2xl:top-10">
        {statisticsDetails.map((item, i) => (
          <div
            key={i}
            className="relative flex flex-col items-center p-6 border-2 border-green-700 rounded shadow-lg lg:shadow-none shadow-primary-100 lg:border-none lg:bg-transparent xl:p-10 2xl:p-20 lg:before:absolute before:left-0 before:top-0 before:rounded before:bg-green-50 before:w-full before:h-full before:opacity-5"
          >
            <span className="text-xl lg:text-4xl text-primary-500 w-fit">
              {startCount && <CountUp start={0} end={item.quantity} duration={2} separator="," />}
            </span>
            <h3 className="mt-2 text-base text-center capitalize lg:text-white w-fit">
              {item.description}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;