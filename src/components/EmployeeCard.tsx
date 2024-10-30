interface EmployeeProps {
  firstName: string;
  lastName: string;
  photo: string;
  email: string;
}

function EmployeeCard({ firstName, lastName, photo, email }: EmployeeProps) {
  return (
    <div>
      <img src={photo} alt={`${firstName} ${lastName}`} />
      <h2>{firstName} {lastName}</h2>
      <p>{email}</p>
    </div>
  );
}

export default EmployeeCard;