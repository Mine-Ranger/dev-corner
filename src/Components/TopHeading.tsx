function TopHeading({ text = "Heading" }) {
  return (
    <div className="shadow-md shadow-teal-400 ml-20 font-bold text-white items-center  bg-teal-600 rounded-b-xl  text-4xl">
      {text}
    </div>
  );
}

export default TopHeading;
