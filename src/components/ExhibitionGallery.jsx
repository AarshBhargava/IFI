import HoverPreviewCard from "./HoverPreviewCard";

export default function ExhibitionGallery() {
  const exhibitions = [
    {
      id: 1,
      img: "https://plus.unsplash.com/premium_photo-1691030925762-51c8a78b49fe?w=1000&auto=format&fit=crop&q=60",
      title: "Exhibition Title 1",
      desc: "A deep dive into contemporary Indian art.",
      date: "Aug 15 — Sep 30",
      details:
        "Highlights emerging artists from across India, showcasing new mediums and powerful voices.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1715627157123-7412d39df0d6?w=1000&auto=format&fit=crop&q=60",
      title: "Exhibition Title 2",
      desc: "Exploring abstract expressionism.",
      date: "Oct 01 — Nov 20",
      details:
        "Abstract works from multiple generations, creating a dialogue across time.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1713103659629-157f88899fdb?w=1000&auto=format&fit=crop&q=60",
      title: "Exhibition Title 3",
      desc: "Sculpture and installation works.",
      date: "Dec 01 — Jan 15",
      details:
        "Focuses on large-scale installations redefining physical space and viewer interaction.",
    },
  ];


  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {exhibitions.map((ex) => (
          <HoverPreviewCard key={ex.id} item={ex} />
        ))}
      </div>
    </section>
  );
}
