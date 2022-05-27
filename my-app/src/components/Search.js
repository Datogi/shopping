import Likes from "./Likes";

export default function Search(wishList) {
  return (
    <div className="flex justify-between">
      <div class="flex relative w-8 h-8 ml-2 justify-center items-center m-1 mr-2 text-xl rounded-full text-white">
        <img
          class="rounded-full"
          alt="A"
          src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
        />
      </div>

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mr-3 absolute top-0 right-0 "
          onClick={() => {
            document.querySelector(".wish").classList.contains("hidden")
              ? document.querySelector(".wish").classList.remove("hidden")
              : document.querySelector(".wish").classList.add("hidden");
          }}
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>

        <div className="border-2  hidden wish absolute top-10 right-2 z-50 bg-white">
          {wishList?.wishList?.map((el) => {
            return <Likes el={el} />;
          })}
        </div>
      </div>
    </div>
  );
}
