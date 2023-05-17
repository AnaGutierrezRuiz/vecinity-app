import React from 'react';
import ForumTopicDetail from '../components/forumTopics/forumTopic-detail/ForumTopicDetail';
import PageLayout from '../components/layout/PageLayout';


function ForumTopicPage() {
  
  return (
    <>
      <PageLayout title="Topic comments">
        <ForumTopicDetail />
      </PageLayout>
    </>
  );
}

export default ForumTopicPage;