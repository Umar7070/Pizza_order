import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="container flex justify-between items-center  my-3 ">
        <Link href={"/"}>
          <img src="/img/logo.png" alt="Logo" />
        </Link>
        <ul className="flex gap-10">
          <li className="font-bold">
            <Link href="/home">Home</Link>
          </li>
          <li className="font-bold">

            <Link href="/products">Products</Link>
          </li>
          <Link
            href={"/cart"}
            className="flex bg-yellow-500 w-[50px] gap-1  pt-1 rounded-lg"
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
      {/* header ?????????????????? */}
      <div className="container flex justify-between items-center my-10 ">
        <div className="">
          <p>
            <em>Are you hungry ?</em>
          </p>
          <p className="text-3xl font-bold">Don't Wait !</p>
          <button className="bg-yellow-500 p-1  my-2 w-[100px] rounded-full text-white hover:bg-yellow-700 hover:text-black">
            Order Now
          </button>
        </div>
        <div>
          <img src="/img/pizza.png" alt="" className="w-[300px]" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
