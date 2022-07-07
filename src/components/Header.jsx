import Aren from "./assets/aren.jpeg";

export default function Header() {
  return (
    <section className="flex justify-around items-center flex-wrap h-screen">
      <div>
        <h3 className=" text-primary font-mono text-lg">Hi, my name is</h3>
        <h1 className=" text-5xl my-2">Aren</h1>
        <h2 className=" text-3xl">I build things for the web</h2>
      </div>
      <div className="relative group">
        <img className="shadow-lg h-80 w-80 z-[1] relative rounded" src={Aren} alt="profile picture" id="photo" />
        <div className=" border-primary border-[3px] rounded-lg
          absolute z-0 h-full w-full top-6 left-6
          transition-all group-hover:top-4 group-hover:left-4 duration-300"></div>
      </div>
    </section>
  );
}
