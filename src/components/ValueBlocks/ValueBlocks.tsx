import ValueItem from "../ValueItem";

export type ValueNode = {
  label: string;
  imageSrc: string;
};

type ValueBlocksProps = {
  title?: string;
  values: ValueNode[];
};

export default function ValueBlocks({
  title,
  values,
}: ValueBlocksProps) {
  return (
    <section className="max-w-7xl mx-auto px-30 py-24">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-center">{title}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-24">
        {values.map((value) => (
          <ValueItem
            key={value.label}
            label={value.label}
            imageSrc={value.imageSrc}
          />
        ))}
      </div>
    </section>
  );
}
