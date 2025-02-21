function ProfileCard() {
  return (
    <>
      <div className="shadow-lg bg-white dark:bg-gray-500 dark:text-white rounded-xl p-7 w-55 lg:ml-20  -translate-y-5 ">
        <div className="flex flex-col items-center">
          <img
            src="https://images.pexels.com/photos/7516846/pexels-photo-7516846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="h-30 w-30 rounded-lg"
          />
        </div>
        <div className="mt-5 text-center">
          <h3 className="font-bold">Pup Kaur</h3>
          <p className="text-gray-500 dark:text-white  text-sm mt-4">
            Always ready to go out
          </p>
          <p className="text-gray-500 dark:text-white  text-sm mt-1">
            Lives in her own world
          </p>
          <p className="text-gray-500  dark:text-white  text-sm mt-2.5">
            pupkaur@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
