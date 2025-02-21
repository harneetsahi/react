function Center() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const todayDate = date.getDate();
  const day = date.getDay();

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <div className="">
        <section className="p-10">
          <p className="text-gray-600 mb-2">
            {weekday[day]}, {todayDate} {months[month]}
          </p>
          <h1 className="font-bold text-2xl">Hello Pup</h1>
        </section>
        <section className="ml-10 p-7 bg-white rounded-xl shadow-lg ">
          <div className="font-semibold text-xl bg-gray-200 p-2 rounded-xl">
            {" "}
            {weekday[day]}, {todayDate} {months[month]} {year}
          </div>
          <div>
            <div className="flex p-5 font-medium text-lg border-b-1 border-gray-300">
              <div className=" ">
                <h3 className="border-r-1 border-gray-300 pr-5">11:30 AM</h3>
              </div>
              <div className="pl-5">
                <p>UX Webinar</p>
              </div>
            </div>
            <div className="flex p-5 font-medium text-lg border-b-1 border-gray-300">
              <div className=" ">
                <h3 className="border-r-1 border-gray-300 pr-5">11:30 AM</h3>
              </div>
              <div className="pl-5">
                <p>Huddle</p>
              </div>
            </div>
            <div className="flex p-5 font-medium text-lg border-b-1 border-gray-300">
              <div className=" ">
                <h3 className="border-r-1 border-gray-300 pr-5">11:30 AM</h3>
              </div>
              <div className="pl-5">
                <p>GSoc Webinar</p>
              </div>
            </div>
            <div className="flex p-5 font-medium text-lg border-b-1 border-gray-300">
              <div className=" ">
                <h3 className="border-r-1 border-gray-300 pr-5">11:30 AM</h3>
              </div>
              <div className="pl-5">
                <p>Meet up</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Center;
