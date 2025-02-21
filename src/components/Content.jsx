import Center from "./cards/Center";
import MeetingCard from "./cards/MeetingCard";
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
        <div className="flex-1 flex lg:flex-row flex-col lg:items-start items-center ">
          <div className="flex 1">
            <ProfileCard />
          </div>
          <div className="  flex-2">
            <Center />
          </div>
          <div className=" flex-1">
            <MeetingCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
