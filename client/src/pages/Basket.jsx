import React from 'react'

const Basket = () => {
  return (
    <div>
      <p className="text-transparent">.</p>
      <div className="w-[90%] h-[550px] absolute top-[12%] left-[10%] iphone:left-[-150px]">
        <div className=" iphone:blockhidden">
          <img
            src="https://s3-alpha-sig.figma.com/img/a59c/1e4a/905494d13b92596161da408b21648aa6?Expires=1703462400&Signature=ph1rrOffokpkaiR4HZ8Oto0UR8ExmYlJNwE~n8GUBRj-dY0aM872pO9HOO4OCQnL4pjzj7-RoUDXKjGa7hWNRtLRnl~inYgsjE3UixIJ0E4civNZdYCfEJVVfvQj7Z~mQsUjNH-PPlJfmaNKrQpUdGbqpbn9uUbbIRsTmaQ9HpeoOSOUyUagyWLHVO4IQroHJYpaK5NslbdGnQ8M734dDOkkR3PMRlhLvDaRQXMr311xZlau86vMV2sGUbDz~1~41C~32b0fi-a~OfsdC0UhuhoZH8ZR4xRsUElxBAQI7gmQ1fJYzPJGQ4FWHm6HgwgZRgrIGUWW2VRxT5OSIW6-CA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            className="w-[25%] h-[400px] absolute left-[-10%] "
          />
          <p className=" iphone:hidden absolute font-sans font-semibold text-xl text-center w-[30%] h-[39px] top-[420px] left-[-10%] text-white">
            Thanks for Shoping from Us
          </p>
        </div>

        <div className="iphone:left-[60%] w-[75%] h-[500px] absolute left-[20%] rounded-lg bg-login sm:float-left iphone:w-[280px]">
          <h1 className="font-bold leading-10 tracking-tighter text-center text-lg mr-auto mt-4  text-blue-700 iphone:w-20">
            Your basket 
          </h1>
         
        </div>
         
          <div className="mt-16">
            <p className="text-white text-center">Or</p>
          </div>

          
        </div>
      </div>
   
  );
}

export default Basket;
