import Link from "next/link";
import { usePathname } from 'next/navigation';

const NavItem = ({ text, href, active }) => {
  const currentRoute = usePathname();
  return (
    <Link href={href} className={currentRoute === href
       ? "nav__link active" 
       : "nav__link"}>
      {text}
    </Link>
  );
};

export default NavItem;
