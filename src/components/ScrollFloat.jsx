import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * ScrollFloat — ReactBits-style scroll-driven character float animation.
 *
 * Each word floats up (y: offset → 0) as the container enters the viewport,
 * with a gentle stagger between words for a wave-like reveal.
 *
 * Props:
 *  children      — Text content (string)
 *  className     — CSS classes for the outer wrapper
 *  charClassName — CSS classes applied to each animated span
 *  stagger       — Delay increment per word (s), default 0.06
 *  floatOffset   — Starting Y offset in px, default 50
 *  duration      — Animation duration (s), default 0.8
 */
const ScrollFloat = ({
  children,
  className = '',
  charClassName = '',
  stagger = 0.06,
  floatOffset = 50,
  duration = 0.8,
}) => {
  const words = String(children).split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: floatOffset,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.span
      className={`inline-block overflow-visible ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className={`inline-block ${charClassName}`}
            variants={wordVariants}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </motion.span>
  );
};

export default ScrollFloat;
