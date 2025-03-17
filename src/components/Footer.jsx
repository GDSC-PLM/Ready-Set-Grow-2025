const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-[#cfcfcf] p-[150px]">
      <div className="">
        <img src="/images/icons/gdsc-footer.svg" alt="gdsc banner footer" />
        <div className="flex space-x-1 mt-2">
          <a
            href="https://www.facebook.com/gdsc.haribon"
            target="_blank"
            className="hover:opacity-60 transition-opacity duration-300"
          >
            <img
              src="/images/icons/fb-icon.svg"
              alt="facebook icon"
              className="h-[24px] w-auto"
            />
          </a>
          <a
            href="https://www.instagram.com/gdsc_plm/"
            target="_blank"
            className="hover:opacity-60 transition-opacity duration-300"
          >
            <img
              src="/images/icons/ig-icon.svg"
              alt="instagram icon"
              className="h-[24px] w-auto"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/gdsc-plm/posts/?feedView=all"
            target="_blank"
            className="hover:opacity-60 transition-opacity duration-300"
          >
            <img
              src="/images/icons/linkedin-icon.svg"
              alt="linkedin icon"
              className="h-[24px] w-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
