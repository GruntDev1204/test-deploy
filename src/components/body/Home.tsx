import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import Trending from "./active/Trending"
import Popular from "./active/Popular"
import New from "./active/New"

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [turnOnSlide, setTurnOnSlide] = useState<boolean>(true)
  const [openMenu, setOpenMenu] = useState<boolean>(true)

  const videos = [
    "https://firebasestorage.googleapis.com/v0/b/trung1204-bdc27.appspot.com/o/lib_management%2Fassets%2Fvideo-slide%2F6114591206773.mp4?alt=media&token=6dccbcd7-ff6d-45a9-a63e-3b46563e7a71.mp4",
    "https://firebasestorage.googleapis.com/v0/b/trung1204-bdc27.appspot.com/o/lib_management%2Fassets%2Fvideo-slide%2F6114591250078.mp4?alt=media&token=c9de6ae5-6bf2-4032-adba-4d6d79e89f2c.mp4",
    "https://firebasestorage.googleapis.com/v0/b/trung1204-bdc27.appspot.com/o/lib_management%2Fassets%2Fvideo-slide%2F6136327531813.mp4?alt=media&token=c55bf771-901d-4e5e-86aa-5b1a17e3d049.mp4",
    "https://firebasestorage.googleapis.com/v0/b/trung1204-bdc27.appspot.com/o/lib_management%2Fassets%2Fvideo-slide%2F6136327644145.mp4?alt=media&token=15d85c87-07c4-4f98-9973-2265ec44eb78.mp4",
    "https://firebasestorage.googleapis.com/v0/b/trung1204-bdc27.appspot.com/o/lib_management%2Fassets%2Fvideo-slide%2Fb%C3%A9o%20qu%C3%A1%20tr%20b%C3%A9ooo.mp4?alt=media&token=153db258-234f-41b6-a2c0-8a483196db91.mp4",
    "https://firebasestorage.googleapis.com/v0/b/trung1204-bdc27.appspot.com/o/lib_management%2Fassets%2Fvideo-slide%2Fgx.mp4?alt=media&token=287d8ce1-cb8f-4ea2-b939-f19d4d7259fc.mp4",
  ]

  const trendingRef = useRef<HTMLDivElement>(null)
  const popularRef = useRef<HTMLDivElement>(null)
  const lastestRef = useRef<HTMLDivElement>(null)



  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const menuOptions = [
    {
      name: "Lastest",
      href: "/#new",
      action: () => scrollToSection(lastestRef),
      icon: <i className="fa-solid fa-square-up-right"></i>,
    },
    {
      name: "Trending",
      href: "/#trending",
      action: () => scrollToSection(trendingRef),
      icon: <i className="fa-solid fa-fire"></i>,
    },
    {
      name: "Popular",
      href: "/#popular",
      action: () => scrollToSection(popularRef),
      icon: <i className="fa-solid fa-star"></i>,
    },
    {
      name: "Favorites",
      href: "/favorites",
      icon: <i className="fa-solid fa-heart"></i>,
    },
    {
      name: "Your Cart",
      href: "/favorites",
      icon: <i className="fa-solid fa-cart-shopping"></i>,
    },
  ]

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  const backVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1) % videos.length)
  }

  const handleSlide = () => {
    setTurnOnSlide(!turnOnSlide)
  }

  const openMenuAction = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <button className="button option-button " onClick={openMenuAction}>
        {" "}
        <i className="fa-solid fa-list medium"></i>
      </button>

      <div
        className="alert alert-form mb-5 p-3"
        style={{ display: openMenu ? "block" : "none" }}
      >
        <div className="row text-center">
          <div className="col-md-2">
            <button className="button small" onClick={handleSlide}>
              Slide :{" "}
              {turnOnSlide ? (
                <>
                  <i className="fa-solid fa-heart"></i>
                </>
              ) : (
                <>
                  <i className="fa-solid fa-heart-crack"></i>
                </>
              )}
            </button>
          </div>
          {menuOptions.map((option, index) => (
            <div className="col-md-2 text-center" key={index}>
              <button
                className="button small"
                onClick={option.action}
                
              >
                {option.icon} {option.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div
        className="alert alert-form"
        style={{ display: turnOnSlide ? "block" : "none" }}
      >
        <div className="row">
          <div className="col-md-6">
            <button className="button mb-2" onClick={backVideo}>
              <i className="fa-solid fa-backward"></i>
            </button>
          </div>
          <div className="col-md-6 flex-end">
            <button className="button mb-2" onClick={nextVideo}>
              <i className="fa-solid fa-forward"></i>
            </button>
          </div>
        </div>
        <div className="slide-container ">
          <div
            className="slider"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {videos.map((video, index) => (
              <div className="slide" key={index}>
                <video controls autoPlay muted>
                  <source src={video} type="video/mp4" />
                  Trình duyệt của bạn không hỗ trợ thẻ video.
                </video>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div ref={lastestRef} id="new">
        <New />
      </div>
      <div ref={trendingRef} id="trending">
        <Trending />
      </div>
      <div ref={popularRef} id="popular">
        <Popular />
      </div>
      
    </>
  )
}

export default Home
