import React from "react";

const Posts = () => {
  return (
    <section className="mt-[15%] gap-4 flex flex-col md:flex-row md:pl-[10%]">
      <div className="md:w-[300px] md:flex-3 bg-white bg-opacity-10 rounded-lg md:mr-4 mb-4">
        <div className="p-2">
          <div className="flex justify-between gap-4 mb-3 items-center">
            <h2 className="text-white text-lg md:text-xl">Photos</h2>
            <h2 className="text-violet-500 text-lg md:text-xl">
              See All Photos
            </h2>
          </div>
          <div className="flex flex-wrap mt-5 gap-2">
            <img
              className="w-20 h-20 rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgI-sN2wA-MJnjTNenQTKoCLRS9qC810GXotuTJM2zEvspe2inpAnXnCFem3J29Gu8jwI&usqp=CAU"
              alt=""
            />
            <img
              className="w-20 h-20 rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgI-sN2wA-MJnjTNenQTKoCLRS9qC810GXotuTJM2zEvspe2inpAnXnCFem3J29Gu8jwI&usqp=CAU"
              alt=""
            />
            <img
              className="w-20 h-20 rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgI-sN2wA-MJnjTNenQTKoCLRS9qC810GXotuTJM2zEvspe2inpAnXnCFem3J29Gu8jwI&usqp=CAU"
              alt=""
            />

            <img
              className="w-20 h-20 rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgI-sN2wA-MJnjTNenQTKoCLRS9qC810GXotuTJM2zEvspe2inpAnXnCFem3J29Gu8jwI&usqp=CAU"
              alt=""
            />
            <img
              className="w-20 h-20 rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgI-sN2wA-MJnjTNenQTKoCLRS9qC810GXotuTJM2zEvspe2inpAnXnCFem3J29Gu8jwI&usqp=CAU"
              alt=""
            />
            <img
              className="w-20 h-20 rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgI-sN2wA-MJnjTNenQTKoCLRS9qC810GXotuTJM2zEvspe2inpAnXnCFem3J29Gu8jwI&usqp=CAU"
              alt=""
            />

            <img
              className="w-20 h-20 rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgI-sN2wA-MJnjTNenQTKoCLRS9qC810GXotuTJM2zEvspe2inpAnXnCFem3J29Gu8jwI&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="mx-auto flex gap-2 items-center mb-4">
          <img
            className="h-9 w-9 rounded-full"
            src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
            alt=""
          />
          <div className="flex flex-col gap-1 items-start">
            <h2 className="text-white text-sm md:text-lg">Bilel Bourgou</h2>
            <span className="text-xs text-gray-400 md:text-sm">2mn</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-white text-sm md:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisi
          </p>
          <img
            className="w-full md:w-[80%] h-[400px] object-fit rounded-lg"
            src="https://wpimg.pixelied.com/blog/wp-content/uploads/2021/06/15175913/Colors-in-Profile-Pictures.jpeg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Posts;
