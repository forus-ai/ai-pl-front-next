import Header from 'components/common/Layout/Header';
import Layout from 'components/common/Layout';
import SignUp from 'container/SignUp';

export default function SignUpPage() {
  return (
    <Layout header={<Header variant="light" />}>
      <SignUp />
    </Layout>
  );
}
