"use client";

import { useState } from "react";

export default function Buttons() {
  const [link, setLink] = useState();
  return (
    <div className="flex flex-col gap-5">
      <div className="flex">
        <a
          href="https://firebasestorage.googleapis.com/v0/b/at-the-beach-4-you-nj.appspot.com/o/Sample%20Pay%20Plan%20%20.doc?alt=media&amp;token=f57c60dd-4a14-44bd-94dd-ab05d7cb603c"
          target="_blank"
          className=" bg-blue-600 text-white py-2 px-4 rounded-md flex gap-2 items-center"
        >
          <img src="/document.png" className="w-5" alt="" />
          Payment plan sample
        </a>
      </div>
      <div className="flex">
        <a
          href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fat-the-beach-4-you-nj.appspot.com%2Fo%2FSample%2520Lease%2520.doc%3Falt%3Dmedia%26token%3Dcb556a73-4fc1-49d2-8208-ac700ce5006a&wdOrigin=BROWSELINK"
          target="_blank"
          className=" bg-[#17a2bb] text-white py-2 px-4 rounded-md flex gap-2 items-center"
        >
          <img src="/document.png" className="w-5" alt="" />
          Lease sample
        </a>
      </div>

      <div>
        <div className="bg-[#fff3cd] p-2 rounded-md text-orange-400">
          <p className=" font-bold my-1">Notes:</p>
          <p>All rentals have $100 cleaning fee and $100 utility fee.</p>
          <p>Beach badges are not included in rentals.</p>
        </div>
      </div>
    </div>
  );
}

/// fff3cd
