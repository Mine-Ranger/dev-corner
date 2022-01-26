function TopHeading({ text = "Heading" }) {
  return (
    <div className="fixed left-20 top-0 right-0 font-bold text-white items-center  bg-teal-600 rounded-b-xl  text-4xl">
      {text}
    </div>
  );
}

export default TopHeading;
