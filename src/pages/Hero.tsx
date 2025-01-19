import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const onClickScroll = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = () => {
  return (
    <section className="">
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center p-4">
        <div className="max-w-4xl w-full text-center space-y-8">
          <div className="relative">
            <Heart
              className="absolute -top-1 left-12 text-pink-400 animate-bounce"
              size={20}
            />
            <Heart
              className="absolute top-2 right-12 text-red-400 animate-bounce"
              size={20}
            />
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
              }}
              className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 font-sans"
            >
              Elsy,
              <span className="block text-pink-500">
                Have the Happiest 24th Birthday!
              </span>
            </motion.h1>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 space-y-6">
            <p className="text-md text-gray-700 text-balance leading-relaxed max-w-prose text-center mx-auto">
              On your 24th birthday, I want you to know how incredibly special
              you are to me. Every moment we share becomes a treasured memory
              from our silly jokes to our deep conversations, from the quiet
              moments to our biggest adventures. You're not just my girlfriend,
              you're my best friend, my confidante, and my greatest blessing.
              You deserve all the happiness in the world because you bring so
              much happiness to others, especially to me. I hope this year
              brings you countless reasons to smile, achieve your dreams, and
              feel loved beyond measure. May your 24th year be filled with
              beautiful moments, incredible achievements, and all the love and
              joy you deserve. Thank you for being you, for loving me, and for
              making my world so much brighter. I love you so much sayang
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Button
                onClick={() => onClickScroll('our-story')}
                className="bg-pink-50 rounded-xl p-6 transform hover:scale-105 transition-transform text-gray-600 hover:bg-pink-300"
              >
                Our Story
              </Button>

              <Button
                onClick={() => onClickScroll('photo-gallery')}
                className="bg-pink-50 rounded-xl p-6 transform hover:scale-105 transition-transform text-gray-600 hover:bg-pink-300"
              >
                Photo Gallery
              </Button>

              <Button
                onClick={() => onClickScroll('letter')}
                className="bg-pink-50 rounded-xl p-6 transform hover:scale-105 transition-transform text-gray-600 hover:bg-pink-300"
              >
                Love Notes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
