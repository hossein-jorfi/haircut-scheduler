interface FormHeadingProps {
  title: string;
  description?: string;
}

const FormHeading = ({ title, description }: FormHeadingProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-muted-foreground text-balance">{description}</p>
    </div>
  );
};

export default FormHeading;
