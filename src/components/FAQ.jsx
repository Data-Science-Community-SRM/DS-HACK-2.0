import Accordion from "./ui/Accordion";
import questions from "../data/faq.json";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="p-4 flex justify-center flex-col items-center overflow-hidden bg-primary relative"
    >
      <img
        src="/Hexagon.png"
        alt="DSC"
        className="absolute -top-1 -left-10 w-48 md:w-64 z-10 opacity-60"
      />
      <img
        src="/Hexagon.png"
        alt="DSC"
        className="absolute bottom-0 -left-10 w-48 md:w-64 -rotate-90 opacity-60"
      />
      <img
        src="/Hexagon.png"
        alt="DSC"
        className="absolute -top-1 -right-10 w-48 md:w-64 rotate-90 z-10 opacity-60"
      />
      <img
        src="/Hexagon.png"
        alt="DSC"
        className="absolute -bottom-1 -right-5 w-48 md:w-64 rotate-180 opacity-60"
      />
      <h1 className="text-5xl md:text-7xl font-extrabold text-center text-secondary mb-12 heading">
        FAQ
      </h1>

      {questions.map((question, index) => (
        <div
          key={index}
          className={`flex py-4 items-center justify-center hover:scale-105 transition duration-300 ease-in-out w-full`}
        >
          <img
            src="/Accordion_Left.png"
            alt="accordion left"
            className="mb-4 md:mb-0 hidden md:block"
          />
          <Accordion
            key={index}
            question={question.question}
            answer={question.answer}
          />
          <img
            src="/Accordion_Right.png"
            alt="accordion right"
            className="mb-4 md:mb-0 hidden md:block"
          />
        </div>
      ))}
    </section>
  );
};

export default FAQ;
