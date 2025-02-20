import ProfileCard from "./ProfileCard";

function Content() {
  return (
    <>
      <div className="bg-yellow-200">
        <div className="bg-orange-300 ">
          <img
            src="https://images.pexels.com/photos/268261/pexels-photo-268261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="object-cover w-screen h-50"
          />
        </div>
        <div className=" bg-blue-200 h-screen w-screen p-4 relative">
          <ProfileCard />
        </div>
      </div>
    </>
  );
}

export default Content;
