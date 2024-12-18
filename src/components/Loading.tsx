import { logo } from "../assets/variable";

export default function Loading() {
    return (
       <div className="loading ">
         <img src={logo} alt="logo" className="logo" />
       </div>
    )
}