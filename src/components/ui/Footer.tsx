import logo from '@assets/images/logo-owu.webp';
import { Image, Link } from '@nextui-org/react';
import GithubIcon from '../icons/GithubIcon';
import InstagramIcon from '../icons/InstagramIcon';
import LinkedInIcon from '../icons/LinkedInIcon';

export default function Footer() {
  return (
    <footer className="relative z-30 flex flex-1 pt-6 backdrop-blur-lg  justify-center border-t-[8px] border-t-yellow-300 bg-gray-700/70">
      <div className="flex flex-col w-full max-w-6xl text-white px-6">
        <div className="flex flex-1 flex-col md:flex-row items-center md:items-start justify-between">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-3xl font-bangers font-semibold text-yellow-300 drop-shadow-[3px_3px_1px_#000000]">
              Creamos y aprendemos juntos
            </span>
            <span className="font-cutive-mono whitespace-normal mt-2">
              5 de Abril de 2025 09:00 - 18:30
            </span>
            <span className="font-cutive-mono whitespace-normal">
              en Holberton - Zonamerica.
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex flex-col gap-4 mt-10 md:mt-0 items-center md:items-start">
              <span className="font-bangers text-3xl text-yellow-300">
                Links
              </span>
              <Link href="#" className="text-white">
                Home
              </Link>
              <Link href="#" className="text-white">
                Contacto
              </Link>
              <Link href="#" className="text-white">
                Quiero ser speaker
              </Link>
              <a
                href="mailto:sponsors@owu.uy?subject=Quiero%20ser%20sponsor%20de%20Code%20Pop&body=Hola%21%0AHe%20visto%20el%20sitio%20web%20y%20me%20gustar%C3%ADa%20ser%20sponsor%20de%20la%20conferencia."
                className="text-white"
              >
                Quiero ser sponsor
              </a>
            </div>

            <div className="flex flex-col gap-4 mt-10 md:mt-0  items-center md:items-start">
              <span className="font-bangers text-3xl text-yellow-300">
                De interes
              </span>
              <Link
                href="https://slack.owu.uy/"
                target="_blank"
                className="text-white"
              >
                Sumate a la comunidad
              </Link>
              <Link
                href="https://www.owu.uy/"
                target="_blank"
                className="text-white"
              >
                Visita OWU.uy
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-between mt-10 pt-2 pb-2 border-t-1 border-t-white/30">
          <span className="text-base">
            <div className="flex items-center gap-4">
              <Link
                href="https://www.instagram.com/owu__uy/"
                className="text-white"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/company/owu-uruguay/"
                className="text-white"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="https://github.com/owu-uy-community"
                className="text-white"
              >
                <GithubIcon />
              </Link>
            </div>
          </span>
          <span className="text-6xl mt-2 gap-4">
            <Image
              alt="OWU.UY logo"
              className="h-12 rotate-[6.5deg]"
              src={logo}
            />
          </span>
        </div>
      </div>
    </footer>
  );
}
