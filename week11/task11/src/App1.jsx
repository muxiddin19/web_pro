import StudentProfileCard from './StudentProfileCard';

function App() {
  return (
    <div>
      <h1>Student Directory</h1>
      {/* Replace with YOUR information: */}
      <StudentProfileCard
        name="abc"
        studentId="202502123"  {/* ← REQUIRED */}
        major="Computer Engineering"
        year={3}
        gpa={3.75}
      />
      {/* Add 2 more cards for classmates (use their real names): */}
      <StudentProfileCard name="Classmate 1" studentId="..." major="..." year={2} gpa={3.5} />
      <StudentProfileCard name="Classmate 2" studentId="..." major="..." year={4} gpa={3.9} />
    </div>
  );
}

export default App1;