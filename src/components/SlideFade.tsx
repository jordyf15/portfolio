import { Box, Fade, Slide } from "@mui/material";

interface SlideFadeProps {
  show: boolean;
  slideDirection: "right" | "left" | "up" | "down";
  content: React.ReactNode;
}

const SlideFade = ({ show, slideDirection, content }: SlideFadeProps) => {
  return (
    <Slide
      timeout={600}
      in={show}
      appear={false}
      direction={slideDirection}
      unmountOnExit
      mountOnEnter
    >
      <Box position={show ? "static" : "absolute"} top="53px" width={1}>
        <Fade in={show} appear={true} timeout={show ? 600 : 200}>
          <Box height={1} width={1}>
            {content}
          </Box>
        </Fade>
      </Box>
    </Slide>
  );
};

export default SlideFade;
