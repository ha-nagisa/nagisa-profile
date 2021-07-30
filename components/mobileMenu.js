import Link from "next/link";

const MobileMenu = () => {
  return (
    <nav className={`mobile-menu fixed right-0 top-0 w-52 h-full bg-gray-800`}>
      <ul className="pt-20 px-10">
        <li>
          <Link href="/blogs">
            <a className="inline-block text-white text-2xl mb-3 hover:text-yellow-500 cursor-pointer">Blogs</a>
          </Link>
        </li>
        <li>
          <Link href="/works">
            <a className="inline-block text-white text-2xl mb-3 hover:text-yellow-500 cursor-pointer">Works</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="inline-block text-white text-2xl mb-3 hover:text-yellow-500 cursor-pointer">About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="inline-block text-white text-2xl mb-3 hover:text-yellow-500 cursor-pointer">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
