import Calendar from "../icons/Calendar";

function MeetingCard() {
  return (
    <>
      <div className=" shadow-lg grid grid-cols-2 grid-rows-2 gap-2 bg-white rounded-xl p-4 lg:mt-36 lg:mr-10 mt-15 h-50 place-items-center">
        <div className="flex flex-col items-center text-center gap-2 ">
          <div>
            <Calendar />
          </div>
          <p className="text-sm">Schedule</p>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <div>
            <Calendar />
          </div>
          <p className="text-sm">Join</p>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <div>
            <Calendar />
          </div>
          <p className="text-sm">All Meetings</p>
        </div>
      </div>
    </>
  );
}

export default MeetingCard;
