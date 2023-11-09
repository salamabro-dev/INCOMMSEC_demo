import React from "react";

function List() {
  return (
    <section className="p-12">
      <div className="text-center md:px-12 pb-12">
        <h2 className="text-[#434343]">
          Foundation of an advanced cyber resilience strategy
        </h2>
      </div>
      <div className="mb-16 md:mx-16  list-container">
        <div className="md:py-4 md:px-12">
          <p className="list-title text-xl md:text-2xl pb-4">
            Using BrightCloud
          </p>
          <p className="text-lg md:text-2xl pb-8 text-primary-grey-p">
            World class threat intelligence services.{" "}
          </p>
          <ul className="custom-list">
            <li className="pb-8 text-primary-grey-p flex items-center">
              Detects, analyses, scores, categorises and predicts endpoint
              threats in real time.
            </li>
            <li className="pb-8 text-primary-grey-p flex items-center">
              Combining real time intelligence with advanced machine learning
              and behaviour heuristics.
            </li>
            <li className="last:pb-0 text-primary-grey-p flex items-center">
              Protect your network against multiple malicious attacks and
              zero-day threats.
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-16 list-container md:ml-[10rem]">
        <div className="md:py-4 md:px-12">
          <p className="list-title text-xl pb-4 md:text-2xl">
            Constant protection
          </p>
          <p className="text-lg md:text-2xl pb-8 text-primary-grey-p">
            World class threat intelligence services.{" "}
          </p>
          <ul className="custom-list">
            <li className="pb-8 text-primary-grey-p flex items-center">
              Detects, analyses, scores, categorises and predicts endpoint
              threats in real time.
            </li>
            <li className="pb-8 text-primary-grey-p flex items-center">
              Combining real time intelligence with advanced machine learning
              and behaviour heuristics.
            </li>
            <li className="last:pb-0 text-primary-grey-p flex items-center">
              Protect your network against multiple malicious attacks and
              zero-day threats.
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-16 md:mx-16  list-container">
        <div className="md:py-4 md:px-12">
          <p className="list-title text-xl pb-4 md:text-2xl">
            Using BrightCloud
          </p>
          <p className="text-lg md:text-2xl pb-8 text-primary-grey-p">
            World class threat intelligence services.{" "}
          </p>
          <ul className="custom-list">
            <li className="pb-8 text-primary-grey-p flex items-center">
              Detects, analyses, scores, categorises and predicts endpoint
              threats in real time.
            </li>
            <li className="pb-8 text-primary-grey-p flex items-center">
              Combining real time intelligence with advanced machine learning
              and behaviour heuristics.
            </li>
            <li className="last:pb-0 text-primary-grey-p flex items-center">
              Protect your network against multiple malicious attacks and
              zero-day threats.
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center my-8 ">
        <button className="py-4 border rounded-full border-primary-blue-p text-primary-blue-p px-10 bg-white hover:bg-primary-grey-p hover:text-white duration-300 ease-in-out ">
          Book a free consultation
        </button>
      </div>
    </section>
  );
}

export default List;
