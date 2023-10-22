import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary-white-p lg:px-10">
      <div className="py-8 mx-8">
        <div className="grid grid-rows-1 lg:grid-cols-5 gap-8 lg:gap-0">
          <div>
            <p className="lg:p-4 lg:pb-0 pb-2 text-primary-grey-neutral-p3 text-base font-medium">
              Ask a question
            </p>
            <p className="lg:p-4 text-primary-grey-neutral-p3 ">
              <a className="text-base" href="mailto:mike@incommsec.com">
                mike@incommsec.com
              </a>
            </p>
          </div>
          <div>
            <p className="lg:p-4 lg:pb-0 pb-2 text-primary-grey-neutral-p3 font-medium text-base ">
              Registered address
            </p>
            <p className="lg:p-4 text-primary-grey-neutral-p3 text-base">
              19/21 Swan Street, West Malling, ME19 6JU
            </p>
          </div>
          <div>
            <p className="lg:p-4 lg:pb-0 pb-2 text-primary-grey-neutral-p3 text-base font-medium">
              Telephone
            </p>
            <p className="lg:p-4 text-primary-grey-neutral-p3 text-base">
              <a href="tel:+442033686301">+44 (0)20 3368 6301</a>
            </p>
          </div>
          <div>
            <div>
              <p className="lg:p-4 lg:pb-0 pb-2 text-primary-grey-neutral-p3 text-base font-medium">
                Connect
              </p>
            </div>
            <p className="lg:p-4 text-primary-grey-neutral-p3 text-base">
              <a
                href="https://www.linkedin.com/company/incommsec-limited/"
                target="_blank"
              >
                Follow us on LinkedIn
              </a>
            </p>
          </div>
          <p className="lg:p-4 lg:pb-0  text-primary-grey-neutral-p3 text-base font-medium">
            Privacy and cookies
          </p>
        </div>
      </div>
    </footer>
  );
}
