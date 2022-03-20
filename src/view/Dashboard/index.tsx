import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import SideBar from '../../components/Content/SideBar';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container position="relative">
        <SideBar />
      </Container>
    </>
  );
};

export default Dashboard;
