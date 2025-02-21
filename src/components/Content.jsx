import ProfileCard from "./cards/ProfileCard";

function Content() {
  return (
    <>
      <div className="bg-yellow-200 flex-1 flex flex-col">
        <div className="bg-orange-300 ">
          <img
            src="https://images.pexels.com/photos/268261/pexels-photo-268261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="object-cover w-screen h-30"
          />
        </div>
        <div className="flex-1 flex flex-col items-center lg:place-content-start lg:grid lg:grid-cols-12">
          <div className="col-span-4 xl:col-span-3">
            <ProfileCard />
          </div>
          <div className="flex-3 bg-amber-50 col-span-5 xl:col-span-6 ">
            center
          </div>
          <div className="flex-1 bg-amber-200 col-span-3">right</div>
        </div>
      </div>
    </>
  );
}

export default Content;
