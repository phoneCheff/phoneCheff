import CardsOfferts from "@/components/CardsOfferts";

const page = () => {
  return (
    <section
      id="ofertas"
      className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12"
    >
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <CardsOfferts />
      </div>
    </section>
  );
};

export default page;
