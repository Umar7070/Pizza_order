import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="container flex justify-between items-center  my-3 items-center">
        <div>
          <img src="/img/logo.png" alt="Logo" />
        </div>
        <ul className="flex gap-10">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <Link
            href={"/cart"}
            className="flex bg-yellow-500 px-2 gap-2  pt-1 rounded-lg"
          >
            <p>10</p>

            <img
              src="/img/cart.png"
              alt="cart"
              className="filter brightness-0 saturate-0 grayscale-100 h-5"
            />
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
