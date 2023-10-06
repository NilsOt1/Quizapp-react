import QuizCard from "../components/QuizCard";

export default function Home({ results }) {
  return (
    <>
      <QuizCard results={results} />
    </>
  );
}
