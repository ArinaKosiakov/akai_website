import Pricelist from "@/app/components/Pricelist";
import ReviewSlider from "@/app/components/ReviewSlider";
import { getCommissions } from "@/sanity/sanity-utils";
import Link from "next/link";
import React from "react";
import { HiLockClosed, HiLockOpen } from "react-icons/hi";

//api call to get the reviews from sanity

async function Commissions() {
  const { title, subtitle, reviews, pricelist } = await getCommissions();

  return (
    <div className="flex h-full w-full flex-col items-center text-xl text-white">
      <div className="flex flex-col items-center justify-center pb-10 pt-2 text-lg opacity-100 lg:text-xl">
        {subtitle ? (
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center justify-center gap-2">
              Commissions open <HiLockOpen />
            </div>
            {/* <div className="text-sm">
              For more info contact me
              <Link href="/contacts">
                <span className="text-akai-300 hover:text-akai-200"> here</span>
              </Link>
            </div> */}
          </div>
        ) : (
          <div className="flex flex-row items-center justify-center gap-2 pb-10 pt-2 text-lg opacity-30 lg:text-xl">
            Commissions closed <HiLockClosed />
          </div>
        )}
      </div>
      <Pricelist prices={pricelist} />
      <div className="mt-8 w-full">
        <ReviewSlider reviews={reviews}></ReviewSlider>
      </div>
    </div>
  );
}
export default Commissions;
