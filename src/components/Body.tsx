import { Outlet } from "react-router-dom"

export default function Body() {
  return (
    <div className="body container">
      <Outlet />
    </div>
  )
}
