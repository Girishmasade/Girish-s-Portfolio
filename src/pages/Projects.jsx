import React from 'react';
import { Avatar, Card } from 'antd';
import AnchorLink from 'antd/es/anchor/AnchorLink';
import { ProjectData } from '../utils/ProjectData';
import char from '../assets/man.png'
import Link from 'antd/es/typography/Link';
const { Meta } = Card;
const App = () => (
  <>
  <h1 className='text-center pb-10 md:text-4xl font-bold text-white underline' id='projects'>Projects</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
    {
      ProjectData.map((idx) => (
        <Card
        key={idx.id}
        className=' '
        cover={
          <img
            alt="example"
            src={idx.img}
            className=''
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