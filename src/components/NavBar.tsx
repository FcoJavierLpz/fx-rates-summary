import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="flex flex-wrap">
      <section className="relative mx-auto">
        <nav className="flex justify-between bg-green-800 text-white w-screen">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <Link className="text-xl font-bold font-heading" to="/">
              Fx Rates Summary
            </Link>
          </div>
        </nav>
      </section>
    </div>
  )
}

export default NavBar
