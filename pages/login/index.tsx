import Header from 'components/common/Layout/Header';
import Layout from 'components/common/Layout';
import Login from 'container/Login';

export default function LoginPage() {
  return (
    <Layout header={<Header variant="light" />}>
      <Login />
    </Layout>
  );
}
