export default function Details({ details }) {
  if (!details || Object.keys(details).length === 0) return

  return (
    <>
      <div className="card">
        <img src={details.avatar} className="card-img-top" alt="avatar" />
        <div className="card-body">
          <h5 className="card-title">{details.name}</h5>
        </div>
        <div className="list-group">
          <li className="list-group-item">City: {details.details.city}</li>
          <li className="list-group-item">
            Company: {details.details.company}
          </li>
          <li className="list-group-item">
            Position: {details.details.position}
          </li>
        </div>
      </div>
    </>
  );
}
