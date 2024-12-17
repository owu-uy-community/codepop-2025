interface SectionProps {
  children: React.ReactNode;
  id?: string;
}

export default function Section({ id, children }: SectionProps) {
  return <section id={id} className="my-16 text-center">{children}</section>;
}
