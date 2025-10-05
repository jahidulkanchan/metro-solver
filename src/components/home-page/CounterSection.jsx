import plusIcon from '../../assets/plus.png';

export default function CounterSection() {
  return (
    <>
      <section className="bg-black text-white py-20">
        <div className="container">
          <div className="counter-items gap-10 grid md:grid-cols-3">
            <div className="counter-item text-center rounded-3xl py-10 bg-card">
              <div className="number flex-center gap-4">
                <h3 className="text-5xl sm:text-7xl">150</h3>
                <img src={plusIcon} alt="" />
              </div>
              <p className="text-2xl sm:text-4xl mt-2 text-[#E7E8EA]">Current Clients</p>
            </div>

            <div className="counter-item text-center rounded-3xl py-10 bg-card">
              <div className="number flex-center gap-4">
                <h3 className="text-5xl sm:text-7xl">25k</h3>
                <img src={plusIcon} alt="" />
              </div>
              <p className="text-2xl sm:text-4xl mt-2 text-[#E7E8EA]">Completed Projects</p>
            </div>
            <div className="counter-item text-center rounded-3xl py-10 bg-card">
              <div className="number flex-center gap-4">
                <h3 className="text-5xl sm:text-7xl">90</h3>
                <img src={plusIcon} alt="" />
              </div>
              <p className="text-2xl sm:text-4xl mt-2 text-[#E7E8EA]">Metro Solver Teams</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
