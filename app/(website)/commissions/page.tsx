import Pricelist from "@/app/components/Pricelist";
import ReviewSlider from "@/app/components/ReviewSlider";
import { getCommissions } from "@/sanity/sanity-utils";
import Link from "next/link";
import React from "react";
import { HiLockClosed, HiLockOpen } from "react-icons/hi";

//api call to get the reviews from sanity

async function Commissions() {
  const { subtitle, reviews, pricelist } = await getCommissions();

  return (
    <div className="flex h-full w-full flex-col items-center text-xl text-white">
      <div className="mb-8 flex flex-col items-center justify-center pt-2 text-lg opacity-100 lg:text-xl">
        {subtitle ? (
          <div className="flex flex-col items-center">
            <Link href={"/contacts"}>
              <div className="flex flex-row items-center justify-center gap-2 rounded-md bg-custom_gray-400 px-10 hover:bg-custom_gray-500">
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
      </div>
      <Pricelist prices={pricelist} />
      {subtitle ? (
        <div className="mt-8 text-custom_gray-300">
          For more info or bigger projects contact me{" "}
          <Link href={"/contacts"} className="hover:text-white">
            here
          </Link>
        </div>
      ) : (
        ""
      )}

      {reviews ? (
        <div className="my-8 w-full">
          <ReviewSlider reviews={reviews}></ReviewSlider>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Commissions;
