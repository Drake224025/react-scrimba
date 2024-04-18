import mainImage from "../assets/image1.png";
import star from "../assets/star.png";

export default function Card() {
  return (
    <div className="card">
      <img src={mainImage} className="card--image" alt="main image" />
      <div className="card--stats">
        <img src={star} className="card--star" alt="star image" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <h2>Life Lessons with Katie Zaferes</h2>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
