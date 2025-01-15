import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const Letter = () => {
  return (
    <Card className="max-w-2xl mx-auto my-8">
      <CardContent className="p-6 space-y-6">
        <div className="text-center space-y-2">
          <Heart className="text-pink-500 w-8 h-8 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-800">Dear E,</h2>
        </div>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Happy 24th Birthday! I know this simple webpage might not seem like
            much of a birthday present, and honestly, you deserve so much more.
            But I wanted to create something that could capture our memories and
            feelings in a different way.
          </p>

          <p>
            Looking through these photos reminds me of all the beautiful moments
            we've shared - from silly selfies to meaningful milestones. Each
            picture tells a story of us growing together, learning about each
            other, and building something special.
          </p>

          <p>
            I wish I could give you the world, but for now, I hope this small
            digital memory book can make you smile. It's not just about the
            photos or the webpage - it's about all the love, laughter, and
            moments we've shared that made these memories so precious.
          </p>

          <p>
            Thank you for being you, for bringing so much joy into my life, and
            for understanding that sometimes the best gifts aren't the most
            expensive ones, but the ones that come from the heart. I promise to
            keep adding more memories to our collection and to make each day
            feel special, not just birthdays.
          </p>

          <p className="text-right font-medium">
            With all my love,
            <br />
            Dandi Christiawan
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Letter;
