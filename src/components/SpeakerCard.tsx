import logo from '@assets/images/logo-owu.webp';
import { Avatar, Image } from '@nextui-org/react';

interface SpeakerCardProps {
  name: string;
  imageUrl: string;
  title: string;
  description: string;
  bio: string;
}

export default function SpeakerCard({
  name,
  title,
  imageUrl,
  description,
  bio,
}: SpeakerCardProps) {
  return (
    <div className="relative overflow-hidden flex flex-col w-full max-w-[350px] mx-auto rounded-xl drop-shadow-lg border-2 border-black/15 border-t-0">
      <video
        src="/videos/video-speaker-bg.mp4"
        muted
        autoPlay
        loop
        className="absolute z-10 h-full object-cover opacity-65"
      ></video>
      <div className="absolute z-20 bg-gradient-to-t from-yellow-500/70 to-yellow-400/10 h-full w-full"></div>

      <div className="relative z-30 flex flex-col w-full h-full border-b-1 border-b-white/50">
        <div className="flex w-full justify-between items-center px-6 pt-4">
          <Image
            src={logo}
            shadow="none"
            className="w-[100px] object-contain"
            alt="OWU logo"
          />
          <span className="text-2xl font-bangers text-white drop-shadow-[3px_2px_1px_rgba(0,0,0,.7)]">
            Speaker
          </span>
        </div>

        <div className="flex w-full justify-center mt-6 mb-4 px-6">
          <span className="text-5xl md:text-6xl text-right font-bangers mt-0 text-white drop-shadow-[4px_3px_1px_rgba(0,0,0,.7)]">
            {name}
          </span>
        </div>

        <Avatar
          src={imageUrl}
          className="w-[200px] h-[200px] flex self-center ml-4 border-4 border-yellow-200 drop-shadow-[6px_-1px_1px_rgba(0,0,0,.3)] mb-6"
        />

        <div className="flex flex-col flex-1 w-full pt-6 pb-10 px-6 items-center ">
          <span className="font-bangers text-4xl">{title}</span>
          <span className="font-mono text-lg mt-4">{description}</span>
        </div>

        <div className="flex w-full items-center justify-center mb-4 font-sour-gummy bg-yellow-400/80 py-2 px-4 border-b-1 border-b-white/20">
          {bio}
        </div>
      </div>
    </div>
  );
}
