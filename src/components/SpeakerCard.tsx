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
    <div className="relative overflow-hidden flex flex-col w-full max-w-[450px] mx-auto rounded-xl drop-shadow-lg">
      <video
        src="/videos/video-speaker-bg.mp4"
        muted
        autoPlay
        loop
        className="absolute z-10 h-full object-cover opacity-70"
      ></video>
      <div className="absolute z-20 bg-gradient-to-t from-yellow-400/70 to-yellow-400/10 h-full w-full"></div>

      <div className="relative z-30 flex flex-1 w-full flex-col">
        <div className="flex w-full justify-between items-start py-8 px-6">
          <Image
            src={logo}
            shadow="none"
            className="w-[100px] object-contain"
            alt="OWU logo"
          />
          <div className="flex flex-col flex-1 items-end">
            <span className="text-3xl font-bangers text-white drop-shadow-[4px_4px_1px_rgba(0,0,0,.7)]">
              Speaker
            </span>
            <span className="text-6xl text-right font-bangers mt-0 text-white drop-shadow-[4px_4px_1px_rgba(0,0,0,.7)]">
              {name}
            </span>
          </div>
        </div>

        <div className="pt-8 pb-12 px-6 flex flex-col mb-0 text-left items-start h-[200px] ">
          <span className="font-bangers text-3xl">{title}</span>
          <span className="font-mono text-lg mt-4">{description}</span>
        </div>

        <Avatar
          src={imageUrl}
          className="w-[240px] h-[240px] flex self-end mr-4  border-4 border-yellow-200 opacity-90 drop-shadow-xl mb-6"
        />
      </div>
      <div className="relative z-20 bottom-2 left-0 flex w-full mb-2 font-sour-gummy bg-yellow-400/80 py-2 px-4 border-b-2 border-b-white/20">
        <Image
          src="/logo.png"
          className="absolute z-20 transform -translate-y-full top-2 left-2 min-w-[100px]"
        />
        {bio}
      </div>

      {/*  */}
    </div>
  );
}
