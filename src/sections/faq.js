/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button } from "theme-ui";
import SectionHeading from "components/section-header";
import Accordion from "components/accordion/accordion";

const data = [
  {
    id: 1,
    title: `01. Which domain should I purchase?`,
    contents: (
      <div>
        Get your website tests delivered at the home collect a sample. Simply contact us and we'll
        move your hosting account from any other provider, regardless of the control panel. If at
        anytime your website is down for more than 0.1% result with proper investigation
        experiments.
      </div>
    ),
  },
  {
    id: 2,
    title: `02. What are some tips when choosing a name?`,
    contents: (
      <div>
        We make it easy to move to CometNine. Simply contact us and we'll move your hosting account
        from any other provider, regardless of the control panel. If at anytime your website is down
        for more than 0.1% result with proper investigation experiments.
      </div>
    ),
  },
  {
    id: 3,
    title: `03. What if I need help choosing the right domain?`,
    contents: (
      <div>
        Create a hub for cross-functional work that also works with all. Simply contact us and we'll
        move your hosting account from any other provider, regardless of the control panel. If at
        anytime your website is down for more than 0.1% result with proper investigation
        experiments.
      </div>
    ),
  },
  {
    id: 4,
    title: `04. Can I upgrade or downgrade my web hosting subscription system?`,
    contents: (
      <div>
        The pricing made me a little hesitant at first but I have been. Simply contact us and we'll
        move your hosting account from any other provider, regardless of the control panel. If at
        anytime your website is down for more than 0.1% result with proper investigation
        experiments.
      </div>
    ),
  },
  {
    id: 5,
    title: `05. Learn from community on Brandwagon`,
    contents: (
      <div>
        Stop your viewers from getting distracted. Publish videos to. Simply contact us and we'll
        move your hosting account from any other provider, regardless of the control panel. If at
        anytime your website is down for more than 0.1% result with proper investigation
        experiments.
      </div>
    ),
  },
];

const Faq = () => {
  return (
    <section id="faq" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [6, null, null, 12, 17] }}
          slogan="Get your question answer"
          title="Frequently asked question"
        />

        <Accordion items={data} />
      </Container>
    </section>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [6, null, null, null, 6, 10, 14],
    pb: [12, null, null, null, 10, 22],
  },
  loadMore: {
    paddingTop: [3, null, null, 0],
    textAlign: "center",
    button: {
      backgroundColor: "#ECF2F7",
      color: "#738295",
      minHeight: 50,
      px: "22px",
      ":hover": {
        backgroundColor: "primary",
        color: "white",
      },
    },
  },
};
