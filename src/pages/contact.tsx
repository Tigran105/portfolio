import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Copy, Phone } from "lucide-react";
import Section from "../components/ui/section.tsx";
import Divider from "../components/ui/divider.tsx";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 1500);
      }
    }
  };

  const items = [
    {
      label: "Phone",
      value: "Call or send me a message",
      real: "+37443150200",
      icon: <Phone className="h-6 w-6 text-green-500 dark:text-green-400" />,
      link: "tel:+37443150200",
      delay: 0,
      hasCopy: true,
      copyText: "+37443150200",
    },
    {
      label: "Email",
      value: "Send me an email",
      real: "tigran.sargsyan105@gmail.com",
      icon: <Mail className="h-6 w-6 text-blue-500 dark:text-blue-400" />,
      link: "mailto:tigran.sargsyan105@gmail.com",
      delay: 0.05,
      hasCopy: true,
      copyText: "tigran.sargsyan105@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "Let’s connect professionally",
      icon: <Linkedin className="h-6 w-6 text-[#0A66C2]" />,
      link: "https://www.linkedin.com/in/tigran-sargsyan105/",
      delay: 0.1,
      hasCopy: false,
    },
    {
      label: "GitHub",
      value: "See my code and open-source work",
      icon: <Github className="h-6 w-6 text-foreground" />,
      link: "https://github.com/Tigran105/",
      delay: 0.15,
      hasCopy: false,
    },
  ];

  return (
    <Section
      heading="Contact"
      subheading="If you want to discuss a project, collaborate, or simply connect - feel free to reach out."
      background="section"
    >
      <Divider className="my-6 sm:my-10" />

      <p className="text-center text-foreground/70 mb-8 text-sm sm:text-base">
        I reply quickly. Don't hesitate to reach out.
      </p>

      <div className="space-y-6 sm:space-y-7 md:space-y-8 max-w-5xl mx-auto px-4">
        {items.map((item) => (
          <motion.a
            key={item.label}
            href={item.link}
            target={
              item.label === "Email" || item.label === "Phone"
                ? "_self"
                : "_blank"
            }
            rel={
              item.label === "Email" || item.label === "Phone"
                ? ""
                : "noreferrer"
            }
            aria-label={`Open ${item.label}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: item.delay },
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.12 },
            }}
            whileTap={{
              scale: 0.97,
              transition: { duration: 0.12 },
            }}
            className="
              group flex items-center justify-between gap-3 sm:gap-4
              p-4 sm:p-5 rounded-xl
              border border-border/60 dark:border-white/10
              bg-background/60 dark:bg-[#111]/50
              backdrop-blur-sm
              hover:bg-muted/50 transition cursor-pointer
            "
          >
            {/* left side */}
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                {item.icon}
              </motion.div>

              <div className="flex flex-col">
                <h3 className="text-base sm:text-lg font-semibold group-hover:text-foreground transition">
                  {item.label}
                </h3>
                <p className="text-sm sm:text-base text-foreground/70">
                  {item.value}
                </p>
                {(item.label === "Email" || item.label === "Phone") && (
                  <span className="text-xs text-foreground/50 mt-1">
                    {item.real}
                  </span>
                )}
              </div>
            </div>

            {/* copy button */}
            {item.hasCopy && item.copyText && (
              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  copyToClipboard(
                    item.copyText!,
                    item.label === "Email" ? "email" : "phone"
                  );
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="
                  flex items-center gap-1
                  px-3 py-1 rounded-md text-xs
                  bg-blue-500/20 text-blue-500
                  hover:bg-blue-500/30 transition
                  min-w-[70px] justify-center
                "
              >
                {item.label === "Email" && copied ? "Copied!" : null}
                {item.label === "Phone" && copiedPhone ? "Copied!" : null}
                {(!copied && !copiedPhone) ||
                (item.label === "Email" && !copied) ||
                (item.label === "Phone" && !copiedPhone) ? (
                  <Copy className="h-4 w-4" />
                ) : null}
              </motion.button>
            )}
          </motion.a>
        ))}
      </div>

      <Divider className="my-6 sm:my-10" />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-foreground/60 text-sm mt-8 sm:mt-14"
      >
        I'm always open to meaningful experience and good conversations.
      </motion.p>
    </Section>
  );
}
