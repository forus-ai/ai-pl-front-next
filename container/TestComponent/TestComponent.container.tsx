import React from 'react';
import TestComponentPresenter from './TestComponent.presenter';
import { CONFIG } from 'constants/config';

interface TestContainerContainerProps {}

const TestComponentContainer = ({}: TestContainerContainerProps) => {
  const env = CONFIG.ENV;
  const [data, setData] = React.useState<number | null>(null);

  // For : Fetching Data
  React.useEffect(() => {
    async function fetchData() {
      const makeMock = () => Promise.resolve(4);
      const fetchedData = await makeMock();
      setData((current) => (current || 0) + fetchedData);
    }
    const interval = setInterval(fetchData, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <TestComponentPresenter env={env} count={data} />;
};

export default TestComponentContainer;
