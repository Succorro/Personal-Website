import ContactForm from "./ContactForm"

function Contact() {
  return (
    <div className="flex justify-center items-center px-16 md:py-0 bg-white max-md:px-5">
      <div className="mt-5 w-full max-w-[971px] max-md:mt-0 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:mx-10 ">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-0">
              <h1 className="text-5xl font-bold tracking-tight whitespace-nowrap leading-[52.08px] text-slate-800">
                Get in Touch
              </h1>
              <p className="mt-10 text-base leading-7 text-slate-900 text-opacity-40">
                You can reach me via email below:
              </p>
              <div className="flex gap-3.5 justify-between mt-7 text-lg whitespace-nowrap">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="#3F3F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="flex-auto font-medium leading-[156%] text-slate-800">
                    <a href="mailto:stevengbmv@gmail.com">stevengbmv@gmail.com</a>
                </p>
              </div>
              <p className="bg-slate-200 p-0.5 mt-10 rounded-xl w-full"/>
              <h1 className="mt-12 text-2xl font-medium leading-8 whitespace-nowrap text-slate-800 max-md:mt-10">
                Looking forward to hearing from you
              </h1>
              <img
                loading="lazy"
                srcSet="/Profile-Image.jpg"
                className="mt-11 w-full object-cover h-96"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow font-bold max-md:mt-10 max-md:max-w-full">
              <h1 className="text-5xl tracking-tight leading-[52.08px] text-slate-800 max-md:max-w-full">
                Send Me A Message
              </h1>
              <div className="mt-10 text-base leading-7 text-slate-900 text-opacity-40 max-md:max-w-full">
                I&apos;m always looking to collaborage on a great project.
              </div>
              <ContactForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact