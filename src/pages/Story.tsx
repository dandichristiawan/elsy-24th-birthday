import beginningImage from '../images/beginning.jpeg';
import firstDateImage from '../images/first-date.jpeg';
import officialCoupleImage from '../images/couple.jpeg';
import bandungImage from '../images/bandung.jpeg';
import { motion } from 'motion/react';
const Story = () => {
  return (
    <section
      className="bg-gradient-to-b from-white to-pink-50 rounded-xl p-6"
      id="our-story"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Our Story
      </h3>

      <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
        {[
          {
            image: beginningImage,
            alt: 'The Beginning',
            title: 'The Beginning',
            date: 'December 24th, 2023',
            description:
              'First time we met and started talking on the phone. I was just cold, but deep down, i knew we were going to be something special. It was a conversation that felt like we had known each other forever.',
          },
          {
            image: firstDateImage,
            alt: 'First Date',
            title: 'First Date',
            date: 'January 7th, 2024',
            description:
              "Our memorable first date at Mie Aceh Jakarta, where you introduced me to one of your favorite places. We laughed, shared stories, and discovered how much we enjoyed each other's company. It was the start of countless beautiful memories.",
          },
          {
            image: officialCoupleImage,
            alt: 'Official Couple',
            title: 'Official Couple',
            date: 'March 30th, 2024',
            description:
              'The day I decided to say how much I love you. It was a moment filled with joy and nervous excitement, but the happiness I felt knowing we were now officially together was unparalleled.',
          },
          {
            image: bandungImage,
            alt: 'Memorable Moments',
            title: 'Memorable Moments',
            date: 'June 1st, 2024',
            description:
              'Our first trip together to Bandung has been one of my favorite moments. We explored new places, enjoyed delicious food, and deepened our bond, creating memories that we will cherish forever.',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-start border-l-4 border-pink-300 pl-4 md:pl-8"
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: 'easeOut',
            }}
          >
            <motion.img
              src={item.image}
              alt={item.alt}
              className="w-full md:w-48 h-auto rounded-md mb-4 md:mb-0 md:mr-6"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            />
            <div>
              <p className="text-lg text-gray-600 font-semibold">
                {item.title}
              </p>
              <p className="text-sm text-gray-500">{item.date}</p>
              <p className="text-gray-700 mt-2 text-wrap">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Story;
