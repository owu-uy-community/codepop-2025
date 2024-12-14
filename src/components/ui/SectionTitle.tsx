import { Image } from '@nextui-org/react';

interface SectionTitleProps {
  title: string;
  icon?: 'love' | 'thank-you' | 'pow' | 'yes';
  children: React.ReactNode;
}

export default function SectionTitle({
  title,
  icon,
  children,
}: SectionTitleProps) {
  const getIconUrl = () => {
    switch (icon) {
      case 'love':
        return '/love-icon.png';
      case 'thank-you':
        return '/thank-you-icon.png';
      case 'pow':
        return '/pow-icon.png';
      case 'yes':
        return '/yes-icon.png';
      default:
        return '/';
    }
  };

  return (
    <div className="flex w-full flex-col gap-4 text-center mb-10">
      <div className="flex flex-col-reverse gap-4 md:flex-row w-fit mx-auto items-center ">
        <h1 className="text-5xl md:text-7xl p-2 inline-block w-fit mx-auto font-bangers text-yellow-300  drop-shadow-[4px_4px_1px_rgba(0,0,0,.8)]">
          {title}
        </h1>
        {icon && (
          <Image
            src={getIconUrl()}
            isBlurred
            className="w-20 md:w-24 ml-6 data-[loaded=true]:opacity-70"
          />
        )}
      </div>

      {children && (
        <p className="text-xl md:text-2xl max-w-[70%] mx-auto mt-2 mb-8 font-sour-gummy text-gray-900 leading-8 drop-shadow-[1px_1px_1px_rgba(255,255,255,.5)]">
          {children}
        </p>
      )}
    </div>
  );
}
