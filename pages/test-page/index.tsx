import Layout from 'components/common/Layout';
import Header from 'components/common/Layout/Header';

import TestComponent from 'container/TestComponent';

export default function TestPage() {
  return (
    <Layout header={<Header />}>
      <TestComponent />
    </Layout>
  );
}
