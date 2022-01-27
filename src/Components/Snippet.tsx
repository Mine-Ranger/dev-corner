function Snippet({ text = "Copy this snippet to your clipboard" }) {
  return (
    <div>
      <div className="relative container border-lime-500 bg-lime-200 text-zinc-500">
        {text}
      </div>
      {/* <button className="bg-lime-500 text-white rounded-xl rlative">Copy!</button> */}
    </div>
  );
}

export default Snippet;
