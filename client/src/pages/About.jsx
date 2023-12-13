import React, { useState } from 'react';

const About = () => {
  const [showMoreWhoWeAre, setShowMoreWhoWeAre] = useState(false);
  const [showMoreWhatWeDo, setShowMoreWhatWeDo] = useState(false);
  const [showMoreWhenWeStart, setShowMoreWhenWeStart] = useState(false);


  const handleShowMoreWhoWeAre = () => {
    setShowMoreWhoWeAre(!showMoreWhoWeAre);
  };

  const handleShowMoreWhatWeDo = () => {
    setShowMoreWhatWeDo(!showMoreWhatWeDo);
  };
  const handleShowMoreWhenWeStart = () => {
    setShowMoreWhenWeStart(!showMoreWhenWeStart);
  };

  return (
    <div>
      <section className="my-8 mx-auto text-white text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Who We Are</h2>
        <p className="mb-4 text-white">
          At B.A.T-SQUAD, we're not just a shoe retailer, we're a team of style enthusiasts dedicated to delivering quality and comfort. Our vision is to curate a collection that blends the latest trends with a commitment to customer satisfaction.
        </p>
        {showMoreWhoWeAre && (
          <p>
            We believe in the transformative power of the right pair of shoes and aim to build a community of individuals who share our passion for fashion and functionality.
          </p>
        )}
        <button
          className="text-white-500 bg-violet-600 rounded-full  p-2"
          onClick={handleShowMoreWhoWeAre}
        >
          {showMoreWhoWeAre ? 'Show Less' : 'Show More'}
        </button>
      </section>

      <section className="my-8 text-white">
        <div className="flex justify-center items-center">
          <div className="w-1/2 mr-4">
            <h1 className="text-2xl font-bold text-white mb-4">What We Do</h1>
            <p className="mb-4 text-white">
              Discover the perfect pair for every occasion at B.A.T-SQUAD. We curate a diverse range of footwear, from timeless classics to the latest fashion-forward designs. Our commitment to comfort is unwavering, with each pair crafted from high-quality materials. ...
            </p>
            {showMoreWhatWeDo && (
              <p>
                Shopping with us is an experience
                tailored to your lifestyle,
                offering a seamless online platform and
                exceptional customer support.
                Step into style, comfort,
                and confidence with B.A.T-SQUAD.
              </p>
            )}
            <button
              className="text-white-500 bg-violet-600 rounded-full  p-2"
              onClick={handleShowMoreWhatWeDo}
            >
              {showMoreWhatWeDo ? 'Show Less' : 'Show More'}
            </button>
          </div>
          <div className="w-1/2">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.FJviZswYgEEIPy_IuytkWwHaEK&pid=Api&P=0&h=220"
              alt="What We Do"
              className="w-80 h-80 object-fit flex-shrink-0 mr-4 rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="my-8 text-white">
        <div>
        <h1 className="text-2xl font-bold text-white mb-4">When We Start</h1>
        <p className="mb-4 text-white">
          Discover the perfect pair for every occasion at B.A.T-SQUAD. We curate a diverse range of footwear, from timeless classics to the latest fashion-forward designs. Our commitment to comfort is unwavering, with each pair crafted from high-quality materials. ...
        </p>
        {showMoreWhenWeStart && (
          <p>
            Shopping with us is an experience tailored to your lifestyle, offering a seamless online platform and exceptional customer support. Step into style, comfort, and confidence with B.A.T-SQUAD.
          </p>
        )}
        <button
          className="text-white-500 bg-violet-600 rounded-full  p-2"
          onClick={handleShowMoreWhenWeStart}
        >
          {showMoreWhenWeStart ? 'Show Less' : 'Show More'}
        </button>
        </div>
      </section>

      <section className="my-8 text-white">
        <h2 className="text-2xl text-center font-bold text-white mb-4">Our Makers</h2>
        <div className='text-center'>
          <h1 className="mb-4 text-xl">
            Wael Khalil Amine Bilel is one of the creative minds behind B.A.T-SQUAD.
          </h1>
        </div>
        <div className="makers-container flex items-center justify-center">
          <div className="makers-box w-1013 h-1289 p-8 border border-gray-300 rounded-lg">
            <div className="maker flex items-center flex-wrap gap-5 justify-center">
              <img
                src="https://hiphopcorner.fr/wp-content/uploads/2020/05/rappeur-ala-tunisie.jpg"
                alt="Person"
                className="w-80 h-80 object-fit flex-shrink-0 mr-4 rounded-lg"
              />
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.wqyLzntwlWxgAoDCIIFvLQHaIb&pid=Api&P=0&h=360"
                alt="Person"
                className="w-80 h-80 object-fit flex-shrink-0 mr-4 rounded-lg"
              />
              <img
                src="https://i.pinimg.com/originals/90/0c/af/900caf14ff5322f10a285967452ebfa9.jpg"
                alt="Person"
                className="w-80 h-80 object-fit flex-shrink-0 mr-4 rounded-lg"
              />
              <img
                src="https://a57.foxnews.com/a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/11/640/320/1862/1048/Trump-OPED1.jpg?ve=1&tl=1?ve=1&tl=1"
                alt="Person"
                className="w-80 h-80 object-fit flex-shrink-0 mr-4 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

