import TicketIcon from '@components/icons/TicketIcon';
import { Button, Image, Snippet } from '@nextui-org/react';

export default function Hero() {
  return (
    <div className="flex w-full bg-[url(/landing/hero.png)] bg-cover bg-center text-white fixed top-0 left-0 h-screen z-10">
      <div className="absolute left-0 top-0 h-full w-[80%] bg-gradient-to-r from-black/90 to-black/1"></div>

      <div className="flex flex-col w-full max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col pt-20 pb-8 max-w-xl">
          <Image src="/logo.png" width={260} height={240} alt="Code pop logo" />

          <h1 className="text-6xl mt-0 mb-6 font-sour-gummy font-semibold drop-shadow-[2px_2px_1px_#c4a219]">
            Creamos y aprendemos juntos
          </h1>
          <p className="text-xl">
            Conferencia diseñada para inspirar a los jóvenes a explorar el mundo
            de la programación desde una perspectiva fresca y creativa
          </p>
        </div>

        <div className="flex flex-col font-cutive-mono">
          <Snippet
            variant="bordered"
            className="text-white my-4 bg-black/40 text-lg w-fit drop-shadow-md"
          >
            <span className="font-cutive-mono">
              5 de Abril de 2025 09:00 - 18:00 en Holberton - Zona América.
            </span>
          </Snippet>

          {/*
          <Button
            startContent={<TicketIcon className="size-8" />}
            color="success"
            size="lg"
            className="text-white w-fit mt-4 text-xl font-sour-gummy py-8"
          >
            Quiero mi entrada
          </Button>
         */}
        </div>
      </div>
    </div>
  );
}
