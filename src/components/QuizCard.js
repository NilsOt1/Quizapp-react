import styled from "styled-components";

export default function QuizCard({ results }) {
  function correctAnswer(event) {
    event.target.style.backgroundColor = "green";
    setTimeout(function () {
      event.target.style.backgroundColor = "white";
    }, 3000);
  }

  function wrongAnswer(event) {
    event.target.style.backgroundColor = "red";
    setTimeout(function () {
      event.target.style.backgroundColor = "white";
    }, 3000);
  }

  return (
    <>
      {results.map((result, index) => {
        return (
          <StyledQuestionCard className="card" key={index}>
            <p className="question">{result.question}</p>
            <StyledList>
              <StyledAnswers onClick={wrongAnswer}>
                {result.incorrect_answers[0]}
              </StyledAnswers>
              <StyledAnswers onClick={wrongAnswer}>
                {result.incorrect_answers[1]}
              </StyledAnswers>
              <StyledAnswers onClick={wrongAnswer}>
                {result.incorrect_answers[2]}
              </StyledAnswers>
              <StyledAnswers onClick={correctAnswer}>
                {result.correct_answer}
              </StyledAnswers>
            </StyledList>
          </StyledQuestionCard>
        );
      })}
    </>
  );
}

const StyledQuestionCard = styled.section`
  margin: 10px;
  text-align: center;
  border: solid 1px;
  border-radius: 15px;
`;

const StyledList = styled.ul`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
`;

const StyledAnswers = styled.li`
  list-style-type: none;
  margin: 4px;
  border: solid 1px;
  border-radius: 5px;
`;
