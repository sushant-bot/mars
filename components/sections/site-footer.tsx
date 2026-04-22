import { Footer7 } from "@/components/ui/footer-7"
import { createElement } from "react"
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"

export function SiteFooter() {
  return (
    <Footer7
      logo={{
        url: "/",
        src: "/logo.png",
        alt: "MARS Club logo",
        title: "MARS CLUB",
      }}
      sections={[
        {
          title: "Organization",
          links: [
            { name: "About Us", href: "/about" },
            { name: "Our Team", href: "/team" },
            { name: "Events & Workshops", href: "/events" },
            { name: "Gallery", href: "/gallery" },
          ],
        },
        {
          title: "Resources",
          links: [
            { name: "Learning Materials", href: "/learning" },
            { name: "Achievements", href: "/achievements" },
          ],
        },
        {
          title: "Connect",
          links: [
            { name: "Contact Us", href: "/contact" },
            { name: "Join MARS", href: "#" },
            { name: "FAQ", href: "#" },
          ],
        },
      ]}
      description="The Mechanical Automation and Robotics Society (MARS) is a student-led organization dedicated to building intelligent machines and empowering future-ready engineers."
      socialLinks={[
        { icon: createElement(FaInstagram, { className: "size-5" }), href: "https://www.instagram.com/mars.adypsoe?igsh=MXZsdDc2NnpvMDMwNQ==", label: "Instagram" },
        { icon: createElement(FaLinkedin, { className: "size-5" }), href: "#", label: "LinkedIn" },
        { icon: createElement(FaGithub, { className: "size-5" }), href: "#", label: "https://github.com/" },
        { icon: createElement(FaTwitter, { className: "size-5" }), href: "#", label: "Twitter" },
      ]}
      copyright={`© ${new Date().getFullYear()} MARS CLUB. All rights reserved.`}
      legalLinks={[
        { name: "Privacy Policy", href: "#" },
        { name: "Terms & Conditions", href: "#" },
      ]}
    />
  )
}

