import React from "react";
import Image from "next/image";

function HowWeWork() {
  return (
    <section className="bg-primary-white-p">
      <div className="text-center pt-8 text-primary-blue-p2">
        <h2 className="py-2 banner-heading pb-4">How we will work with you</h2>
      </div>
      <div className="mx-2 ">
        <div class="image-container flex justify-center object-cover">
          <div>
            <Image
              src="/laptop.png"
              width={350}
              height={100}
              unoptimized={true}
              className="rounded-[70px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
