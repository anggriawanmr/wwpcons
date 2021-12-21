/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button, Link } from "theme-ui";
import { keyframes } from "@emotion/core";
import BannerImg from "assets/banner-thumb.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect } from "react";

export default function Banner() {
  // const scroll = (e) => {
  //   e.preventDefault();
  //   window.scrollTo({
  //     top: 700,
  //     behavior: "smooth",
  //   });
  // };

  // const scrollTo = useEffect(() => {
  //   window.addEventListener("click", scroll);

  //   return () => {
  //     window.removeEventListener("click", scroll);
  //   };
  // }, []);

  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Best Waste Water Treatment Plant Company
          </Heading>
          <Text as="p" variant="heroSecondary">
            This red is too red thats not what i saw in my head at all nor thats not what i saw in
            my head at all the target audience is makes and famles aged zero and up
          </Text>
          <Button variant="primary" sx={styles.button}>
            Explore
          </Button>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg} alt="banner" />
        </Box>
      </Container>
      <Box sx={styles.scroll}>
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
    backgroundColor: "#000",
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
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      width: "50%",
      height: "50%",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [245, "auto"],
      },
    },
    button: {
      ":hover": {
        transform: "translateY(-5px)",
      },
      ":active": {
        transform: "translateY(3px)",
      },
    },
  },
  scroll: {
    pt: "60px",
    position: "absolute",
    top: "95%",
    left: "50%",
    transform: "translate(-50%, -95%)",
    color: "#fff",
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
