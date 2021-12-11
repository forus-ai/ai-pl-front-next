import Layout from 'components/common/Layout';
import Header from 'components/common/Layout/Header';

import Login from 'container/Login';

export default function LoginPage() {
  return (
    <Layout header={<Header />}>
      <Login />
    </Layout>
  );
}
