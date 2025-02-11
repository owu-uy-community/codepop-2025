import { motion } from 'motion/react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
}

export default function Section({ id, children }: SectionProps) {
  return (
    <motion.div
      id={id}
      className="my-16 text-center"
      initial={{ opacity: 0, translateY: 20, scale: 0.7 }}
      whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
