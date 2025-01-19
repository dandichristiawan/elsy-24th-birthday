import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Letter = () => {
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gradient-to-b from-white to-pink-50 p-6" id="letter">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-gradient-to-b from-white to-pink-50 max-w-2xl mx-auto my-8 border-none shadow-none hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6 space-y-6">
            <motion.div
              className="text-center space-y-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                <Heart className="text-pink-500 w-8 h-8 mx-auto" />
              </motion.div>

              <motion.h2
                className="text-2xl font-bold text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                My Dearest Elsy,
              </motion.h2>
            </motion.div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              {[
                'Happy 24th Birthday! I know this simple website might not seem like much of a birthday present, and honestly, you deserve so much more. But I wanted to create something that could capture our memories and feelings in a different way.',
                "Looking through these photos reminds me of all the beautiful moments we've shared - from silly selfies to meaningful milestones. Each picture tells a story of us growing together, learning about each other, and building something special.",
                "I wish I could give you the world, but for now, I hope this small digital memory book can make you smile. It's not just about the photos or the website - it's about all the love, laughter, and moments we've shared that made these memories so precious.",
                "Thank you for being you, for bringing so much joy into my life, and for understanding that sometimes the best gifts aren't the most expensive ones, but the ones that come from the heart. I promise to keep adding more memories to our collection and to make each day feel special, not just birthdays.",
              ].map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={paragraphVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                >
                  {paragraph}
                </motion.p>
              ))}

              <motion.p
                className="text-right font-medium"
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                With all my love,
                <br />
                <span className="text-pink-300 font-medium">
                  Dandi Christiawan
                </span>
              </motion.p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        className="flex justify-center py-2 space-x-2 items-center text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <Heart className="text-pink-500" size={16} />
        </motion.div>
        <span>Made with love for you</span>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 1,
          }}
        >
          <Heart className="text-pink-500" size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Letter;
