import React from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchPage() {
  console.log('useLocation()', useLocation());
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const searchTerm = query.get("q")
  return (
    <div></div>
  )
}
