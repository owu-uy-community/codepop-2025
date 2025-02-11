import { Image } from '@nextui-org/react';
import { motion } from 'motion/react';

interface SectionTitleProps {
  title: string;
  icon?: 'love' | 'thank-you' | 'pow' | 'yes' | 'get-ready';
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
      case 'get-ready':
        return '/get-ready-icon.png';
      default:
        return '/';
    }
  };

  return (
    <div className="flex w-full flex-col gap-4 text-center mb-0 mt-20">
      <div className="flex flex-col-reverse gap-4 md:flex-row w-fit mx-auto items-center ">
        <motion.h1
          className="text-5xl md:text-7xl p-2 inline-block w-fit mx-auto font-bangers text-yellow-300  drop-shadow-[4px_4px_1px_rgba(0,0,0,.8)]"
          initial={{ translateX: -40, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        {icon && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: [0, 1.2, 0.7, 1.2, 0.9, 1], opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Image
              src={getIconUrl()}
              isBlurred
              className="w-20 md:w-24 ml-6 data-[loaded=true]:opacity-70"
            />
          </motion.div>
        )}
      </div>

      {children && (
        <motion.p
          className="text-xl md:text-2xl max-w-[70%] mx-auto mt-2 mb-16 font-sour-gummy text-gray-900 leading-8 drop-shadow-[1px_1px_1px_rgba(255,255,255,.5)]"
          initial={{ translateX: -40, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          {children}
        </motion.p>
      )}
    </div>
  );
}
