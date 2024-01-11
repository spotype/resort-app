import features from "@/utils/features";

export default function Features() {
  const feature = features();
  return (
    <div className="bg-gray-100 py-16">
      <div className="mx-auto flex w-11/12 lg:w-[750px]">
        <div className="w-full flex flex-col">
          <div className="flex w-full flex-col justify-center items-center ">
            <h2 className="font-bold text-2xl text-red-600 my-16 ">
              Features and Amenities
            </h2>

            <div className="md:w-full">
              <div className="grid grid-cols-2 gap-10 items-start md:grid-cols-4 md:grid-rows-3 md:w-full">
                {feature.map(function (res) {
                  return (
                    <div
                      key={res.title}
                      className={`${res.classNames} flex flex-col gap-3 items-center`}
                    >
                      <div>
                        <img src={res.url} className="w-10" alt="" />
                      </div>
                      <div className="flex">
                        <span className="text-center text-gray-600 md:w-36 md:text-sm">
                          {res.title}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
