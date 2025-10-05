import Location from '../../assets/map.png';
import ContactCard from './ContactCard';

export default function MapSection() {
  return (
    <>
      <section className="bg-black relative">
        <div className="absolute hidden md:block z-10 left-2/3 top-[50px] -translate-x-2/3">
          {' '}
          <ContactCard />
        </div>
        <div className="container py-20">
          <div className="video-frame max-w-5xl mx-auto relative">
            <div className="play-btn left-1/2 top-1/2 -translate-1/2 absolute"></div>
            <img className="w-fit object-cover mx-auto" src={Location} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
