import React, { useEffect, useState } from 'react';
import communitiesService from '../../../services/communities';
import CommunityItem from '../community-item/CommunityItem';

function CommunitiesList() {

  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    communitiesService.list()
      .then((communities) => setCommunities(communities))
      .catch(console.error);
  }, []);

  return (
    <>
      <h1>Communities List</h1>
      {communities.map((community) => <CommunityItem community={community} key={community.id} />)}
    </>
  );
}

export default CommunitiesList;