/** @jsx jsx */
import { rgba } from "polished";
import { useState, useRef, useEffect } from "react";
import { jsx, Box, Container, Heading, Text } from "theme-ui";
import Progressbar from "components/progressbar";
import Feature from "components/cards/feature";
import Image from "components/image";
import expand from "assets/images/icons/expand.png";
import users from "assets/images/icons/users.png";
import wifi from "assets/images/icons/wifi.png";
import slider1 from "assets/images/features/1.jpg";
import slider2 from "assets/images/features/2.jpg";
import slider3 from "assets/images/features/3.jpg";

import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const data = {
  feature: [
    {
      id: 1,
      icon: expand,
      title: "1000 quart",
      description: "you will get 1000 quart of pure water here.",
    },
    {
      id: 2,
      icon: users,
      title: "80+ Projects",
      description: "We experienced on more than 80 Projects",
    },
    {
      id: 3,
      icon: wifi,
      title: "100 WWTP",
      description: "We have built more than 100 Waste Water Treatment Plant",
    },
  ],
  gallery: [
    {
      id: 1,
      image: slider1,
      title: "Tomb Excavation, GE",
      desc: "Malang, Indonesia",
    },
    {
      id: 2,
      image: slider2,
      title: "WWTP, Lesaffre",
      desc: "Jakarta, Indonesia",
    },
    {
      id: 3,
      image: slider3,
      title: "Road Construction, YTL",
      desc: "Paiton, Indonesia",
    },
  ],
};

const FeaturedSpace = () => {
  const isPause = useRef(false);
  const swiperRef = useRef(null);
  const [togglePlay, setTogglePlay] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(0);

  let time = 3;
  let tick, percentTime;

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    tick = setInterval(interval, 10);
  }

  function interval() {
    if (isPause.current === false) {
      percentTime += 1 / (time + 0.1);
      setCurrentWidth(percentTime);
      if (percentTime >= 100) {
        swiperRef?.current?.swiper?.slideNext();
        startProgressbar();
      }
    }
  }

  function resetProgressbar() {
    setCurrentWidth(0);
    clearTimeout(tick);
  }

  useEffect(() => {
    startProgressbar();
  }, []);

  const handleToggle = () => {
    isPause.current = !isPause.current;
    setTogglePlay((prev) => !prev);
  };

  return (
    <Box id="feature" as="section" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            <Heading as="h1" variant="heroPrimary">
              Best place to manage waste water
            </Heading>
            <Text as="p" variant="heroSecondary">
              It's great, can you add a beard though we are a startup, for what you've given us is
              texty, we want sexy or could you rotate the picture to show the other side of the
              room? yet make it original.
            </Text>
            <Box sx={styles.featureWrapper}>
              {data?.feature?.map((feature) => (
                <Feature key={feature.id} data={feature} />
              ))}
            </Box>
          </Box>
          <Box sx={styles.rightContent}>
            <Progressbar
              sx={styles.progressbar}
              togglePlay={togglePlay}
              handleClick={handleToggle}
              currentWidth={currentWidth}
            />
            <Swiper
              loop={true}
              effect="fade"
              ref={swiperRef}
              spaceBetween={0}
              slidesPerView={1}
              pagination={true}
            >
              {data?.gallery?.map((item) => (
                <SwiperSlide key={item.id}>
                  <Box as="figure" sx={styles.image}>
                    <Image loading="lazy" src={item.image} alt="" />
                    <Box as="figcaption">
                      <Box>
                        <Heading as="h4">{item.title}</Heading>
                        <Text as="p">{item.desc}</Text>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedSpace;

const styles = {
  section: {
    pt: [30, null, null, null, 60],
    pb: [30, null, null, 50, 60],
  },
  contentWrapper: {
    gap: [null, null, null, null, "30px"],
    display: ["flex", null, null, null, "grid"],
    alignItems: "center",
    flexDirection: ["column", null, null, null, null],
    gridTemplateColumns: ["unset", null, null, null, "repeat(2,1fr)"],
  },
  leftContent: {
    m: [0, "30px 0px 0", "30px 50px 0", 0],
  },
  heading: {
    textAlign: ["center", null, null, null, "left"],
    maxWidth: 490,
    margin: ["0 auto 40px", null, null, null, "0 0 80px"],
    h2: {
      fontSize: [22, null, null, 30, null, 36, 46],
      lineHeight: [1.6, null, null, 1.41],
      fontWeight: [500, null, null, 400],
    },
    p: {
      fontSize: ["15px", null, null, "17px"],
      mt: [3, null, null, 5],
    },
  },
  featureWrapper: {
    gap: ["40px 20px", null, null, null, "30px"],
    display: "grid",
    gridTemplateColumns: ["repeat(2,1fr)", null, null, "repeat(3,180px)", "repeat(3,1fr)"],
    justifyContent: ["unset", null, null, "center", "flex-start"],
  },
  rightContent: {
    position: "relative",
    mt: [6, null, null, null, 0],
    maxWidth: "100%",
    ".swiper-pagination-bullets": {
      bottom: 20,
    },
    ".swiper-pagination-bullet": {
      backgroundColor: "rgba(255,255,255,0.5)",
      width: 10,
      height: 10,
      opacity: 1,
      mx: 5,
      ":focus": {
        outline: 0,
      },
    },
    ".swiper-pagination-bullet-active": {
      backgroundColor: "rgba(255,255,255,1)",
    },
  },
  progressbar: {
    position: "absolute",
    left: [15, 25],
    top: [46, 53],
    zIndex: 2,
  },
  progressBar: {
    position: "relative",
    mr: 4,
  },
  toggleButton: {
    backgroundColor: "transparent",
    border: 0,
    cursor: "pointer",
    display: "flex",
    padding: 0,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    "&:focus": {
      outline: "0 none",
    },
  },
  image: {
    position: "relative",
    display: "flex",
    float: "left",
    width: "800px",
    height: "800px",
    objectFit: "cover",
    alignItems: "flex-start",
    "> img": {
      borderRadius: 10,
    },
    figcaption: {
      backgroundColor: "primary",
      display: "flex",
      alignItems: "center",
      position: "absolute",
      left: 0,
      top: 30,
      borderRadius: 5,
      color: "#fff",
      padding: ["20px 20px 20px 80px", "25px 25px 25px 90px"],
      h4: {
        lineHeight: 1,
        fontWeight: "bold",
        fontSize: [14, 18],
        letterSpacing: "heading",
      },
      p: {
        fontSize: [13, 16],
        fontWeight: 500,
        letterSpacing: "heading",
        color: rgba("#fff", 0.6),
        marginTop: [2],
      },
    },
  },
};
