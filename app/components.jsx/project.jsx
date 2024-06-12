import Image from "next/image";

export default function Project() {
  return (
    <div>
      <div className=" bg-slate-200 border-gray-400 h-[1000px] flex flex-col justify-center items-center p-6">
        <h1 className="text-2xl text-gray-600 mb-10 mr-[1020px]">Projects</h1>
        <div className="flex flex-col justify-between h-[100%] w-[1100px]">
          <a
            href="https://w4-radio-player-react.vercel.app/"
            className="flex card border-b-2 border-gray-400"
          >
            <Image
              src={"/images/radioplayer.png"}
              alt="image of radioplayer website"
              height="300"
              width="300"
              className="rounded-lg mb-6"
            />
            <div className="flex flex-col justify-between ml-6">
              <h1 className="font-bold text-3xl">Radioplayer</h1>
              <div className="flex ">
                <p className="border-2 border-gray-400 rounded-full p-2 w-16 text-gray-600">
                  React
                </p>
                <p className="border-2 border-gray-400 rounded-full p-2 w-20 ml-2 text-gray-600">
                  Tailwind
                </p>
                <p className="border-2 border-gray-400 rounded-full p-2 w-20 ml-2 text-gray-600">
                  API call
                </p>
              </div>

              <p className="mb-6 text-gray-600">
                In this project, I developed a Radioplayer application that
                allows users to search for Swedish radio stations. I implemented
                the functionality using React for the search bar logic and
                Tailwind CSS for styling. Additionally, I integrated an API to
                fetch data for the radio stations, ensuring a seamless and
                efficient user experience.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
