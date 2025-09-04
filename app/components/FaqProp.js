const Faq = ({ question, answer, isOpen, onClick}) => {
  
  return (
    <div className="faq" >
      <div className="faq__heading" onClick={onClick}>
        <h6>{question}</h6>
        <div className={`sign ${isOpen ? "plus" : "minus"}`}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`faq__body ${isOpen && "showfaq"}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Faq;
