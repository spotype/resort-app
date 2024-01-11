import house from "@/utils/house";
import Link from "next/link";

export default function page() {
  const data = house();
  return (
    <div>
      <div>
        <div className="flex flex-col gap-24 items-center">
          {data.map((res: any) => {
            return (
              <div className="bg-white shadow-lg rounded-xl">
                <div>
                  <img src={res.image} alt="" className=" rounded-t-xl" />
                  <div className="p-5">
                    <div className="py-4">
                      <span className=" font-bold text-2xl">{res.title}</span>

                      <div className="flex flex-col gap-5 mt-3">
                        <div className="flex gap-2">
                          <img src="/location.svg" className="w-5" alt="" />
                          <span>Farragut Ave Seaside Park, NJ</span>
                        </div>

                        <div className="flex w-full justify-between items-center">
                          <div className="flex flex-col items-center">
                            <img src="/apartment.svg" className="w-8" alt="" />
                            <span>House</span>
                          </div>

                          <div className="w-[2px] h-10 bg-slate-400"></div>

                          <div className="flex flex-col items-center">
                            <img src="/user.svg" className="w-8" alt="" />
                            <span>House</span>
                          </div>

                          <div className="w-[2px] h-10 bg-slate-400"></div>

                          <div className="flex flex-col items-center">
                            <img src="/bed.svg" className="w-8" alt="" />
                            <span>House</span>
                          </div>

                          <div className="w-[2px] h-10 bg-slate-400"></div>

                          <div className="flex flex-col items-center">
                            <img src="/birthroom.svg" className="w-8" alt="" />
                            <span>House</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div>
                          <span className="font-bold text-lg">From</span>

                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex flex-col gap-2">
                              <span className="font-bold text-xl text-blue-900">
                                {res.price}
                              </span>
                              <span className="font-semibold">
                                Additional charges may apply
                              </span>
                            </div>

                            <div>
                              <Link
                                href={""}
                                className="py-4 px-6 bg-blue-600 font-bold text-white rounded-lg"
                              >
                                View deal
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
