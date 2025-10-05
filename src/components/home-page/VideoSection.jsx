import videoFrame from '../../assets/video-frame.png';
import playBtn from '../../assets/play-button.png';

export default function VideoSection() {
  return (
    <>
      <section className="bg-black relative">
        <div className="bg-circle-shape right-0 top-[-200px] absolute h-[800px] w-[800px] mx-auto  blur-3xl z-[10] bg-main/30 rounded-full"></div>
        <div className="container">
          <div className="video-frame max-w-5xl mx-auto relative">
            <div className="play-btn left-1/2 top-1/2 -translate-1/2 absolute">
              <img className="w-[60px] md:w-[100px] cursor-pointer" src={playBtn} alt="" />
            </div>
            <img className="w-fit mx-auto" src={videoFrame} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
