export default function QuizCard({ children }) {
  return (
    <section className="card" data-js="card">
      <p className="question" data-js="question">
        {children}
      </p>
      <button type="button">Show answer</button>
      <section>
        <p>#html</p>
        <p>#css</p>
        <p>#flexbox</p>
      </section>
    </section>
  );
}
