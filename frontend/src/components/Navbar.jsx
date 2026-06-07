const Navbar = () => {
  return (
    <main className="text-white px-10 py-5 w-full flex justify-between items-center">
      <section className="left heading pl-4">PORTFOLIO</section>
      <section className="right">
        <ul className="flex gap-5 pr-10">
          <li >Home</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </section>
    </main>
  )
}

export default Navbar