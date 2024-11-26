import logo from '@assets/images/logo-owu.webp';
import {
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { useState } from 'react';

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      classNames={{
        base: 'bg-transparent border-b-2 border-white/15',
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <div className="flex items-end relative ">
            <Link href="https://owu.uy">
              <Image alt="OWU.UY logo" className="h-12" src={logo} />
            </Link>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link
            color="foreground"
            size="lg"
            href="#"
            className="relative text-yellow-400 text-2xl font-bangers drop-shadow-[3px_3px_1px_rgba(0,0,0.7)]"
          >
            Inci0
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            color="foreground"
            className="text-2xl font-bangers drop-shadow-[3px_3px_1px_rgba(0,0,0.7)] text-white"
          >
            Agenda
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-2xl font-bangers drop-shadow-[3px_3px_1px_rgba(0,0,0.7)] text-white"
          >
            Sponsors
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-2xl font-bangers drop-shadow-[3px_3px_1px_rgba(0,0,0.7)] text-white"
          >
            El equipo
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link color="primary" className="w-full" href="#" size="lg">
            Inicio
          </Link>
          <Link color="primary" className="w-full" href="#" size="lg">
            Agenda
          </Link>
          <Link color="primary" className="w-full" href="#" size="lg">
            Sponsors
          </Link>
          <Link color="primary" className="w-full" href="#" size="lg">
            Equipo
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
