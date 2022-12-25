import "../styles/Opinion.scss";
import renderToMarkdown from "../utilities/renderToMarkdown";

class Opinion extends React.Component {
  render() {
    <div className="container-opinion">
      <img
        className="image-opinion"
        src={require(`../images/testimonio-${this.props.image}.png`)}
        alt={`Foto de ${this.props.image}`}
      />
      <div className="container-text-opinion">
        <p className="name-opinion">
          <strong>{this.props.name}</strong> en {this.props.country}
        </p>
        <p className="position-opinion">
          {this.props.position} en <strong>{this.props.company}</strong>
        </p>
        <p
          className="text-opinion"
          dangerouslySetInnerHTML={{
            __html: renderToMarkdown(`*"${this.props.opinion}"*`),
          }}
        ></p>
      </div>
    </div>;
  }
}

export default Opinion;
