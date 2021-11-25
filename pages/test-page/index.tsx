import Header from 'components/common/Layout/Header';
import Layout from 'components/common/Layout';
import TestComponent from 'container/TestComponent';

export default function TestPage() {
  return (
    <Layout header={<Header variant="dark" />}>
      <TestComponent />
    </Layout>
  );
}
