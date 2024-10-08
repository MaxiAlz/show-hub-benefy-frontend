import React from 'react';
import ChartOne from '../components/Charts/ChartOne';
import ChartThree from '../components/Charts/ChartThree';
import ChartTwo from '../components/Charts/ChartTwo';
import DefaultLayout from '../layout/DefaultLayout';
import { Breadcrumb, PageTitle } from '../components';

const Chart: React.FC = () => {
  return (
    <>
      <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
      <DefaultLayout>
        <Breadcrumb pageName="Chart" />

        <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
          <ChartOne />
          <ChartTwo />
          <ChartThree />
        </div>
      </DefaultLayout>
    </>
  );
};

export default Chart;
