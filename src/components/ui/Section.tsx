interface SectionProps {
  children: React.ReactNode;
}

export default function Section({ children }: SectionProps) {
  return <section className="my-16 text-center">{children}</section>;
}
