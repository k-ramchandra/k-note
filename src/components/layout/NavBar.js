import Button from "../shared/Button";

export default function NavBar(Props) {
  return (
    <div className="navBar">
      <h4 className="heading" style={{ fontSize: "1.2em" }}>
        K-NOTE
      </h4>
      <Button
        className="light"
        value={`${Props.appearnace ? "Light" : "Dark"} Mode`}
        onClick={Props.mode}
      />
    </div>
  );
}
