const Footer = () => {
  return (
    <footer className="footer px-10 py-4 text-base-content bg-secondary">
      <aside className="items-center grid-flow-col gap-10 w-full md:justify-start justify-around">
        <img src="/DSHackLogo.png" width={80} />
        <img src="/DSCLogo.png" width={200} />
      </aside>
      <div className="md:place-self-center md:justify-self-end w-full">
        <div className="w-full flex flex-row items-center md:justify-end gap-5 justify-around">
          <a href="https://discord.gg/JDEEYWThGX">
            <img src="/socials/discord.png" width={40} />
          </a>
          <a href="https://www.instagram.com/dscommunity_srm/">
            <img src="/socials/instagram.png" width={30} />
          </a>
          <a href="">
            <img src="/socials/facebook.png" width={30} />
          </a>
          <a href="https://twitter.com/dscommunitysrm">
            <img src="/socials/twitter.png" width={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
