import { IconArrowUp, IconPlant2 } from "@tabler/icons-react";
import Image from "next/image";
import pino from "pino";

const logger = pino();
export default function Home() {
  return (
    <div className=" w-full bg-white  bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="h-screen  text-gray-900 flex flex-col pb-6">
        <div className="h-full flex flex-col justify-center">
          <div className=" max-w-4xl w-full text-center mx-auto px-4 sm:px-6 lg:px-8">
            <div className="items-center justify-center flex flex-row mb-2">
              <IconPlant2 size={60} />
            </div>

            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl ">
              Research Tree
            </h1>
            <p className="mt-3 text-gray-600 ">
              Research Tree is a decentralized research platform that allows you
              to explore, contribute, and fund research projects Built for Theta
              hackathon.
            </p>
          </div>

          <div className="mt-10 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <input
                type="text"
                className="p-4 block w-full border focus:border-[#24283b] focus:outline-none border-gray-200 rounded-full text-sm   disabled:opacity-50 disabled:pointer-events-none   "
                placeholder="Ask me anything..."
              />
              <div className="absolute top-1/2 end-2 -translate-y-1/2">
                <button
                  type="button"
                  className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                >
                  <IconArrowUp />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
