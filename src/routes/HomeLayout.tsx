import Hero from '@components/ui/Hero';
import MainNavbar from '@components/ui/MainNavbar';
import { Outlet } from 'react-router-dom';

export default function HomeLayout() {
  return (
    <>
      <MainNavbar />
      <div className="pt-[800px] relative">
        <Hero />
        <div className="w-full bg-white/70 relative z-20 backdrop-blur-lg border-t-[8px] border-t-yellow-300">
          <Outlet />
        </div>
      </div>
    </>
  );
}
