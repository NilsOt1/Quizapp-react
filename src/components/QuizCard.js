import styled from "styled-components";

export default function QuizCard({ results }) {
  return (
    <>
      {results.map((result, index) => {
        console.log(result);
        return (
          <StyledQuestionCard className="card" data-js="card" key={index}>
            <p className="question" data-js="question">
              {result.question}
            </p>
            <StyledList>
              <StyledAnswers>{result.incorrect_answers[0]}</StyledAnswers>
              <StyledAnswers>{result.incorrect_answers[1]}</StyledAnswers>
              <StyledAnswers>{result.incorrect_answers[2]}</StyledAnswers>
              <StyledAnswers>{result.correct_answer}</StyledAnswers>
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
