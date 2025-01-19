import React from 'react';
import myMusic from '../assets/Until I Found You (Em Beihold Version).mp4';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const toggleAudio = async () => {
    if (audioRef.current instanceof HTMLAudioElement) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          await audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      } catch (err) {
        console.log('Browser blocked audio playback');
      }
    }
  };
  return (
    <>
      <audio ref={audioRef} loop>
        <source src={myMusic} type="audio/mpeg" />
      </audio>

      <Button
        onClick={toggleAudio}
        className="fixed bottom-5 right-5 bg-pink-300  text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
      >
        {isPlaying ? (
          <VolumeX className="w-6 h-6" />
        ) : (
          <Volume2 className="w-6 h-6" />
        )}
      </Button>
    </>
  );
};

export default MusicPlayer;
