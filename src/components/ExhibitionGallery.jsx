import React from "react";
import HoverPreviewCard from "./HoverPreviewCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

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
    <section className="py-20" id="exhibitions">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between mb-8 gap-2 sm:gap-0">
          <FadeUp>
            <h2 className="text-3xl font-semibold font-['Playfair_Display']">
              Current Exhibitions
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <Link
              to="/exhibition"
              className="text-sm text-gray-700 hover:underline flex items-center gap-1 mt-2 sm:mt-0"
            >
              Browse all Exhibitions <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>

        {/* Exhibition Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {exhibitions.map((ex, i) => (
            <FadeUp key={ex.id} delay={0.06 * i}>
              <HoverPreviewCard item={ex} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
