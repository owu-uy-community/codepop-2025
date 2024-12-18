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
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavLink from './NavLink';

export default function MainNavbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.hash]);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      classNames={{
        base: 'bg-transparent border-b-2 border-white/15',
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
          className="sm:hidden text-white drop-shadow-[1px_1px_1px_rgba(0,0,0,.7)]"
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
        <NavbarItem>
          <NavLink title="Inicio" href="#inicio" />
        </NavbarItem>
        {/*
        <NavbarItem>
          <Link
            href="#agenda"
            color="foreground"
            className="text-2xl font-bangers drop-shadow-[3px_3px_1px_rgba(0,0,0.7)] text-white"
          >
            Agenda
          </Link>
        </NavbarItem>
       */}
        <NavbarItem>
          <NavLink title="Sponsors" href="#sponsors" />
        </NavbarItem>
        <NavbarItem>
          <NavLink title="Comunidades" href="#comunidades" />
        </NavbarItem>
        <NavbarItem>
          <NavLink title="El equipo" href="#equipo" />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="flex flex-col gap-6 pt-8 bg-transparent">
        <NavbarMenuItem>
          <NavLink title="Inicio" href="#inicio" isMobileMenu />
        </NavbarMenuItem>
        {/*<NavbarMenuItem>
          <Link color="primary" className="w-full" href="#agenda" size="lg">
            Agenda
          </Link>
          </NavbarMenuItem>*/}
        <NavbarMenuItem>
          <NavLink title="Sponsors" href="#sponsors" isMobileMenu />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink title="Comunidades" href="#comunidades" isMobileMenu />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink title="El equipo" href="#equipo" isMobileMenu />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
