import "./App.css";
import Actions from "./components/Actions/Actions";
import Button from "./components/Button/Button";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import { users } from "./data";

// const users = [
//   {
//     name: "John Doe",
//     occupation: "Software Engineer",
//     location: "New York, USA",
//     email: "john@contact.me",
//   },
//   {
//     name: "Jane Smith",
//     occupation: "Graphic Designer",
//     location: "Los Angeles, USA",
//     email: "janeàcontact.me",
//   },
//   {
//     name: "Michael Johnson",
//     occupation: "Data Scientist",
//     location: "Chicago, USA",
//     email: "mich@contact.me",
//   },
//   {
//     name: "Michael Johnson",
//     occupation: "Data Scientist",
//     location: "Chicago, USA",
//     email: "mich@contact.me",
//   },
// ];

function App() {
  return (
    <>
      <section>
        {users.map((user, i) => (
          <ProfileCard key={i} {...user} />
        ))}
        <Button label="my cv" />
      </section>

      <Actions />
    </>
  );
}

export default App;
