import Link from "next/link";

const StyledButton = () => {
  return (
    <Link href="/ofertas" passHref>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg 
                  shadow-md transition duration-300 ease-in-out transform hover:scale-105
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Ver Ofertas y Precios
      </button>
    </Link>
  );
};

export default StyledButton;
