"use client";
import Image from "next/image";
import Link from "next/link";
import Background from "@/images/background.jpg";
import { motion } from "framer-motion";

export default function Home() {
  const navbar = ["about", "what we do", "contact"];
  const heading = ["creative", "design studio"];

  const slideUp = {
    init: {
      y: "100%",
    },
    open: (i) => ({
      y: "0%",
      transition: { duration: 1, delay: 0.2 * i, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <main className="px-20">
      <nav className="w-full flex flex-row justify-between items-center py-10 uppercase">
        <h3 className="font-semibold overflow-hidden">
          <motion.span
            className="block"
            variants={slideUp}
            initial={"init"}
            animate={"open"}
          >
            Akon
          </motion.span>
        </h3>
        <div className="flex flex-row gap-14">
          {navbar.map((item, key) => (
            <Link className="overflow-hidden" key={key} href={item}>
              <motion.span
                className="block"
                variants={slideUp}
                initial={"init"}
                animate={"open"}
                key={key}
                custom={key}
              >
                {item}
              </motion.span>
            </Link>
          ))}
        </div>
      </nav>
      <div className="w-full pt-20 flex flex-col gap-14">
        <div className="flex flex-row items-start justify-between">
          <div>
            {heading.map((item, key) => (
              <div className="overflow-hidden">
                <motion.h1
                  variants={slideUp}
                  initial={"init"}
                  animate={"open"}
                  className="text-8xl uppercase translate-y-[0%]"
                  key={key}
                  custom={key}
                >
                  {item}
                </motion.h1>
              </div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: "10%" }}
            animate={{
              y: 1,
              opacity: 1,
              transition: {
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="w-[30%] p-10"
          >
            Whether you're an architect, designer, or developer, Akon's
            expertise lies in crafting unique and emotionally engaging
            illustrations that perfectly embody your project's vision.
          </motion.p>
        </div>
        <Image className="w-full" src={Background} />
      </div>
    </main>
  );
}
