import Image from "next/image";

export default function Hero() {
  return (
    <section className=" bg-slate-200 border-gray-400 flex h-[600px] justify-center items-center border-b-4">
      <div className=" flex flex-col justify-center w-[600px] h-96 mr-[200px]">
        <h1 className="text-4xl font-bold text-gray-600">
          Hi, I'm Hedi, junior front end devoloper ready for some challenges
        </h1>
        <p className="text-lg mr-8 mt-24 text-gray-600">
          I am passionate about creating user-friendly and stylish web
          applications. With experience in HTML, CSS, JavaScript, React, and
          React Native, I strive to build innovative solutions that make a
          difference. I am currently seeking new opportunities to grow and
          contribute my skills in a dynamic work environment. I look forward to
          hearing from you!
        </p>
      </div>
      <div className="mr-30">
        <Image
          src={"/images/hedi.jpeg"}
          alt="headshot of Hedi"
          width="300"
          height="300"
          className="rounded-full "
        />
      </div>
    </section>
  );
}
