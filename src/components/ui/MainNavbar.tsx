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
import logo from '@assets/images/logo-owu.webp';

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className="bg-gradient-to-t from-black/1 to-black/50"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <div className="flex items-end relative ">
            <Link href="https://owu.uy">
              <Image
                alt="OWU.UY logo"
                className="h-16"
                src={logo}
              />
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
            className="text-yellow-400 text-2xl font-sour-gummy drop-shadow-[1px_1px_2px_rgba(0,0,0.1)]"
          >
            Incio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            color="foreground"
            className="text-2xl font-sour-gummy drop-shadow-[1px_1px_2px_rgba(0,0,0.05)] text-lime-400"
          >
            Agenda
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-2xl font-sour-gummy drop-shadow-[1px_1px_2px_rgba(0,0,0.05)] text-lime-400"
          >
            Sponsors
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-2xl font-sour-gummy drop-shadow-[1px_1px_2px_rgba(0,0,0.05)] text-lime-400"
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
