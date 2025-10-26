import '../styles/members.css'

const members = Array.from({ length: 20 }, (_, i) => ({
  name: `Member ${i + 1}`,
  photo: `https://via.placeholder.com/100?text=M${i + 1}`,
}));

const Members = () => (
  <div className="members-container">
    <h2>Our Team Members</h2>
    <div className="grid">
      {members.map((member, idx) => (
        <div key={idx} className="card">
          <img src={member.photo} alt={member.name} />
          <p>{member.name}</p>
        </div>
      ))}
    </div>
  </div>
);

// If you want to, then you can add your image in the public/assets folder , it will be used later when this page gets worked on

export default Members;