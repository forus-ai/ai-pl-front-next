import Layout from 'components/common/Layout';
import Header from 'components/common/Layout/Header';

import SignUp from 'container/SignUp';

export default function SignUpPage() {
  return (
    <Layout header={<Header />}>
      <SignUp />
    </Layout>
  );
}
