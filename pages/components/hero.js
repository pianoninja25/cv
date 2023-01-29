import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="container">
      <div className="flex flex-wrap">
        <div className="w-full self-center p-4 lg:w-1/2">
          <h1 className="text-base font-semibold text-primary md:text-xl">
            Greetings, I am
            <span className="block font-bold text-dark text-3xl mt-1 lg:text-5xl">Leonard Sianipar</span>
          </h1>
          <h2 className="font-medium text-secondary text-sm px-y mb-5 lg:text-2xl text-slate-500">Full Stack Developer & Data Analyst</h2>
          <p className="text-secondary text-sm mb-10 leading-relaxed">
            I love to learn something new, fast learner, work well with others and also good in health.
            <span className="text-dark font-bold"> Horas!</span>
          </p>

          <Link
            href="https://wa.me/+6289654515543"
            className="text-base font-semibold py-2 px-4 rounded-2xl text-white bg-primary hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
          >
            Get in Touch
          </Link>
        </div>
        <div className="w-full self-end px-4 lg:w-1/2">
          <div className="relative mt-10 z-10 lg:mt-0 lg:right-0">
            <Image src="/leonard.png" alt="Leonard Sianipar" width={300} height={300} className="max-w-xs mx-auto" />
            <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
              <svg width="250" height="250" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#14b8a6"
                  d="M42.6,-45.8C55.7,-29.6,67,-14.8,68,1C69.1,16.9,59.8,33.7,46.8,48.9C33.7,64,16.9,77.4,1.1,76.3C-14.6,75.2,-29.2,59.5,-44.7,44.4C-60.1,29.2,-76.4,14.6,-80.3,-3.9C-84.2,-22.5,-75.8,-45,-60.4,-61.2C-45,-77.3,-22.5,-87.2,-3.8,-83.3C14.8,-79.5,29.6,-61.9,42.6,-45.8Z"
                  transform="translate(100 100)"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
