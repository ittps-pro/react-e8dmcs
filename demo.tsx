import React, { useState } from 'react';
import './index.css';
import {
  Button,
  Card,
  Descriptions,
  Drawer,
  Form,
  Input,
  Select,
  Table,
  DrawerProps,
} from 'antd';

import type { DescriptionsProps, Progress } from 'antd';
import TextArea from 'antd/es/input/TextArea';

import axios from 'axios';

const items: DescriptionsProps['items'] = [
  {
    label: 'Product',
    children: 'Cloud Database',
  },
  {
    label: 'Billing',
    children: 'Prepaid',
  },
  {
    label: 'Time',
    children: '18:00:00',
  },
  {
    label: 'Amount',
    children: '$80.00',
    key: 'amount',
  },
  {
    label: 'Discount',
    span: { xl: 2, xxl: 2 },
    children: '$20.00',
  },
  {
    label: 'Official',
    span: { xl: 2, xxl: 2 },
    children: '$60.00',
  },
  {
    label: 'Config Info',
    span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    children: (
      <>
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
      </>
    ),
  },
  {
    label: 'Hardware Info',
    span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    children: (
      <>
        <Input />
        <Select />
        <Form.Item extra={'config'}>
          <TextArea
            variant={'filled'}
            height={'500'}
            key={'config'}
            defaultValue={[
              'CPU: 6 Core 3.5 GHz',
              'Replication factor: 3',
              'Region: East China 1',
            ].join('\n')}
          ></TextArea>
        </Form.Item>{' '}
      </>
    ),
  },
];

// const digestAuth = new AxiosDigestAuth({
//   username: process.env.user,
//   password: process.env.password,
// });

// const MakeARequest = async () => {
//   const response = await digestAuth.request({
//     headers: { Accept: 'application/json' },
//     method: 'GET',
//     url: 'https://cloud.mongodb.com/api/atlas/v1.0/groups',
//   });
// };

let close = (w) => (w.open = false);

const onCreate = (data: any[]) => {
  const [current, setCurrent] = useState(data);

  console.log('create');

  return current;
};

const App: React.FC = (s: any[]) => (
  <>
    <Button>Create</Button>

    <Drawer open={false} closable onClose />

    <Card title="Responsive Descriptions">
      <Descriptions
        extra={'eee'}
        id={'data'}
        key={'data'}
        bordered
        column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
        items={items}
      />
    </Card>
  </>
);

export default App;
