"use client";

import Image from "next/image";
import Footer from "../components/FOOTER";
import { motion } from "framer-motion";
import Head from "next/head";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - Splendies</title>
        <meta
          name="description"
          content="Discover the story behind Splendies – bold, elegant, and modest undergarments for every woman."
        />
      </Head>

      <main className="relative w-full min-h-screen bg-background text-foreground">
        {/* Background Section */}
        <div className="relative w-full h-[700px] overflow-hidden">
          <Image
            src="/about bg.jpeg"
            alt="About Splendies"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />
        </div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-20 max-w-5xl mx-auto px-6 py-20 -mt-[420px] sm:-mt-[460px]"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="text-5xl md:text-6xl font-extrabold text-primary mb-4 drop-shadow-lg cursor-pointer"
          >
            About Splendies
          </motion.h2>

          <motion.div
            whileHover={{ scaleX: 1.3 }}
            transition={{ duration: 0.3 }}
            className="w-24 h-1 bg-primary rounded-full mb-10 origin-left"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-foreground text-lg md:text-xl leading-relaxed mb-6"
          >
            At <span className="font-semibold text-primary">Splendies</span>, we
            don&rsquo;t just sell undergarments — we celebrate confidence, comfort,
            and timeless modesty. Born from the desire to empower women of all
            backgrounds, our brand blends elegance with practicality — crafting
            essentials that honor both <em>style</em> and <em>values</em>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-foreground text-lg md:text-xl leading-relaxed mb-6"
          >
            Whether you&rsquo;re stepping out in confidence or winding down in
            comfort, our collection of{" "}
            <span className="text-primary">undergarments</span>,{" "}
            <span className="text-primary">adult romance essentials</span>, and{" "}
            <span className="text-primary">loungewear</span> is designed to
            support the modern woman — bold, graceful, and true to herself.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-foreground text-base md:text-lg list-disc pl-5 mb-6 space-y-2"
          >
            {[
              {
                title: "Premium Comfort",
                desc: "Breathable fabrics, seamless fits — undergarments you&rsquo;ll forget you&rsquo;re wearing.",
              },
              {
                title: "Modern Modesty",
                desc: "Designs that flatter without compromising your values.",
              },
              {
                title: "Curated with Care",
                desc: "Every piece is handpicked, tested, and loved before it reaches your hands.",
              },
              {
                title: "Inclusive by Design",
                desc: "Fashion that respects tradition while embracing individuality.",
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-primary font-semibold">
                  {item.title}:
                </span>{" "}
                {item.desc}
              </motion.li>
            ))}
          </motion.ul>

          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="text-primary font-semibold italic text-xl md:text-2xl border-l-4 border-primary pl-4 mb-6"
          >
            &ldquo;When you feel good inside, it reflects on the outside.&rdquo;
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            whileHover={{
              letterSpacing: "2px",
              color: "#f87171",
            }}
            className="text-foreground uppercase tracking-wide font-medium text-sm transition-all duration-300 cursor-pointer"
          >
            Join the Splendies journey — Where fashion meets faith. Where
            comfort meets class.
          </motion.p>
        </motion.div>
      </main>

      <Footer />
    </>
  );
}
