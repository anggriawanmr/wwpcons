import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from "../sections/banner";
import ServiceSection from "../sections/service-section";
import Feature from "../sections/feature";
import TeamSection from "../sections/team-section";
import FeaturedSpace from "../sections/featured-space";
import Testimonials from "../sections/testimonials";
import Dashboard from "sections/dashboard";
import Faq from "sections/faq";
import Subscription from "sections/subscription";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Wahana Wira Persada Company" />
          <Banner />
          <ServiceSection />
          <Feature />
          <FeaturedSpace />
          <Testimonials />
          <Dashboard />
          <TeamSection />
          <Faq />
          <Subscription />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
