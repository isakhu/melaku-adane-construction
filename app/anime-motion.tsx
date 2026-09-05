"use client";

import { animate, stagger } from "animejs";
import { useEffect } from "react";

export default function AnimeMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const page = document.querySelector("main");
    if (!page) return;

    const ease = "outExpo";

    animate("main > header", {
      opacity: [0, 1],
      translateY: [-22, 0],
      duration: 850,
      ease,
    });

    animate("main > section:first-of-type h1", {
      opacity: [0, 1],
      translateY: [52, 0],
      duration: 1100,
      delay: 180,
      ease,
    });

    animate("main > section:first-of-type img", {
      opacity: [0, 1],
      scale: [1.1, 1],
      rotateY: [-5, 0],
      duration: 1350,
      delay: 120,
      ease,
    });

    const cards = Array.from(
      page.querySelectorAll<HTMLElement>(
        "article, section#gallery .overflow-hidden, section#projects article, section#fleet article, section#leadership article",
      ),
    );

    const visible = new WeakSet<Element>();
    const animateEntry = (elements: HTMLElement[]) => {
      if (!elements.length) return;
      elements.forEach((element) => visible.add(element));
      animate(elements, {
        opacity: [0, 1],
        translateY: [34, 0],
        rotateX: [3, 0],
        duration: 820,
        delay: stagger(55),
        ease,
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entering = entries
          .filter((entry) => entry.isIntersecting && !visible.has(entry.target))
          .map((entry) => entry.target as HTMLElement);
        animateEntry(entering);
      },
      { threshold: 0.13, rootMargin: "0px 0px -7% 0px" },
    );

    cards.forEach((card) => observer.observe(card));

    const imageWrappers = Array.from(
      page.querySelectorAll<HTMLElement>(
        "section#projects article > div:first-child, section#fleet article > div:first-child, section#leadership article > div:first-child, section#gallery .overflow-hidden",
      ),
    );

    const pointerHandlers = new Map<HTMLElement, { move: (event: PointerEvent) => void; leave: () => void }>();
    imageWrappers.forEach((wrapper) => {
      const image = wrapper.querySelector("img");
      if (!image) return;

      const onPointerMove = (event: PointerEvent) => {
        const rect = wrapper.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        animate(wrapper, {
          rotateX: -y * 4,
          rotateY: x * 5,
          duration: 420,
          ease: "outQuart",
        });
        animate(image, {
          scale: 1.045,
          translateX: x * 8,
          translateY: y * 8,
          duration: 520,
          ease: "outQuart",
        });
      };

      const reset = () => {
        animate(wrapper, {
          rotateX: 0,
          rotateY: 0,
          duration: 650,
          ease: "outElastic(1, .65)",
        });
        animate(image, {
          scale: 1,
          translateX: 0,
          translateY: 0,
          duration: 650,
          ease: "outElastic(1, .65)",
        });
      };

      wrapper.addEventListener("pointermove", onPointerMove);
      wrapper.addEventListener("pointerleave", reset);
      pointerHandlers.set(wrapper, { move: onPointerMove, leave: reset });
    });

    return () => {
      observer.disconnect();
      pointerHandlers.forEach(({ move, leave }, wrapper) => {
        wrapper.removeEventListener("pointermove", move);
        wrapper.removeEventListener("pointerleave", leave);
      });
    };
  }, []);

  return null;
}
