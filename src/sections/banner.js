/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button, Link } from "theme-ui";
import { keyframes } from "@emotion/core";
import { IoIosArrowDown } from "react-icons/io";
import bannerVideo from "assets/bannerVideo.gif";

export default function Banner() {
  const texts = [
    "Transparent",
    "Collaborative",
    "Nurturing",
    "Autonomous",
    "Nimble",
    "Progressive",
    "Flexible",
    "Innovative",
  ]; // from observable hq web site

  const Texts = (props) => {
    const [state, setState] = React.useState({
      left: "",
      right: "",
      texts: props.texts,
      current: props.texts[0],
    });
    const stay = React.useRef(false);
    const staybt = React.useRef(false);
    const update = React.useCallback(() => {
      const addNextChar = () => {
        setState({
          ...state,
          left: state.left + state.texts[0].slice(0, 1),
          right: state.texts[0].slice(1),
          texts: state.texts.map((e, i) => (i === 0 ? e.slice(1) : e)),
        });
      };
      const deleteLastChar = () => {
        if (state.left.slice(0, -1) === "") {
          stay.current = true;
          staybt.current = true;
        }
        setState({
          ...state,
          left: state.left.slice(0, -1),
          right: state.left.slice(-1) + state.right,
        });
      };
      const switchToNextText = () => {
        stay.current = false;
        staybt.current = false;
        const nextText = state.texts[1];
        setState({
          ...state,
          left: nextText.slice(0, 1), // first char of next text
          right: nextText.slice(1), // rest of the next char
          texts: [...state.texts.slice(1).map((e, i) => (i === 0 ? e.slice(1) : e)), state.current],
          current: nextText,
        });
      };
      if (state.texts[0].length === 0) {
        stay.current = false;
        if (state.left === "") switchToNextText();
        else deleteLastChar();
      } else addNextChar();
    }, [stay, staybt, setState, state]);
    React.useEffect(() => {
      setTimeout(
        () => {
          if (state.texts[0].length === 1) stay.current = true;
          window.requestAnimationFrame(update);
        },
        stay.current
          ? staybt.current
            ? props.waitbt || 30
            : props.wait || 3000
          : props.speed || 30
      );
    }, [update]);
    return (
      <span className={props.className}>
        {state.left}
        <span>{state.right}</span>
      </span>
    );
  };

  const scrolling = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };

  _onMouseMove = () => {};

  return (
    <section sx={styles.banner} id="home" onMouseMove={this._onMouseMove}>
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            The Most <Texts sx={styles.texts} waitbt={50} wait={2000} speed={27} texts={texts} />{" "}
            Waste Water Treatment Company
          </Heading>

          <Text as="p" variant="heroSecondary">
            This red is too red thats not what i saw in my head at all nor thats not what i saw in
            my head at all the target audience is makes and famles aged zero and up
          </Text>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={bannerVideo} alt="banner" />
        </Box>
      </Container>
      <Box sx={styles.scroll} onClick={scrolling}>
        <Text sx={styles.scrollText}>What's Next</Text>
        <IoIosArrowDown sx={styles.scrollButton} />
      </Box>
    </section>
  );
}

const scroll = keyframes`{
  from {
    transform: translate(2px, 0);
    opacity: 1;
  }

  to {
	  transform: translate(0, 15px);
    opacity: 0;
  
}`;

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    height: "100vh",
    backgroundColor: "#A3423C",
    backgroundSize: "cover",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: ``,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: ``,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "left",
      mb: ["40px", null, null, null, null, 7],
      zIndex: 4,
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      top: 30,
      width: "50%",
      height: "50%",
      mb: [0, null, -6, null, null, "-10px", null, -3],
      img: {
        position: "absolute",
        height: [100, 450],
        top: "15%",
        zIndex: 1,
      },
    },
  },
  texts: {
    opacity: 1,
    color: "#DE834D",
    "& > span": {
      opacity: 0.2,
      color: "palevioletred",
    },
  },
  scroll: {
    pt: "60px",
    position: "absolute",
    top: "95%",
    left: "50%",
    transform: "translate(-50%, -95%)",
    color: "#F0D290",
    textAlign: "center",
    fontSize: "30px",
  },
  scrollText: {
    fontSize: "15px",
    textTransform: "uppercase",
    boxSizing: "content-box",
    ":hover": {
      cursor: "pointer",
    },
  },
  scrollButton: {
    animation: `${scroll} 1.5s ease-out infinite`,
    padding: 0,
    margin: 0,
    ":hover": {
      cursor: "pointer",
    },
  },
};
