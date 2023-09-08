const Title = (props: { title: string; description: string }) => {
  const { title, description } = props;
  return (
    <div className="row">
      <div className="col-lg-6 mx-auto">
        <div className="title-area text-center">
          <h2 className="title">{title}</h2>
          <p className="title-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Title;
