import Communities from '../components/Communities';
import Sponsors from '../components/Sponsors';
import Team from '../components/Team';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center w-full min-h-screen max-w-6xl mx-auto px-2 md:px-6 py-4 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col flex-1 gap-4 md:gap-8 items-center">
        <Section>
          <SectionTitle title="¿A quien va dirigida?">
            Este evento será un punto de encuentro para profesionales,
            estudiantes y entusiastas de la programación de todo el país.
          </SectionTitle>

          {/*<span>Agregar contenido aquí</span>*/}
        </Section>

        {/* <Section>
          <SectionTitle title="La agenda">
            Organizate de la mejor manera para sacar el mayor partido a la
            conferencia, aqu&iacute; te dejamos todos los horarios de charlas y
            workshops
          </SectionTitle>

          <Schedule />
        </Section> */}

        <Section>
          <SectionTitle title="Sponsors" icon="thank-you">
            Nuestros patrocinadores hacen posible esta conferencia, ayudándonos
            a inspirar y apoyar a la próxima generación de desarrolladores.
          </SectionTitle>

          <Sponsors />
        </Section>

        <Section>
          <SectionTitle title="Comunidades" icon="love">
            Conoce a las comunidades que impulsan el conocimiento, la innovación
            y el networking en el mundo del software apoyando este evento.
          </SectionTitle>
          <Communities />
        </Section>

        <Section>
          <SectionTitle title="El equipo" icon="pow">
            Conoce a las personas creativas que con conocimiento y dedicación,
            generan el espacio ideal para aprender, conectar y crecer en el
            mundo de la programación.
          </SectionTitle>

          <Team />
        </Section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        © OWU.UY 2025
      </footer>
    </div>
  );
}
