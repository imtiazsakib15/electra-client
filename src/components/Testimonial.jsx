const Testimonial = () => {
  return (
    <div>
      <div className="overflow-hidden dark:bg-gray-800">
        <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <h2 className="text-4xl font-semibold dark:text-white text-center">
            Testimonials
          </h2>
          <div className="border-2 border-blue-800 w-28 mt-1 mx-auto"></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div className="flex h-auto border rounded-xl dark:border-0">
              <div className="flex flex-col bg-white rounded-xl dark:bg-slate-900">
                <div className="flex-auto p-4 md:p-6">
                  <p className="text-base italic md:text-lg text-gray-800 dark:text-gray-200">
                    &rdquo;I&apos;ve been shopping for electronics online for
                    years, and your store stands out as one of the best. The
                    selection is fantastic, and the prices are competitive.
                    Thanks for making my tech shopping experience so
                    enjoyable!&rdquo;
                  </p>
                </div>

                <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-slate-700">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Image Description"
                      />
                    </div>

                    <div className="grow ml-3">
                      <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                        Josh Tyson
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Product Manager | Capsule
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-auto border rounded-xl dark:border-0">
              <div className="flex flex-col bg-white rounded-xl dark:bg-slate-900">
                <div className="flex-auto p-4 md:p-6">
                  <p className="text-base italic md:text-lg text-gray-800 dark:text-gray-200">
                    &rdquo;I was a bit skeptical about buying electronics
                    online, but your store exceeded my expectations. The
                    delivery was fast, the product arrived in perfect condition,
                    and I received excellent support when I had a question. I
                    highly recommend your services.&rdquo;
                  </p>
                </div>

                <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-slate-700">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Image Description"
                      />
                    </div>

                    <div className="grow ml-3">
                      <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                        Luisa
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Senior Director of Operations | Fitbit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-auto border rounded-xl dark:border-0">
              <div className="flex flex-col bg-white rounded-xl dark:bg-slate-900">
                <div className="flex-auto p-4 md:p-6">
                  <p className="text-base italic md:text-lg text-gray-800 dark:text-gray-200">
                    &rdquo;Your store has been a lifesaver for my home office
                    setup. I found all the essential electronics I needed in one
                    place. The user-friendly website and fast delivery have made
                    you my preferred tech shopping destination.&rdquo;
                  </p>
                </div>

                <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-slate-700">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                        src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                        alt="Image Description"
                      />
                    </div>

                    <div className="grow ml-3">
                      <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                        Alisa Williams
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Entrepreneur | Happy customer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
