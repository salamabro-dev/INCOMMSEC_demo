import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary-white-p lg:px-10">
      <div className="py-10 mx-8">
        <div className="grid grid-rows-1 lg:grid-cols-5 gap-4">
          <div>
            <div className="p-4 text-primary-grey-neutral-p3 text-lg font-bold">
              Ask a question
            </div>
            <div className="p-4 text-primary-grey-neutral-p3">
              <a className="text-base" href="mailto:mike@incommsec.com">
                mike@incommsec.com
              </a>
            </div>
          </div>
          <div>
            <div className="p-4 text-primary-grey-neutral-p3 text-lg font-bold">
              Registered address
            </div>
            <div className="p-4 text-primary-grey-neutral-p3 text-base">
              19/21 Swan Street, West Malling, ME19 6JU
            </div>
          </div>
          <div>
            <div className="p-4 text-primary-grey-neutral-p3 text-lg font-bold">
              Telephone
            </div>
            <div className="p-4 text-primary-grey-neutral-p3 text-base">
              +44 (0)20 3368 6301
            </div>
          </div>
          <div>
            <div>
              <div className="p-4 text-primary-grey-neutral-p3 text-lg font-bold">
                Connect
              </div>
            </div>
            <div className="p-4 text-primary-grey-neutral-p3 text-base">
              <a
                href="https://www.linkedin.com/company/incommsec-limited/"
                target="_blank"
              >
                Follow us on LinkedIn
              </a>
            </div>
          </div>
          <div className="p-4 text-primary-grey-neutral-p3 text-lg font-bold">
            Privacy and cookies
          </div>
        </div>
      </div>
    </footer>
  );
}
