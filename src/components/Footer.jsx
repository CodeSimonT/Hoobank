import { logo } from "../assets"
import { socialMedia } from "../constants"
import styles from "../style"
import { footerLinks } from "../constants"

function Footer() {
  return (
    <section className={``}>
      <div className="flex md:flex-row flex-col text-white font-poppins">
        <div className="flex flex-col md:py-0 py-6">
        <img src={logo} alt="" className="w-[210px] " />
        <p className={`${styles.paragraph} max-w-[380px] p-[30px]`}>A new way to make the payments easy, 
          reliable and secure.
        </p>
        </div>

        <div className="flex flex-row flex-1 justify-center w-full md:ml-20 ml-0">
          {footerLinks.map((footer,index) => (
            <div key={footer.index} className='flex flex-1 flex-col md:items-start items-center'>
              <h1 className='text-[18px] '>
                {footer.title}
              </h1>
              <ul className={`${styles.paragraph} text-[16px] pt-6 `}>
                {footer.links.map((item) => (
                  <li key={item.index} className='md:items-start items-center md:text-start text-center'>
                    <a href={item.link}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between py-7 border-t-[1px] border-[bg-dimblack} mt-10">
        <p className={`${styles.paragraph} text-[18px]`}>Copyright @ 2023 Hoobank. All Right Reserved </p>
        <div className="flex flex-row">
          {socialMedia.map((social,index) => (
            <div key={social.id} className={`${styles.flexCenter} ${index !== socialMedia.length - 1 ? 'pr-[30px]' : 'pr-[0]'}`}>
              <a href={social.link}>
                <img src={social.icon} alt={social.id} id={social.link} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer