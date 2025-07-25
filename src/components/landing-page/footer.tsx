import React from "react";
import { motion } from "framer-motion"; 
import { Button } from "../ui/button";
import { BsSendFill } from "react-icons/bs";
import Link from "next/link";
import { AiFillCopyrightCircle } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <motion.div
      className="bg-deep-blue flex flex-col justify-center items-center py-10 rounded-md raleway"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="flex flex-col max-w-[1280px] xl:w-[1280px] gap-8 lg:px-6">
        {/* Top Section */}
        <motion.div
          className="flex flex-col lg:flex-row gap-6 w-full justify-between items-start"
          variants={containerVariants}
        >
          {/* Left Column */}
          <motion.div
            className="flex flex-col mx-4 gap-3 lg:w-[430px]"
            variants={itemVariants}
          >
            <img src="https://res.cloudinary.com/dnohqlmjc/image/upload/v1742633487/crowdpass_logo_a2f8bq.png" height={48} width={300} />
            <p className="text-white pt-3">
              Welcome to CrowdPass, your ultimate event management platform. We
              empower event organizers to create, manage, and promote their
              events with ease.
            </p>
            <motion.div
              className="p-2 border rounded-md border-white flex gap-3 text-white justify-between items-center"
              variants={itemVariants}
            >
              <input
                type="text"
                placeholder="Enter email to subscribe to our newsletter"
                className="border-none bg-deep-blue text-white w-full"
              />
              <Button className="text-primary bg-light-black hover:text-deep-blue">
                <BsSendFill />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="grid sm:grid-cols-3 gap-evenly w-full mx-4 gap-3 md:gap-x-20 lg:w-2/5 lg:gap-10"
            variants={containerVariants}
          >
            <motion.div
              className="flex flex-col gap-2 my-2 md:gap-6"
              variants={itemVariants}
            >
              <h1 className="font-medium text-xl text-white">Quick Links</h1>
              <div className="flex flex-col gap-2 md:gap-6">
                <Link
                  href="#"
                  className="text-white hover:underline hover:text-primary"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-white hover:underline hover:text-primary"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-white hover:underline hover:text-primary"
                >
                  Contact
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col gap-2 my-2 md:gap-6"
              variants={itemVariants}
            >
              <h1 className="font-medium text-xl text-white">Quick Links</h1>
              <div className="flex flex-col gap-2 md:gap-6">
                <Link
                  href="#"
                  className="text-white hover:underline hover:text-primary"
                >
                  Get Started
                </Link>
                <Link
                  href="#"
                  className="text-white hover:underline hover:text-primary"
                >
                  Term & Conditions
                </Link>
                <Link
                  href="#"
                  className="text-white hover:underline hover:text-primary"
                >
                  Privacy policy
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col gap-2 my-2 md:gap-6"
              variants={itemVariants}
            >
              <h1 className="font-medium text-xl text-white">Quick Links</h1>
              <div className="flex flex-col gap-2 md:gap-6">
                <Link
                  href="#"
                  className="text-white hover:underline hover:text-primary"
                >
                  Create event
                </Link>
                <Link
                  href="#"
                  className="text-white hover:underline hover:text-primary"
                >
                  Get SPOK
                </Link>
                <Link
                  href="#"
                  className="text-white hover:underline hover:text-primary"
                >
                  Attend Event
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.hr className="w-full" variants={itemVariants} />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col-reverse md:flex-row gap-2 md:gap-6 w-full justify-between items-center px-4"
          variants={containerVariants}
        >
          <motion.div className="flex gap-2 items-center" variants={itemVariants}>
          <AiFillCopyrightCircle size={24} color={"#FFFFFF"}/>
            <p className="text-lg text-white">
              All Rights Reserved, CrowdPass {new Date().getFullYear()}.
            </p>
          </motion.div>

          <motion.div className="flex gap-3" variants={itemVariants}>
            <Link href={"https://x.com/crowd_pass"} target="_blank">
              <FaSquareXTwitter size={36} color={"#ff6932"}/>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
