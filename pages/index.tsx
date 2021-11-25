import React from 'react';

import Header, { HeaderProps } from 'components/common/Layout/Header';
import Layout from 'components/common/Layout';

export default function Home() {
  const [variant] = React.useState<HeaderProps['variant']>('transparent');

  return (
    <Layout
      header={<Header variant={variant} />}
      childrenContainerProps={{ paddingTop: 'none' }}
    >
      <div></div>
    </Layout>
  );
}
