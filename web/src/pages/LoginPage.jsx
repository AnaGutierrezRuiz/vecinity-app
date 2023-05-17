import React from 'react';
import UserLogin from '../components/users/users-login/UserLogin';
import PageLayout from '../components/layout/PageLayout';

function LoginPage() {
  
  return (
    <>
      <PageLayout title="Log in">
        <UserLogin />
      </PageLayout>
    </>
  );
}

export default LoginPage;