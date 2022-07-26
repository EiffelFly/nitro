import { isExteriorLink, isInteriorLink, NavbarItem } from "../../nitro.config";

export type ItemProps = {
  item: NavbarItem;
};

const Item = ({ item }: ItemProps) => {
  if (isInteriorLink(item)) {
    return (
      <a className="text-lg font-medium" href={item.to}>
        {item.label}
      </a>
    );
  }

  if (isExteriorLink(item)) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferer"
        className="flex my-auto"
      >
        {item.icon ? (
          <img
            src={item.icon.src}
            width={item.icon.width}
            height={item.icon.height}
            alt={item.icon.alt}
          />
        ) : (
          <p className="my-auto">{item.label}</p>
        )}
      </a>
    );
  }

  return null;
};

export default Item;
