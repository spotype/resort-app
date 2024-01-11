"use client";
// import Errors from "@/public/error.svg";
export default function notfound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        {/* <Image src={Errors} className=" md:w-96" alt="" /> */}

        <button
          onClick={() => (window.location.href = "/")}
          className="py-3 px-6 bg-black text-white font-bold text-lg rounded-2xl"
        >
          Go To Home
        </button>
      </div>
    </div>
  );
}
