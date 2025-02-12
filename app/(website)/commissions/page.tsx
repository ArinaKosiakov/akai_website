import Pricelist from "@/app/components/Pricelist";
import ReviewSlider from "@/app/components/ReviewSlider";
import { getCommissions } from "@/sanity/sanity-utils";
import { review } from "@/sanity/schemas/reviews";
import Link from "next/link";
import React from "react";
import { HiLockClosed, HiLockOpen } from "react-icons/hi";

//api call to get the reviews from sanity

async function Commissions() {
  const { subtitle, reviews, pricelist } = await getCommissions();

  return (
    <div className="flex h-full w-full flex-col items-center font-karla text-xl text-white">
      <div className="mb-8 flex flex-col items-center justify-center pt-2 text-lg opacity-100 lg:text-xl">
        {subtitle ? (
          <div className="flex flex-col items-center">
            <Link href={"/contacts"}>
              <div className="flex flex-row items-center justify-center gap-2 rounded-md bg-akai-700 px-10 hover:bg-akai-500">
                Commissions open <HiLockOpen />
              </div>
            </Link>
            {/* <div className="text-sm">
              For more info contact me
              <Link href="/contacts">
                <span className="text-akai-300 hover:text-akai-200"> here</span>
              </Link>
            </div> */}
          </div>
        ) : (
          <div className="flex flex-row items-center justify-center gap-2 text-custom_gray-400">
            Commissions closed <HiLockClosed />
          </div>
        )}
      </div>{" "}
      {subtitle ? (
        <div className="mb-3 text-custom_gray-300">
          For more info or bigger projects don&apos;t hesitate to contact me!
        </div>
      ) : (
        ""
      )}
      <Pricelist prices={pricelist} />
      {!reviews ? (
        <div className="w-full">
          <ReviewSlider reviews={reviews}></ReviewSlider>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Commissions;
