interface Prop {
  name: string;
  type: string;
  default: string;
  description: string;
}

interface PropsTableProps {
  props: Prop[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
            >
              Prop
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
            >
              Type
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
            >
              Default
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {props.map((prop) => (
            <tr key={prop.name}>
              <td className="whitespace-nowrap px-4 py-3">
                <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-primary-700">
                  {prop.name}
                </code>
              </td>
              <td className="px-4 py-3">
                <code className="font-mono text-sm text-gray-600">
                  {prop.type}
                </code>
              </td>
              <td className="px-4 py-3">
                <code className="font-mono text-sm text-gray-500">
                  {prop.default}
                </code>
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
