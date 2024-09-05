import Header from "./components/Header";
import { AuroraBackground } from "./components/ui/aurora-background";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import { useState } from "react";
import WaitListForm from "./components/WaitListForm";

export default function App() {
  const [isForm, setForm] = useState(false);
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Header setForm={setForm} />
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 pt-8"
        >
          <div className="text-3xl font-ubuntu md:text-5xl lg:text-7xl font-bold dark:text-white text-center">
            COMPUTATION REIMAGINED, CONTROL REDEFINED
          </div>
          <div className="font-ubuntu text-base md:text-4xl dark:text-neutral-200 py-4">
            DECENTRALIZED PRIVATE COMPUTING IS HERE!
          </div>
          <button
            className="font-ubuntu bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
            onClick={scrollToAbout}
          >
            Learn More
          </button>
        </motion.div>
      </AuroraBackground>
      {!isForm && (
        <>
          <section
            id="about"
            className="bg-white text-gray-800 py-20 px-20 flex flex-col justify-center items-center"
          >
            <h1 className="text-3xl font-ubuntu font-bold mb-4">About Us</h1>
            <div className="text-lg leading-relaxed font-grotesk">
              <ul class="list-disc">
                <li className="mb-2">
                  Storarc is a Private Computing Solution on AO, a system
                  designed to protect user data by keeping computations and data
                  processing isolated and secure in a trusted environment using
                  advanced encryption techniques such as FHE, ZKP, etc.
                </li>
                <li className="mb-2">
                  Storarc is fully decentralized in nature as it uses Arweave
                  and AO as its underlying layers. Arweave and AO, both are
                  Decentralized in nature already.
                </li>
                <li>Benefits:</li>
                <ol className="pl-5 list-decimal mb-2">
                  <li>No Single Point of Failure User’s </li>
                    <li>Control over Data Ownership </li>
                    <li>Fully Trustable and Transparent System No Data Tampering </li>
                    <li> Interoperability and no Vendor Lock-In and more </li>
                </ol>

                <li className="mb-2">
                  Storarc approach ensures that sensitive information is not
                  exposed to unauthorized parties in any way, even during
                  processing.
                </li>
                <li className="mb-2">
                  Storarc leverages Advanced Cryptographic Encryption Technique
                  called Fully Homomorphic Encryption (FHE) for encrypted data
                  and Multi-Party Computation to secure Decrypting Key/Password
                  on chain.
                </li>
                <li className="mb-2">
                  Storarc will use AO as its Computational Layer and Arweave as
                  its Storage Layer.
                </li>
                <li className="mb-2">
                  Application will run on AO and it will map the data from
                  Arweave. Whenever required the application will fetch only
                  authorized data from Arweave over to AO for further
                  processing.
                </li>
                <li className="mb-2">
                  After the launch of Arfleet, users now have both the options
                  to upload their data temporarily or permanently.
                </li>
                <li>
                  Part of Arweave India Launchpad 2.0
                </li>
              </ul>
            </div>
          </section>
          <section className="bg-gray-100 py-20 px-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
              {/* Content Div */}
              <div className="flex-1 md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-ubuntu font-bold mb-4">Tech Stack</h2>
                <ul className="list-disc ml-4 text-lg font-grotesk">
                  <li>Arweave</li>
                  <li>AO Hyper Parallel Computer</li>
                  <li>Fully Homomorphic Encryption (FHE)</li>
                  <li>Secure Multi-Party Computation (SMPC)</li>
                  <li>Reactjs</li>
                </ul>
              </div>

              {/* Image Div */}
              <div className="hidden md:block flex-1 md:w-1/2">
                <img
                  src="metal.jpg"
                  alt="Cube "
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </section>
          <section className="">
            <h1 className="mx-auto text-center font-orbitron font-bold text-xl py-4 uppercase bg-gray-300">Coming Soon...</h1>
          </section>
        </>
      )}
      {isForm && <WaitListForm open={isForm} setOpen={setForm} />}

      <Footer />
    </>
  );
}
