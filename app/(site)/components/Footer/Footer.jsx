import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary-white-p lg:px-10">
      <div className="py-8 mx-8">
        <div className="flex flex-col lg:flex-row lg:justify-evenly gap-8 lg:gap-0">
          <div>
            <p className="lg:p-4 lg:pb-0 pb-2 text-primary-grey-neutral-p3 text-base font-medium">
              Ask a question
            </p>
            <p className="lg:p-4 text-primary-grey-neutral-p3 ">
              <a
                className="text-base hover:text-primary-blue-p focus:text-primary-blue-p"
                href="mailto:enquiries@incommsec.com"
              >
                enquiries@incommsec.com
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
              <a
                className="hover:text-primary-blue-p focus:text-primary-blue-p"
                href="tel:+442033686301"
              >
                +44 (0)20 3368 6301
              </a>
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
                className="hover:text-primary-blue-p focus:text-primary-blue-p"
                href="https://www.linkedin.com/company/incommsec-limited/"
                target="_blank"
              >
                Follow us on LinkedIn
              </a>
            </p>
          </div>
          <div>
            <p className="lg:p-4 lg:pb-0 pb-2 text-primary-grey-neutral-p3 text-base font-medium">
              Privacy and cookies
            </p>
            <p className="lg:p-4 text-primary-grey-neutral-p3 text-base">
              <a
                className="hover:text-primary-blue-p focus:text-primary-blue-p"
                href="/"
              >
                Our Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
