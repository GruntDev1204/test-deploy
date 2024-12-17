

export default function Loading() {
    const logo : string 
    = "https://firebasestorage.googleapis.com/v0/b/trung1204-bdc27.appspot.com/o/lib_management%2Fassets%2Fcircular-logo-book-opening-image-vector-illustration_969863-20439.png?alt=media&token=0c14c298-3f4a-4678-97d9-3eacc39f30e9"

    return (
       <div className="loading ">
         <img src={logo} alt="logo" className="logo" />
       </div>
    )
}