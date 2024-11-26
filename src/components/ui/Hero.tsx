// import TicketIcon from '@components/icons/TicketIcon';
import { /*Button,*/ Image, Snippet } from '@nextui-org/react';

export default function Hero() {
  return (
    <div className="flex w-full text-white fixed top-0 left-0 h-screen z-10 bg-black">
      <video
        src="/videos/video-hero-bg.mp4"
        muted
        autoPlay
        loop
        className="absolute z-10 h-full object-cover opacity-80"
      ></video>

      <div className="flex flex-col w-full p-4 text-center sm:text-left max-w-7xl mx-auto relative z-30">
        <div className="flex flex-col pt-20 pb-8 max-w-xl items-center sm:items-start">
          <Image
            src="/logo.png"
            alt="Code pop logo"
            className="w-[180px] h-[160px] md:w-[230px] md:h-[210px] lg:w-[260px] lg:h-[240px]"
          />

          <h1 className="text-5xl lg:text-7xl mt-0 mb-6 font-bangers font-semibold text-yellow-300 drop-shadow-[3px_3px_1px_#000000]">
            Creamos y aprendemos juntos
          </h1>
          <p className="text-xl sm:text-2xl text-lime-400 drop-shadow-[1px_2px_1px_rgba(0,0,0.7)]">
            Conferencia diseñada para inspirar a los jóvenes a explorar el mundo
            de la programación desde una perspectiva fresca y creativa
          </p>
        </div>

        <div className="flex flex-col font-cutive-mono items-center sm:items-start">
          <Snippet
            tooltipProps={{
              content: 'Copiar fecha y hora del evento al clipboard',
            }}
            variant="bordered"
            className="text-yellow-300 border-yellow-400 my-4 bg-black/40 text-md md:text-lg text-center w-fit drop-shadow-md"
          >
            <span className="font-cutive-mono whitespace-normal">
              5 de Abril de 2025 09:00 - 18:00 en Holberton - Zona América.
            </span>
          </Snippet>

          {/* <Button
            startContent={<TicketIcon className="size-8" />}
            size="lg"
            className="text-gray-700 w-fit mt-4 text-xl font-sour-gummy py-8 bg-yellow-400"
          >
            Quiero mi entrada
          </Button> */}
        </div>
      </div>
    </div>
  );
}
