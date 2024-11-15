interface SectionTitleProps {
  title: string;
  children: React.ReactNode;
}

export default function SectionTitle({ title, children }: SectionTitleProps) {
  return (
    <div className="flex w-full flex-col gap-4 text-center mb-10">
      <h1 className="text-7xl p-2 inline-block w-fit mx-auto font-bangers bg-gradient-to-tr from-yellow-400 via-yellow-400 via-30% to-lime-300 text-transparent bg-clip-text drop-shadow-[4px_4px_1px_rgba(0,0,0,.7)]">
        {title}
      </h1>
      {children && (
        <p className="text-2xl max-w-[70%] mx-auto mt-2 mb-8 font-sour-gummy text-green-900 leading-8 drop-shadow-md">
          {children}
        </p>
      )}
    </div>
  );
}
