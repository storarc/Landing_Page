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
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            YOU NOW OWN COMPUTATION
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            DECENTRALIZED PRIVATE COMPUTING IS HERE
          </div>
          <button
            className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
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
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <div className="text-lg leading-relaxed">
              <ul class="list-disc">
                <li>
                  Storarc is a Private Computing Solution on AO, a system
                  designed to protect user data by keeping computations and data
                  processing isolated and secure in a trusted environment using
                  advanced encryption techniques such as FHE, ZKP, etc.
                </li>
                <li>
                  Storarc is fully decentralized in nature as it uses Arweave
                  and AO as its underlying layers. Arweave and AO, both are
                  Decentralized in nature already.
                </li>
                <li>Benefits:</li>
                <ol className="pl-5 list-decimal">
                  <li>No Single Point of Failure User’s </li>
                    <li>Control over Data Ownership </li>
                    <li>Fully Trustable and Transparent System No Data Tampering </li>
                    <li> Interoperability and no Vendor Lock-In and more </li>
                </ol>

                <li>
                  Storarc approach ensures that sensitive information is not
                  exposed to unauthorized parties in any way, even during
                  processing.
                </li>
                <li>
                  Storarc leverages Advanced Cryptographic Encryption Technique
                  called Fully Homomorphic Encryption (FHE) for encrypted data
                  and Multi-Party Computation to secure Decrypting Key/Password
                  on chain.
                </li>
                <li>
                  Storarc will use AO as its Computational Layer and Arweave as
                  its Storage Layer.
                </li>
                <li>
                  Application will run on AO and it will map the data from
                  Arweave. Whenever required the application will fetch only
                  authorized data from Arweave over to AO for further
                  processing.
                </li>
                <li>
                  After the launch of Arfleet, users now have both the options
                  to upload their data temporarily or permanently.
                </li>
              </ul>
            </div>
          </section>
          <section className="bg-gray-100 py-20 px-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
              {/* Content Div */}
              <div className="flex-1 md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4">Your Heading Here</h2>
                <p className="text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus lacinia odio vitae vestibulum. Morbi et elit id libero
                  malesuada dapibus. Integer facilisis, elit non sagittis
                  viverra, ipsum elit dictum sapien, id faucibus felis ligula
                  nec libero. Sed suscipit velit vel elit cursus, in cursus eros
                  vehicula. Suspendisse potenti.
                </p>
              </div>

              {/* Image Div */}
              <div className="flex-1 md:w-1/2">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Placeholder Image"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </section>
        </>
      )}
      {isForm && <WaitListForm open={isForm} setOpen={setForm} />}

      <Footer />
    </>
  );
}
