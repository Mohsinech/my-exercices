import "./card.css";

const ProfileCard = ({ name, occupation, location, email }) => {
  return (
    <div classNasme="profile-card">
      <div className="profile-info">
        <h2>{name}</h2>
      </div>
      <div className="profile-details">
        <p>{occupation}</p>
        <p>{location}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
