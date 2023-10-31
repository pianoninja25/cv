import Image from 'next/image';

export default function Portfolio() {
  return (
    <div className="container">
      <div className="w-full px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h4 className="font-semibold text-lg text-primary mb-2">Portfolio</h4>
          <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-4xl">Last Project</h2>
          <p className="font-medium text-secondary md:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis facere eos dolorem expedita eligendi,
            corrupti architecto quae. Vel, fugit hic!
          </p>
        </div>
      </div>

      <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
        <div className="mb-12 p-4 md:w-1/2">
          <div className="rounded-md shadow-md overflow-hidden">
            <Image src="/portfolio/1.png" width={1000} height={1000} alt="Event Sales Bali" />
          </div>
          <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Event Sales Dashboard</h3>
          <p className="font-medium text-base text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores temporibus rem?
          </p>
        </div>

        <div className="mb-12 p-4 md:w-1/2">
          <div className="rounded-md shadow-md overflow-hidden w">
            <Image src="/portfolio/2.png" width={1000} height={1000} alt="Network Status" />
          </div>
          <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Network Status Dashboard</h3>
          <p className="font-medium text-base text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores temporibus rem?
          </p>
        </div>

        <div className="mb-12 p-4 md:w-1/2">
          <div className="rounded-md shadow-md overflow-hidden">
            <Image src="/portfolio/3.png" width={1000} height={1000} alt="Congestion" />
          </div>
          <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Congestion Dashboard</h3>
          <p className="font-medium text-base text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores temporibus rem?
          </p>
        </div>

        <div className="mb-12 p-4 md:w-1/2">
          <div className="rounded-md shadow-md overflow-hidden">
            <Image src="/portfolio/4.png" width={1000} height={1000} alt="CS Core Performance" />
          </div>
          <h3 className="font-semibold text-xl text-dark mt-5 mb-3">CS Core Performance</h3>
          <p className="font-medium text-base text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores temporibus rem?
          </p>
        </div>

        {/* DNOC DASHBOARD */}
        <div className="mb-12 p-4 md:w-1/2">
          <div className="rounded-md shadow-md overflow-hidden">
            <Image src="/portfolio/A.PNG" width={1000} height={1000} alt="Incident Dashboard" />
          </div>
          <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Incident Dashboard</h3>
          <p className="font-medium text-base text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores temporibus rem?
          </p>
        </div>
        <div className="mb-12 p-4 md:w-1/2">
          <div className="rounded-md shadow-md overflow-hidden">
            <Image src="/portfolio/B.PNG" width={1000} height={1000} alt="MTTR & MTTE Dashboard" />
          </div>
          <h3 className="font-semibold text-xl text-dark mt-5 mb-3">MTTR & MTTE Dashboard</h3>
          <p className="font-medium text-base text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores temporibus rem?
          </p>
        </div>
        <div className="mb-12 p-4 md:w-1/2">
          <div className="rounded-md shadow-md overflow-hidden">
            <Image src="/portfolio/C.PNG" width={1000} height={1000} alt="Repeated Offender Dsahboard" />
          </div>
          <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Repeated Offender Dsahboard</h3>
          <p className="font-medium text-base text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores temporibus rem?
          </p>
        </div>
        <div className="mb-12 p-4 md:w-1/2">
          <div className="rounded-md shadow-md overflow-hidden">
            <Image src="/portfolio/D.PNG" width={1000} height={1000} alt="Ticket/WO Ageing" />
          </div>
          <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Ticket/WO Ageing</h3>
          <p className="font-medium text-base text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores temporibus rem?
          </p>
        </div>
        <div className="mb-12 p-4 md:w-1/2">
          <div className="rounded-md shadow-md overflow-hidden">
            <Image src="/portfolio/E.PNG" width={1000} height={1000} alt="BO Load Dashboard" />
          </div>
          <h3 className="font-semibold text-xl text-dark mt-5 mb-3">BO Load Dashboard</h3>
          <p className="font-medium text-base text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores temporibus rem?
          </p>
        </div>
        <div className="mb-12 p-4 md:w-1/2">
          <div className="rounded-md shadow-md overflow-hidden">
            <Image src="/portfolio/F.PNG" width={1000} height={1000} alt="Single Site MTTR Achievement" />
          </div>
          <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Single Site MTTR Achievement</h3>
          <p className="font-medium text-base text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores temporibus rem?
          </p>
        </div>
        <div className="mb-12 p-4 md:w-1/2">
          <div className="rounded-md shadow-md overflow-hidden">
            <Image src="/portfolio/G.PNG" width={1000} height={1000} alt="Ticket Link Down" />
          </div>
          <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Ticket Link Down</h3>
          <p className="font-medium text-base text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores temporibus rem?
          </p>
        </div>
        <div className="mb-12 p-4 md:w-1/2">
          <div className="rounded-md shadow-md overflow-hidden">
            <Image src="/portfolio/H.PNG" width={1000} height={1000} alt="Incident Dashboard" />
          </div>
          <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Incident Dashboard</h3>
          <p className="font-medium text-base text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores temporibus rem?
          </p>
        </div>
        <div className="mb-12 p-4 md:w-1/2">
          <div className="rounded-md shadow-md overflow-hidden">
            <Image src="/portfolio/I.PNG" width={1000} height={1000} alt="Site Down Dashboard" />
          </div>
          <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Site Down Dashboard</h3>
          <p className="font-medium text-base text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores temporibus rem?
          </p>
        </div>
        <div className="mb-12 p-4 md:w-1/2">
          <div className="rounded-md shadow-md overflow-hidden">
            <Image src="/portfolio/J.PNG" width={1000} height={1000} alt="B2B Dashboard" />
          </div>
          <h3 className="font-semibold text-xl text-dark mt-5 mb-3">B2B Dashboard</h3>
          <p className="font-medium text-base text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores temporibus rem?
          </p>
        </div>
      </div>
    </div>
  );
}
