interface MovieDetailsItemProps {
  label: string;
  value: string;
}

const MovieDetailsItem: React.FC<MovieDetailsItemProps> = ({ label, value }) => {
  return (
    <p>
      <strong>{label}: </strong>
      {value}
    </p>
  );
};

export default MovieDetailsItem;
