export function Cta() {
  return (
    //   className="w-[220px] h-[54px] bg-gradient-to-b from-[rgba(234,29,34,1)] to-[rgba(100,2,4,1)] text-white text-sm italic tracking-[0.2em] flex items-center justify-center shadow-[0_6px_24px_rgba(0,0,0,0.3)] mr-4 mt-4"
    <div
      className=" relative w-[343px] h-[70px] flex justify-center items-center backdrop-blur-[16px] bg-[rgba(35,44,62,0.5)] border border-[rgba(17,25,41,0.5)] rounded-[3px] z-0 shadow-[0_6px_30px_rgba(0,0,0,0.7)] "
      
    >
      <a
        href=""
        className="w-[200px] h-[54px] bg-gradient-to-b from-[rgba(234,29,34,1)] to-[rgba(100,2,4,1)] rounded-[2px] flex justify-center items-center -skew-x-12 absolute -left-8 z-2  "
      >
        <div className="skew-0">
          <span className="text-white font-light  tracking-[0.1em]   leading-none  antialiased">
            PRE ORDER
          </span>
        </div>
      </a>
      <a href="" className="absolute z-2 right-10   ">
        <div>
          <span className="text-white italic tracking-[0.1em] font-light  leading-none antialiased ">
            SEE MORE
          </span>
        </div>
      </a>
    </div>
  );
}
