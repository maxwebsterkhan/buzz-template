import { useAnimationControls, motion } from "framer-motion";
import { useState } from "react";

export const TextSpan = ({ children }: any) => {
  const controls = useAnimationControls();

  const [isPlaying, setIsPlaying] = useState(false);

  const band = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, 0.55, 1)",
        "scale3d(0.75, 1.25, 1)",
        "scale3d(1.25, 0.85, 1)",
        "scale3d(0.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
      },
    });
    setIsPlaying(true);
  };

  return (
    <motion.span
      style={{ color: isPlaying ? "#FECF00" : "white" }}
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) band();
      }}
      onAnimationComplete={() => {
        setIsPlaying(false);
      }}
    >
      {children}
    </motion.span>
  );
};
