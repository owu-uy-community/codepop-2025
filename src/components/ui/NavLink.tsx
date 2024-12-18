import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

interface NavLinkProps {
  title: string;
  href: string;
  isMobileMenu?: boolean;
}

export default function NavLink({ title, href, isMobileMenu }: NavLinkProps) {
  const { hash } = useLocation();

  const baseClasses = `${
    isMobileMenu ? 'text-4xl' : 'text-2xl'
  } font-bangers drop-shadow-[2px_2px_1px_rgba(0,0,0,.7)]`;
  const regularClasses = `${isMobileMenu ? 'text-yellow-50' : 'text-white'}`;
  const activeClasses = 'text-yellow-300';
  const isActive = hash === href || (!hash && href === '#inicio');

  const className = `${baseClasses} ${
    isActive ? activeClasses : regularClasses
  }`;

  return (
    <HashLink smooth className={className} to={href}>
      {title}
    </HashLink>
  );
}
