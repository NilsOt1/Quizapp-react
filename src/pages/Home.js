import QuizCard from "../components/QuizCard";

export default function Home({ results }) {
  console.log(results);
  return (
    <>
      <QuizCard results={results} />
    </>
  );
}
