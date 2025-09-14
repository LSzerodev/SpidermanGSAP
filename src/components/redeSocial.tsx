import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

type SocialProp = {
    ref: React.Ref<HTMLDivElement> | undefined
}


export function Social( {ref}: SocialProp ){
    return(
        <div className="flex flex-col gap-16" ref={ref}>
            <a href="" className="opacity-0"><FaFacebookF size={20} color="#F8FBFF"/></a>
            <a href=""className="opacity-0"><FaInstagram size={20} color="#F8FBFF"/></a>
            <a href=""className="opacity-0"><FaYoutube size={20} color="#F8FBFF"/></a>
            <a href=""><FaTwitter size={20} color="#F8FBFF"/></a>
        </div>
    )
}