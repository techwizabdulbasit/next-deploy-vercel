"use client"
import React, { useState, useEffect } from 'react';

const API_URL = process.env.BASE_URL || '';

export default function Profile() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState<any>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL + 'users/find?email=abdulbasit@gmail.pk');
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No profile data</p>;
  }

  return (
    <div>
        <p>firstName: {data?.first_name}</p> <p>lastName: {data?.last_name}</p>
      <p>email: {data?.email}</p>
    </div>
  );
}

