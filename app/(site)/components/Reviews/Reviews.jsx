import React from "react";

function Reviews() {
  return (
    <section className="grid bg-primary-white-p pb-4 ">
      <div className="col-span-full flex justify-center tracking-[3px] text-primary-grey-p py-12 text-center px-4 ">
        <h2>What our customer say</h2>
      </div>
      <div className=" px-4 md:px-8 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-4 text-center px-4 pb-8">
            <q>
              <span className="text-primary-grey-neutral text-base">
                The cyber security threats are constantly changing and as such
                our requirements are like shifting goal posts, we rely on
                Incommsec to help us meet the challenges and help keep us safe.
              </span>
            </q>
            <div className="flex justify-center lg:block">
              <div className="flex flex-col items-center">
                <p className="my-4 department text-primary-grey-neutral text-base mb-0">
                  Head of IT,
                </p>
                <p className="my-4 company text-primary-grey-neutral font-semibold text-base">
                  Crown Oil
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 text-center px-4 pb-8">
            <q>
              <span className="text-primary-grey-neutral text-base">
                The cyber security threats are constantly changing and as such
                our requirements are like shifting goal posts, we rely on
                Incommsec to help us meet the challenges and help keep us safe.
              </span>
            </q>
            <div className="flex justify-center lg:block">
              <div className="flex flex-col items-center">
                <p className="my-4 department text-primary-grey-neutral text-base mb-0">
                  Head of IT,
                </p>
                <p className="my-4 company text-primary-grey-neutral font-semibold text-base">
                  Crown Oil
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 text-center px-4 pb-8">
            <q>
              <span className="text-primary-grey-neutral text-base">
                The cyber security threats are constantly changing and as such
                our requirements are like shifting goal posts, we rely on
                Incommsec to help us meet the challenges and help keep us safe.
              </span>
            </q>
            <div className="flex justify-center lg:block">
              <div className="flex flex-col items-center">
                <p className="my-4 department text-primary-grey-neutral text-base mb-0">
                  Head of IT,
                </p>
                <p className="my-4 company text-primary-grey-neutral font-semibold text-base">
                  Crown Oil
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
