import { createSignal, JSX } from "solid-js";

const Perspective = () => {
  const [rotation, setRotation] = createSignal(0);

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const delta = e.deltaY / 10;
    setRotation((prev) => prev + delta);
  };

  return (
    <div
      style={{
        // - [ ] what does perspective do?
        perspective: "1000px",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 500 500"
        style={{
          transform: `rotateX(${rotation()}deg) rotateY(${rotation()}deg)`,
          "transform-origin": "center",
        }}
        onWheel={handleWheel}
      >
        <rect x="100" y="100" width="300" height="300" fill="lightblue" />
        <rect x="150" y="150" width="100" height="100" fill="blue" />
      </svg>
    </div>
  );
};

export default Perspective;
