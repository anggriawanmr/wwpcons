import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from "../sections/feature";
import WorkFlow from "../sections/workflow";
import Package from "../sections/package";
import TeamSection from "../sections/team-section";
import BlogSection from "../sections/blog-section";
import Subscribe from "../sections/subscribe";
import FeaturedSpace from "../sections/featured-space";
import Testimonials from "../sections/testimonials";
import Dashboard from "sections/dashboard";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landing 005" />
          <Banner />
          <KeyFeature />
          <ServiceSection />
          <Feature />
          <FeaturedSpace />
          <Dashboard />
          <Package />
          <TeamSection />
          <Testimonials />
          <BlogSection />
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
