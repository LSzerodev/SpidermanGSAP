import { CiPlay1 } from "react-icons/ci";

export function Play() {
  return (
    <div>
      <a
        href=""
        className="flex w-[142px] h-[142px] sm:w-[100px] sm:h-[100px]
            md:w-[120px] md:h-[120px]
     lg:w-[142px] lg:h-[142px]  bg-[rgba(35,44,62,0.5)] backdrop-blur-[5px] rounded-full justify-center items-center cursor-pointer shadow-[0_4px_32px_rgba(0,0,0,0.5)]"
      >
        <CiPlay1 size={36} />
      </a>
    </div>
  );
}
