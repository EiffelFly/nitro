import { AstroPropHeader } from "../../types/astro";

export type TableOfContentProps = {
  headers: AstroPropHeader[];
  headerMinDepth: number;
  headerMaxDepth: number;
};

const TableOfContent = ({
  headers,
  headerMinDepth,
  headerMaxDepth,
}: TableOfContentProps) => {
  return (
    <>
      <h2 className="mb-4">On this page</h2>
      <ul>
        {headers
          .filter(
            ({ depth }) => depth >= headerMinDepth && depth <= headerMaxDepth
          )
          .map((header) => (
            <li className="group text-sm py-0.5 my-2.5 pl-4 border-l-2 border-slate-300 hover:border-slate-700">
              <a
                className="truncate block text-slate-600 group-hover:text-slate-900"
                href={`#${header.slug}`}
              >
                {header.text}
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default TableOfContent;
