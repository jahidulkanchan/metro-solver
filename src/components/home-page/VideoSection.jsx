import videoFrame from '../../assets/video-frame.png';
import playBtn from '../../assets/play-button.png';

export default function VideoSection() {
  return (
    <>
      <section className="bg-black">
        <div className="container">
          <div className="video-frame max-w-5xl mx-auto relative">
            <div className="play-btn left-1/2 top-1/2 -translate-1/2 absolute">
              <img className='w-[60px] md:w-[100px] cursor-pointer' src={playBtn} alt="" />
            </div>
            <img className="w-fit mx-auto" src={videoFrame} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
