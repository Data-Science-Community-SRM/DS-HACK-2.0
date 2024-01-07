import Accordion from "./ui/Accordion";

const FAQ = () => {
  const questions = [
    {
      question: "Is the hackathon virtual or in-person?",
      answer:
        "The hackathon is set to take place in-person, and participants must be physically present at the venue throughout the event.",
    },
    {
      question: "Will food and drinks be provided?",
      answer:
        "We'll ensure participants have access to food and beverages throughout the hackathon to keep everyone active.",
    },
    {
      question: "How can I sign up for the hackathon?",
      answer:
        "To sign up, just go to our hackathon's Devfolio page on our website.",
    },
    {
      question: "Does registering for the hackathon involve any fees?",
      answer:
        "All bachelor's, master's, and other graduate degree students are welcome to register, and there is no registration fee.",
    },
    {
      question: "What should I bring?",
      answer:
        "Attendees are required to bring their personal laptops, chargers, and any essential electronic devices, along with your college ID card for verification.",
    },
    {
      question: "Do I need a team to apply?",
      answer: "You can join or create a team of 4 members.",
    },
    {
      question: "What is the deadline for applications?",
      answer: "The application period closes on 25th January 2024",
    },
    {
      question: "My question isn't listed here.",
      answer:
        `No problem! Feel free to contact us through our Discord server or via email at datasciencecommunitysrm@gmail.com, and we'll respond promptly!`,
    },
  ];

  return (
    <section id="faq" className="p-4 flex justify-center flex-col items-center bg-primary relative overflow-hidden -z-10" >
      <img src="/Hexagon.png" alt="DSC" className="absolute -top-1 -left-10 w-48 md:w-64 -z-10 opacity-60" />
      <img src="/Hexagon.png" alt="DSC" className="absolute bottom-0 -left-10 w-48 md:w-64 -rotate-90 opacity-60" />
      <img src="/Hexagon.png" alt="DSC" className="absolute -top-1 -right-10 w-48 md:w-64 rotate-90 -z-10 opacity-60" />
      <img src="/Hexagon.png" alt="DSC" className="absolute -bottom-1 -right-5 w-48 md:w-64 rotate-180 opacity-60" />
      <h1 className="text-5xl md:text-7xl font-extrabold text-center text-secondary mb-12 heading"> FAQ </h1>
      {questions.map((question, index) => (
        <div key={index} className="flex py-4 items-center justify-center hover:scale-105" >
          <img src="/Accordion_Left.png" alt="accordion left" className="mb-4 md:mb-0 hidden md:block" />
          <Accordion key={index} question={question.question} answer={question.answer} />
          <img src="/Accordion_Right.png" alt="accordion right" className="mb-4 md:mb-0 hidden md:block" />
        </div>
      ))}
    </section>
  );
};

export default FAQ;
