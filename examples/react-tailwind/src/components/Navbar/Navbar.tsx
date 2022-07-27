import { useMemo } from "react";
import { NavBar, NavbarItem } from "../../nitro.config";
import { baseStyles } from "../../styles/base";
import Item from "./Item";
import cn from "clsx";

export type NavbarProps = {
  navbar: NavBar;
};

const Navbar = ({ navbar }: NavbarProps) => {
  const items = useMemo(() => {
    let left: NavbarItem[] = [];
    let right: NavbarItem[] = [];

    navbar.items.forEach((item) => {
      if (item.position === "right") {
        right.push(item);
      } else {
        left.push(item);
      }
    });

    return { left, right };
  }, [navbar]);

  return (
    <nav
      className={cn(
        "w-full z-10 sticky top-0 flex py-4 px-10 bg-white",
        baseStyles.headerHeight
      )}
      title="Top Navigation"
    >
      <div className="flex items-center justify-end gap-x-4 w-full py-2">
        <div className="logo flex mr-4">
          <a className="flex flex-row gap-x-3" href="/">
            <img
              src={navbar.logo.src}
              alt={navbar.logo.alt}
              width={navbar.logo.width}
              height={navbar.logo.height}
            />
            <h1 className="text-xl font-bold">{navbar.title}</h1>
          </a>
        </div>
        <div className="flex-1 grid grid-cols-2">
          <div className="w-full flex flex-row">
            {items.left.map((item, i) => (
              <Item key={item.label} item={item} />
            ))}
          </div>
          <div className="w-full flex flex-row justify-end">
            {items.right.map((item, i) => (
              <Item key={item.label} item={item} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
