import { Box } from "@mui/material";
import { useMemo, useRef } from "react";

interface ImageViewerProps {
  image: string;
}

const ImageViewer = ({ image }: ImageViewerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>();
  const containerRef = useRef<HTMLDivElement>();
  const observer = useRef(null);
  const background = useMemo(() => new Image(), [image]);

  // useLayoutEffect(() => {
  //   observer.current = new ResizeObserver((entries) => {
  //     entries.forEach(({ target }) => {
  //       const { width, height } = background;

  //       if (target.clientWidth < width) {
  //         const scale = target.clientWidth / width;

  //         canvasRef.current.width = width * scale;
  //         canvasRef.current.height = height * scale;
  //         canvasRef.current
  //           .getContext("2d")
  //           .drawImage(background, 0, 0, width * scale, height * scale);
  //       }
  //     });
  //   });
  //   observer.current.observe(containerRef.current);

  //   return () => observer.current.unobserve(containerRef.current);
  // }, []);

  // useEffect(() => {
  //   observer.current = new ResizeObserver((entries) => {
  //     entries.forEach(({ target }) => {
  //       const { width, height } = background;

  //       if (target.clientWidth < width) {
  //         const scale = target.clientWidth / width;

  //         canvasRef.current.width = width * scale;
  //         canvasRef.current.height = height * scale;
  //         canvasRef.current
  //           .getContext("2d")
  //           .drawImage(background, 0, 0, width * scale, height * scale);
  //       }
  //     });
  //   });
  //   observer.current.observe(containerRef.current);

  //   return () => observer.current.unobserve(containerRef.current);
  // }, []);

  // useEffect(() => {
  //   background.src = image;

  //   if (canvasRef.current) {
  //     background.onload = () => {
  //       const { width, height } = background;
  //       canvasRef.current.width = width;
  //       canvasRef.current.height = height;

  //       canvasRef.current.getContext("2d").drawImage(background, 0, 0);
  //     };
  //   }
  // }, [background]);

  return (
    <Box component="div" ref={containerRef}>
      <Box component="canvas" ref={canvasRef} />
    </Box>
  );
};

export default ImageViewer;
