export const highlightWords = (words: String[]) => {
  return words.map((word, index) => {
    const lowerCase = word.toLocaleLowerCase();
    const wordsToHighlight =
      lowerCase === "empower" ||
      lowerCase === "potencia" ||
      lowerCase === "renforcez" ||
      lowerCase === "posibilidades" ||
      lowerCase === "possibilities" ||
      lowerCase === "possibilités";

    if (wordsToHighlight) {
      return (
        <span key={index} className="text-primary">
          {word}{" "}
        </span>
      );
    } else {
      return <span key={index}>{word} </span>;
    }
  });
};
