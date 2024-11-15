import data, { Sponsor } from '@/data/sponsors-data';
import SponsorItem from '@components/SponsorItem';

export default function Sponsors() {
  const shuffle = (values: Sponsor[]) => {
    for (let i = values.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [values[i], values[j]] = [values[j], values[i]];
    }
    return values;
  };

  const shuffledSponsors = shuffle(data);

  return (
    <>
      <div className="flex flex-1 flex-wrap gap-6 items-center justify-center w-full">
        {shuffledSponsors.map((sponsor) => (
          <SponsorItem
            key={sponsor.id}
            name={sponsor.name}
            linkUrl={sponsor.linkUrl}
            imageUrl={sponsor.imageUrl}
          />
        ))}
      </div>
      <div className="flex flex-1 justify-center mt-6">
        <SponsorItem name="OWU" linkUrl="https://www.owu.uy/">
          <div className="flex flex-col h-32 w-56 items-center justify-end">
            <span className="font-sour-gummy text-gray-700 text-lg">
              ¡Quiero ser sponsor!
            </span>
            <span className="text-6xl mt-2 ">🙌</span>
          </div>
        </SponsorItem>
      </div>
    </>
  );
}
