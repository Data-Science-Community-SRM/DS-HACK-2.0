import Accordion from "./ui/Accordion";

const FAQ = () => {

  const questions = [
    {
      question: "What is the purpose of this website?",
      answer: "The purpose of this website is to provide a platform for people to share their experiences with the COVID-19 vaccine."
    },
    {
      question: "How do I share my experience?",
      answer: "You can share your experience by clicking on the 'Share Your Experience' button on the navigation bar."
    },
    {
      question: "How do I view other people's experiences?",
      answer: "You can view other people's experiences by clicking on the 'View Experiences' button on the navigation bar."
    },
    {
      question: "How do I contact the developers?",
      answer: "You can contact the developers by clicking on the 'Contact Us' button on the navigation bar."
    }
  ];

  return (
    <section id="faq" className="p-4 flex justify-center flex-col items-center bg-primary">
      <h1 className="text-5xl md:text-7xl font-extrabold text-center text-secondary mb-12">FAQ</h1>
      {questions.map((question, index) => 
        <div key={index} className="flex p-8 items-center">
          <img src="/Accordion_Left.png" alt="accordion left"/>
          <Accordion key={index} question={question.question} answer={question.answer} />
          <img src="/Accordion_Right.png" alt="accordion right"/>
        </div>
      )}
    </section>
  )
}

export default FAQ;