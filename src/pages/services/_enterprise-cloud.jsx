import React from 'react';
import Layout from '@theme/Layout';
import ServiceHeader from '../../components/Service/EnterpriseDedicated/Header/index.jsx';
import ServicePlan from '../../components/Service/EnterpriseDedicated/Plan/index.jsx';
import ContactUsForm from '../../components/Contact/contactForm.jsx';
import Highlights from '../../components/Service/EnterpriseDedicated/Highlights/index.jsx';
import ThemeSwitch from '/src/components/ThemeSwitch';
import QuoteBox from '../../components/Service/EnterpriseDedicated/QuoteBox/quoteBox.jsx';
import Integrations from '../../components/Service/EnterpriseDedicated/Integrations/index.jsx';
import Availability from '../../components/Service/EnterpriseDedicated/Availability/index.jsx';

export default function EDPage() {
  return (
    <div className="custom-page noBG">
      <Layout title="Enterprise Cloud" description="Enterprise Cloud Service">
        <ServiceHeader />
        <ServicePlan />
        <QuoteBox />
        <Integrations />
        <Highlights />
        <Availability />
        <ContactUsForm theme="dark" />
      </Layout>
      <ThemeSwitch />
    </div>
  );
}
