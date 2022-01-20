import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute  w-full text-center top-1/2">
        <p className="text-sm sm:text-lg">¿No sabes a dónde quieres ir?</p>
        <p className="text-sm sm:text-lg">¿No importa?</p>
        <button className="rounded-full py-4 px-10 bg-white text-purple-500 font-bold active:scale-90 transition my-3">
          Busqueda Flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
