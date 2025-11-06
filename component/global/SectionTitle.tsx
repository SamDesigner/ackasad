interface SectionTitle {
  title: string;
}

const SectionTitle = ({title}:SectionTitle) => {
  return (
    <div className="border-2 font-sans border-black w-fit py-2 px-10 rounded-full bg-primary">{title}</div>
  );
};

export default SectionTitle;
