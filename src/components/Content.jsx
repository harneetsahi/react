import Center from "./cards/Center";
import MeetingCard from "./cards/MeetingCard";
import ProfileCard from "./cards/ProfileCard";

function Content() {
  return (
    <>
      <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-600 h-max xl:max-w-fit">
        <div className="">
          <img
            src="https://images.pexels.com/photos/268261/pexels-photo-268261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="object-cover w-screen h-30"
          />
        </div>
        <div className="flex-1 flex lg:flex-row flex-col lg:items-start  ">
          <div className="lg:flex 1 m-auto lg:m-0 ">
            <ProfileCard />
          </div>
          <div className="lg:flex-2 xl:max-w-250 ">
            <Center />
          </div>
          <div className="lg:flex-1 xl:max-w-90 ">
            <MeetingCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
