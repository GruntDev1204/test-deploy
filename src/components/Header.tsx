import { Link } from "react-router-dom"

const Header = () => {
  const github: string = "https://github.com/trung1204"

  return (
    <div className="header">
      <div className="container">
        <div className="header-left">
          <i className="fa-solid fa-book medium mr-2 "></i>{" "}
          <p className="medium">
            {" "}
            <Link to="" className="link">
              Library Project{" "}
            </Link>{" "}
          </p>
        </div>
        <div className="header-right">
          <button className="button">
            <Link to="sign-up">
              {" "}
              <i className="fa-solid fa-user-plus"></i> Register{" "}
            </Link>
          </button>
          <button className="button">
            <Link to="login">
              {" "}
              <i className="fa-solid fa-user"></i> Login{" "}
            </Link>
          </button>
          <button className="button">
            {" "}
            <i className="fa-brands fa-github mr-1"></i>{" "}
            <a href={github} target="_blank">
              {" "}
              Github
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
