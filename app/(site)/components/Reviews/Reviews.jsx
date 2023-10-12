import React from "react";

function Reviews() {
  return (
    <div className="grid bg-primary-white-p pb-8 ">
      <div className="col-span-full flex justify-center tracking-[3px] text-primary-grey-p py-12 text-center px-4 ">
        <h2>What our customer say</h2>
      </div>
      <div className=" px-4 md:px-8 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-4 text-center px-4 py-4">
            <q>
              <span>
                The cyber security threats are constantly changing and as such
                our requirements are like shifting goal posts, we rely on
                Incommsec to help us meet the challenges and help keep us safe
              </span>
            </q>
            <div className="my-4 department text-grey-neutral">Head of IT</div>
            <div className="my-4 company text-grey-neutral font-semibold">
              Crown Oil
            </div>
          </div>
          <div className="md:col-span-4 text-center px-4 py-4">
            <q>
              <span>
                Incommsec has set a bar for security. Its products and services
                integrate seamlessly.
              </span>
            </q>
            <div className="my-4 department text-grey-neutral">
              Daniel, Information Technology Manager
            </div>
            <div className="my-4 company text-grey-neutral font-semibold">
              Sophos
            </div>
          </div>
          <div className="md:col-span-4 text-center px-4 py-4">
            <q>
              <span>
                Switching to Incommsec was a simple transition and all the work
                was carried out within a week.
              </span>
            </q>
            <div className="my-4 department text-grey-neutral ">
              Rene, Head of Information Architecture
            </div>
            <strong className="my-4 company text-grey-neutral font-semibold">
              Cisco
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
