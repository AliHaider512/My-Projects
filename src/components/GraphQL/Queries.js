import { gql } from "@apollo/client";

export const LOAD_JOBS = gql`
  query {jobs{
    id
    title,
    isPublished,
    userEmail,
    applyUrl,
    company{
      name
    }
    description
  }
  }
`;
