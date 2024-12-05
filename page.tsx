import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="bg-black text-white grid place-content-center h-screen ">
      <h1 className="mx-auto">2nd Assignment Student Cards</h1>

      <div>
        <div className="p-6 max-w-72 mx-auto bg-white text-black rounded-xl shadow-lg flex items-center space-x-4 font text-xs font-sans font-medium mb-4">
          <div>
            <Image

              src="/images/image.jpg"
              alt="picture"
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>

          <div>
            <div>
              Student card
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                deserunt.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* 2nd card */}
      <div className="">
        <div className="p-6 max-w-72 mx-auto bg-white text-black rounded-xl shadow-lg flex items-center space-x-4 font text-xs font-sans font-medium mb-4">
          <div>
            <Image

              src="/images/images1.jpg"
              alt="picture"
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>

          <div>
            <div>
              Student card
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                deserunt.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd card */}
      <div className="">
        <div className="p-6 max-w-72 mx-auto bg-white text-black rounded-xl shadow-lg flex items-center space-x-4 font text-xs font-sans font-medium">
          <div>
            <Image

              src="/images/images2.jpg"
              alt="picture"
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>

          <div>
            <div>
              Student card
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                deserunt.
              </p>
            </div>
          </div>
        </div>
      </div>






    </div>


    
  











  );
};

export default Home;
