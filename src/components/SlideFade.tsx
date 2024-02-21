import { Fade, Slide, Stack } from "@mui/material";

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
      <Stack
        position={show ? "static" : "absolute"}
        top="53px"
        width={1}
        flexGrow={1}
      >
        <Fade in={show} appear={true} timeout={show ? 600 : 200}>
          <Stack width={1} flexGrow={1}>
            {content}
          </Stack>
        </Fade>
      </Stack>
    </Slide>
  );
};

export default SlideFade;
