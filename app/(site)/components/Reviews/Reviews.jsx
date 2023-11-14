import React from "react";
import { getReview } from "../../../../sanity/sanity-utils";

export default async function Reviews() {
  const review = await getReview();
  return (
    <>
      {review.map((info) => (
        <section className="grid bg-primary-white-p pb-4" key={info._id}>
          <div className="col-span-full flex justify-center tracking-[3px] text-primary-grey-p py-12 text-center px-4 ">
            <h2>{info.title}</h2>
          </div>
          <div className=" px-4 md:px-8 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-12">
              {info.reviews.map((item) => (
                <div
                  className="md:col-span-4 text-center px-4 pb-8"
                  key={item._id}
                >
                  <q>
                    <span className="text-primary-grey-neutral text-base">
                      {item.review}
                    </span>
                  </q>
                  <div className="flex justify-center lg:block">
                    <div className="flex flex-col items-center">
                      <p className="my-4 department text-primary-grey-neutral text-base mb-0">
                        {item.company}
                      </p>
                      <p className="my-4 company text-primary-grey-neutral font-semibold text-base">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
