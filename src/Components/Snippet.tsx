function Snippet({ text = "Copy this snippet to your clipboard" }) {
  return (
      <div className="rounded-lg group text-left ml-24 max-w-screen-sm border-4  border-lime-500 bg-lime-200 text-zinc-500 overflow-x-scroll">
        {text}
        <button
          className="group-hover:scale-100 tooltip right-0"
          onClick={() => {
            navigator.clipboard.writeText(text);
          }}
        >
          Copy
        </button>
    </div>
  );
}

export default Snippet;
