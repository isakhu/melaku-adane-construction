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

    animate("main > div:first-child", {
      opacity: [0, 1],
      translateY: [-18, 0],
      duration: 700,
      ease,
    });
    animate("main > header", {
      opacity: [0, 1],
      translateY: [-30, 0],
      duration: 900,
      delay: 100,
      ease,
    });
    animate("main > section:first-of-type h1", {
      opacity: [0, 1],
      translateY: [70, 0],
      rotateX: [8, 0],
      duration: 1250,
      delay: 160,
      ease,
    });
    animate("main > section:first-of-type img", {
      opacity: [0, 1],
      scale: [1.16, 1],
      rotateY: [-12, 0],
      rotateX: [5, 0],
      duration: 1500,
      delay: 130,
      ease,
    });

    const hero = page.querySelector<HTMLElement>("main > section:first-of-type > div > div:last-child");
    if (hero) {
      animate(hero, {
        translateY: [0, -10, 0],
        duration: 5200,
        loop: true,
        ease: "inOutSine",
      });
    }

    const heroCards = Array.from(
      page.querySelectorAll<HTMLElement>("main > section:first-of-type .absolute.-bottom-5, main > section:first-of-type .absolute.-right-4"),
    );
    heroCards.forEach((card, index) => {
      animate(card, {
        translateY: [index % 2 ? 8 : -8, index % 2 ? -8 : 8],
        rotateZ: [index % 2 ? 1.5 : -1.5, index % 2 ? -1.5 : 1.5],
        duration: 2800 + index * 450,
        loop: true,
        direction: "alternate",
        ease: "inOutSine",
      });
    });

    const sections = Array.from(page.querySelectorAll<HTMLElement>("section:not(:first-of-type)"));
    const sectionTargets = sections.flatMap((section) =>
      Array.from(section.querySelectorAll<HTMLElement>("h2, article, button, a, section > div > p:first-child")),
    );

    const revealed = new WeakSet<Element>();
    const reveal = (elements: HTMLElement[]) => {
      const fresh = elements.filter((el) => !revealed.has(el));
      if (!fresh.length) return;
      fresh.forEach((el) => revealed.add(el));
      animate(fresh, {
        opacity: [0, 1],
        translateY: [48, 0],
        rotateX: [7, 0],
        duration: 850,
        delay: stagger(45),
        ease,
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        reveal(entries.filter((entry) => entry.isIntersecting).map((entry) => entry.target as HTMLElement));
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );
    sectionTargets.forEach((element) => observer.observe(element));

    const imageWrappers = Array.from(
      page.querySelectorAll<HTMLElement>(
        "section#about > div > div:first-child, section#projects article > div:first-child, section#fleet article > div:first-child, section#leadership article > div:first-child, section#gallery .overflow-hidden, main > section:first-of-type .rounded-\\[2rem\\]",
      ),
    );

    const pointerHandlers = new Map<HTMLElement, { move: (event: PointerEvent) => void; leave: () => void }>();
    imageWrappers.forEach((wrapper) => {
      const image = wrapper.querySelector<HTMLImageElement>("img");
      if (!image) return;

      wrapper.style.transformStyle = "preserve-3d";
      wrapper.style.transformOrigin = "center center";
      wrapper.style.willChange = "transform";
      image.style.willChange = "transform";

      const onPointerMove = (event: PointerEvent) => {
        const rect = wrapper.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        animate(wrapper, {
          rotateX: -y * 12,
          rotateY: x * 14,
          translateZ: 12,
          scale: 1.018,
          duration: 260,
          ease: "outQuad",
        });
        animate(image, {
          scale: 1.075,
          translateX: x * 18,
          translateY: y * 18,
          translateZ: 28,
          duration: 320,
          ease: "outQuad",
        });
      };

      const onPointerLeave = () => {
        animate(wrapper, {
          rotateX: 0,
          rotateY: 0,
          translateZ: 0,
          scale: 1,
          duration: 700,
          ease: "outElastic(1, .55)",
        });
        animate(image, {
          scale: 1,
          translateX: 0,
          translateY: 0,
          translateZ: 0,
          duration: 700,
          ease: "outElastic(1, .55)",
        });
      };

      wrapper.addEventListener("pointermove", onPointerMove);
      wrapper.addEventListener("pointerleave", onPointerLeave);
      pointerHandlers.set(wrapper, { move: onPointerMove, leave: onPointerLeave });
    });

    const buttons = Array.from(page.querySelectorAll<HTMLElement>("button, a.inline-flex"));
    const buttonHandlers = new Map<HTMLElement, (event: PointerEvent) => void>();
    buttons.forEach((button) => {
      const onMove = (event: PointerEvent) => {
        const rect = button.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        animate(button, {
          translateX: x * 6,
          translateY: y * 5,
          scale: 1.035,
          duration: 220,
          ease: "outQuad",
        });
      };
      const onLeave = () => animate(button, { translateX: 0, translateY: 0, scale: 1, duration: 420, ease: "outElastic(1, .5)" });
      button.addEventListener("pointermove", onMove);
      button.addEventListener("pointerleave", onLeave);
      buttonHandlers.set(button, onMove);
    });

    return () => {
      observer.disconnect();
      pointerHandlers.forEach(({ move, leave }, wrapper) => {
        wrapper.removeEventListener("pointermove", move);
        wrapper.removeEventListener("pointerleave", leave);
      });
      buttonHandlers.forEach((move, button) => {
        button.removeEventListener("pointermove", move);
      });
    };
  }, []);

  return null;
}
