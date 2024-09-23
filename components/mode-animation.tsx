import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function ModeAnimation() {
  const numDivs = 8;
  const radius = 100; // 원의 반지름
  const centerX = 150; // 중심 x 좌표
  const centerY = 150; // 중심 y 좌표
  const angleIncrement = (2 * Math.PI) / numDivs; // 각도 증가량

  const motionDivs = Array.from({ length: numDivs }, (_, index) => {
    // 각 div의 초기 위치 계산
    const initialX = centerX + radius * Math.cos(index * angleIncrement);
    const initialY = centerY + radius * Math.sin(index * angleIncrement);

    return (
      <motion.div
        key={index}
        className="w-0.5 h-0.5 bg-amber-300"
        initial={{ x: initialX, y: initialY }} // 다른 위치에서 시작
        animate={{
          x: initialX, // x 좌표 변경
          y: initialY, // y 좌표 변경
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{
          duration: 2,
          ease: "linear",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    );
  });

  return (
    <div
      style={{
        // width: "300px",
        // height: "300px",
        position: "relative",
        top: 0,
      }}
    >
      {motionDivs}
    </div>
  );
}

export default ModeAnimation;
