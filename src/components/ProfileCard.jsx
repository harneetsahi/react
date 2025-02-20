function ProfileCard() {
  return (
    <>
      <div className="bg-white rounded-xl p-10 w-60 mt-8 ml-5 absolute top-0">
        <div className="flex flex-col items-center">
          <img
            src="https://images.pexels.com/photos/7516846/pexels-photo-7516846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="h-30 w-30 rounded-lg"
          />
        </div>
        <div className="mt-5 text-center">
          <h3 className="font-bold">Pup Kaur</h3>
          <p className="text-gray-500 text-sm mt-4">Always ready to go out</p>
          <p className="text-gray-500 text-sm mt-1">Lives in her own world</p>
          <p className="text-gray-500 text-sm mt-2.5">pupkaur@gmail.com</p>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
