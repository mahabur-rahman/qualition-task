type WidgetTitleProps = {
  label: string;
};

const WidgetTitle = ({ label }: WidgetTitleProps) => {
  return (
    <>
      <h2 className="mb-8 text-2xl font-bold">{label}</h2>
    </>
  );
};

export default WidgetTitle;
