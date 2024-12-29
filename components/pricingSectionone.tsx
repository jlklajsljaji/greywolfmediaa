import { PricingData } from "@/data";
import { CheckIcon } from "lucide-react";



export function PreviewGradient() {
  return (
    <section className="overflow-hidden py-24  text-neutral-800 dark:text-neutral-50 lg:pb-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <h2 className="mb-4 text-6xl tracking-tighter">
            Pricing &amp; Plans
          </h2>
          <p className="text-xl tracking-tight">
            Use and reuse tons of responsive sections to create the perfect
            layout. Sections are ready.
          </p>
        </div>
        <div className="-m-6 flex flex-wrap *:mx-auto">
          <div className="w-full p-6 md:w-1/2 lg:w-1/3">
            <div className="h-full transform-gpu rounded-2xl border border-neutral-300 bg-white transition duration-500 hover:-translate-y-2 dark:border-neutral-600 dark:bg-neutral-900 ">
              <div className="border-b border-neutral-300 p-12 dark:border-neutral-600">
                <div className="pr-9">
                  <h4 className="mb-6 text-6xl tracking-tighter">{PricingData[0].Title}</h4>
                  <p className="mb-2 text-xl font-semibold tracking-tight">
                   {PricingData[0].Price}
                  </p>
                  <p className="tracking-tight">
                    {PricingData[0].Description}
                  </p>
                </div>
              </div>
              <div className="p-12 pb-11">
                <ul className="-m-1.5 mb-11">
                  {PricingData[0].Features.map((i)=> <FeatureItem>{i}</FeatureItem>)}
                 
                 
                </ul>
                <PricingButton >
                {PricingData[0].Button}
                </PricingButton>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-1/3">
            <div
              className="transform-gpu overflow-hidden rounded-2xl p-px transition duration-500 hover:-translate-y-2"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/eldoraui/image/upload/v1734021310/advanced-gradient_un8eg6.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="h-full rounded-2xl bg-white dark:bg-neutral-900">
                <div
                  className="p-12"
                  style={{
                    backgroundImage:
                      "url('https://res.cloudinary.com/eldoraui/image/upload/v1734021310/advanced-gradient_un8eg6.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="pr-9">
                    <h4 className="mb-6 text-6xl tracking-tighter text-white">
                      {[PricingData[1].Title]}
                    </h4>
                    <p className="mb-2 text-xl font-semibold tracking-tighter text-white">
                    {[PricingData[1].Price]}
                    </p>
                    <p className="tracking-tight text-white">
                    {[PricingData[1].Description]}
                    </p>
                  </div>
                </div>
                <div className="p-12 pb-11">
                  <ul className="-m-1.5 mb-11">
                  {[PricingData[1].Features.map((i)=> <FeatureItem>{i}</FeatureItem>)]}
                   
                 
                  </ul>
                  <PricingButton >
                   {PricingData[1].Button}
                  </PricingButton>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-1/3">
            <div className="h-full transform-gpu rounded-2xl border border-neutral-300 bg-white transition duration-500 hover:-translate-y-2 dark:border-neutral-600 dark:bg-neutral-900 ">
              <div className="border-b border-neutral-300 p-12 dark:border-neutral-600">
                <div className="pr-9">
                  <h4 className="mb-6 text-6xl tracking-tighter">{PricingData[2].Title}</h4>
                  <p className="mb-2 text-xl font-semibold tracking-tight">
                   {PricingData[2].Price}
                  </p>
                  <p className="tracking-tight">
                    {PricingData[2].Description}
                  </p>
                </div>
              </div>
              <div className="p-12 pb-11">
                <ul className="-m-1.5 mb-11">
                  {PricingData[2].Features.map((i)=> <FeatureItem>{i}</FeatureItem>)}
                 
                 
                </ul>
                <PricingButton >
                {PricingData[2].Button}
                </PricingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureItem = ({ children }: { children: string }) => {
  return (
    <li className="flex items-center py-1.5">
      <CheckIcon className="mr-3 size-3" />
      <span className="font-medium tracking-tight">{children}</span>
    </li>
  );
};

const PricingButton = ({
  children,
  href,

  noCardRequired,
}: {
  children: string;
  href?: string;
  noCardRequired?: boolean;
}) => {
  return (
    <>
      <a
        className="inline-block w-full rounded-lg border border-neutral-700  bg-transparent px-5 py-4 text-center font-semibold tracking-tight transition duration-200 hover:scale-105 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-800"
        href={href ?? ""}
      >
        {children}
      </a>
      {noCardRequired && (
        <span className="text-sm tracking-tight text-neutral-600">
          No credit card required
        </span>
      )}
    </>
  );
};
