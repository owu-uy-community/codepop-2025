import Communities from '@/components/Communities';
import SpeakerList from '@/components/SpeakerList';
import Sponsors from '@/components/Sponsors';
import Team from '@/components/Team';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-items-center w-full min-h-screen max-w-6xl mx-auto px-2 md:px-6 py-4 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col flex-1 gap-4 md:gap-8 items-center">
        <Section id="inicio">
          <SectionTitle title="¿A quién va dirigida?">
            Este evento será un punto de encuentro para profesionales,
            estudiantes y entusiastas de la programación de todo el país.
          </SectionTitle>
        </Section>

        <Section>
          <SectionTitle title="Speakers" icon="yes">
            Conocé a los speakers que compartirán sus conocimientos y
            experiencias en la conferencia.
          </SectionTitle>

          <SpeakerList />
        </Section>

        {/* <Section id="agenda">
          <SectionTitle title="La agenda" icon="get-ready">
            Organizate de la mejor manera para sacar el mayor partido a la
            conferencia, aqu&iacute; te dejamos todos los horarios de charlas y
            workshops
          </SectionTitle>

          <Schedule />
        </Section> */}

        <Section id="sponsors">
          <SectionTitle title="Sponsors" icon="thank-you">
            Nuestros patrocinadores hacen posible ésta conferencia, ayudándonos
            a inspirar y apoyar a la próxima generación de programadores.
          </SectionTitle>

          <Sponsors />
        </Section>

        <Section id="comunidades">
          <SectionTitle title="Comunidades" icon="love">
            Conocé a las comunidades que impulsan el conocimiento, la innovación
            y el networking en el mundo del software apoyando éste evento.
          </SectionTitle>
          <Communities />
        </Section>

        <Section id="equipo">
          <SectionTitle title="El equipo" icon="pow">
            Conocé a las personas creativas que con conocimiento y dedicación,
            generan el espacio ideal para aprender, conectar y crecer en el
            mundo de la programación.
          </SectionTitle>

          <Team />
        </Section>
      </main>
    </div>
  );
}
