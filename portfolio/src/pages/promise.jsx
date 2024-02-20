export default function Promise() {
  return (
    <div className="flex gap-[10px] p-[20px]">
      {users &&
        users?.map((user, index) => {
          return (
            <div
              key={index}
              className="border-[1px] border-black rounded w-[200px] h-[300px]"
            >
              <div>
                {user?.name?.first} {user?.name?.last}
              </div>
              <img className="w-full mt-2" src={user?.picture?.medium} alt="" />
            </div>
          );
        })}
    </div>
  );
}
