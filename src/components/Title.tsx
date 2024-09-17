type TitleProps = {
  label: string;
};

const Title = ({ label }: TitleProps) => {
  return (
    <>
      <h2 className="mb-8 text-2xl font-bold">{label}</h2>
    </>
  );
};

export default Title;
