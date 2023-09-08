const ReferenceItem = ({ thumbnail }: { thumbnail: string }) => {
  return (
    <div>
      <div className="reference">
        <img className="w-100" src={thumbnail} alt="team" />
      </div>
    </div>
  );
};

export default ReferenceItem;
