"use client";
import React from "react";
import { motion } from "framer-motion";     
import { SparkItem } from "@/components/sparks-carousel";
import {SparksCarousel} from "@/components/sparks-carousel";
// Sample data for the carousel
const sparksData: SparkItem[] = [
  {
    id: 1,
    imageSrc: "https://images.unsplash.com/photo-1559583109-3e7968136c99?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    imageSrc: "https://images.unsplash.com/photo-1584448141569-69f342da535c?q=80&w=741&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    imageSrc: "https://images.unsplash.com/photo-1767048264833-5b65aacd1039?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    imageSrc: "https://images.unsplash.com/photo-1756412955475-7e1ed16869af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    imageSrc: "https://images.unsplash.com/photo-1709888246886-fe4d99231d60?q=80&w=753&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: 6,
    imageSrc: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const SparksCarouselDemo = () => {
  return (
    <div className=" bg-black">
      <SparksCarousel
        items={sparksData}
      />
    </div>
  );
};

export default SparksCarouselDemo;