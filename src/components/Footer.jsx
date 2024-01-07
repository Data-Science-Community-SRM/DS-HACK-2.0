const Footer = () => {
  return (
    <footer className="footer px-10 py-4 text-base-content bg-secondary">
      <aside className="items-center grid-flow-col gap-4">
        <img src="/DSHackLogo.png" width={80}/>
        <img src="/DSCLogo.png" width={200}/>
      </aside> 
      <nav className="md:place-self-center md:justify-self-end ">
        <div className="grid grid-flow-col gap-4 items-center">
          <a href=""><img src="/socials/discord.png" width={40}/></a>
          <a href=""><img src="/socials/instagram.png" width={30}/></a>
          <a href=""><img src="/socials/facebook.png" width={30}/></a>
          <a href=""><img src="/socials/twitter.png" width={30}/></a>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
