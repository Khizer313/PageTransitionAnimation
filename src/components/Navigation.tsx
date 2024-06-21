
import TransitionLink from "./TransitionLink"

const Navigation = () => {
  return (
    <>
      <nav className=" w-full flex flex-grow place-items-center justify-between">
        <h1 className="text-3xl tracking-tight">WebPage</h1>
        <div className="flex gap-5">
            <TransitionLink href="/" label="Home"  />
            <TransitionLink href="/work" label="Work"  />
            <TransitionLink href="/about" label="About"  />
        </div>
      </nav>
    </>
  )
}

export default Navigation
