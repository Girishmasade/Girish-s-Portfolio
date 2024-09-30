import React from 'react';
import { Avatar, Card } from 'antd';
import AnchorLink from 'antd/es/anchor/AnchorLink';
import { ProjectData } from '../utils/ProjectData';
import char from '../assets/man.png'
import Link from 'antd/es/typography/Link';
const { Meta } = Card;
const App = () => (
  <>
  <h1 className='text-center pb-10 text-3xl font-bold text-white underline' id='projects'>Projects</h1>
  <div className="flex justify-evenly flex-wrap gap-4 space-y-4">
    {
      ProjectData.map((idx) => (
        <Card
        key={idx.id}
        style={{
          width: 500,
        }}
        cover={
          <img
            alt="example"
            src={idx.img}
          />
        }
        actions={[
          <AnchorLink className='relative bottom-4'>
            <Link href={idx.href} target='_blank' className='text-lg'>
            {idx.btn}
            </Link>
            </AnchorLink>
        ]}
      >
        <Meta
          avatar={<Avatar src={char} className='border-1 border-black'/>}
          title={idx.title}
          description={idx.Des}
        />
      </Card>
      ))
    }
 
  </div>
  </>
  
);
export default App;