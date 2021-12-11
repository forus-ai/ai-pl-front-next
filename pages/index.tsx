import React from 'react';

import Layout from 'components/common/Layout';
import Header from 'components/common/Layout/Header';

import Main from 'container/Main';

export default function Home() {
  return (
    <Layout header={<Header />}>
      <Main />
    </Layout>
  );
}
