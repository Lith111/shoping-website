import Arrow from "../images/Arrow.png";
import card from "../images/Rectangle22.png";
const CardArr = ({ Title, img, type = false }) => {
  let card2 = card.replace("/Rectangle22.png", "/" + img);
  return (
    <div
      className="card-cat"
      style={!type ? { maxWidth: "18rem" } : { maxWidth: "32rem" }}
    >
      <img style={{ maxWidth: "100%" }} src={card2} alt="" />
      <div
        className="card-body d-flex mt-1"
        style={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="card-title" style={{ Width: "100%" }}>
          <h3 style={{ color: "#000", fontSize: "20px", marginTop: "10px" }}>
            {Title}
          </h3>
          <p className=" mt-4" style={{ color: "#191818" }}>
            Explore Now!
          </p>
        </div>
        <div className="card-link" style={{ width: "10%" }}>
          <img className="w-50" alt={Arrow} src={Arrow} />
        </div>
      </div>
    </div>
  );
};

export default CardArr;
