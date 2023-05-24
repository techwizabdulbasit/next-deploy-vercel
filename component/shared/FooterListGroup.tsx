import React from "react";
import Link from 'next/link';

interface MyProps {
  name: string;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  value5: string; 
}

function FooterListGroup(props: MyProps) {
  return (
    <ul className="flex pt-8 lg:pt-0 items-start justify-center flex-col gap-4 text-black">
      <h1 className="text-xl font-bold">{props.name}</h1>
      <li>
        <Link href="/">{props.value1}</Link>{" "}
      </li>
      <li>
        <Link href="/">{props.value2}</Link>
      </li>
      <li>
        <Link href="/">{props.value3}</Link>
      </li>
      <li>
        <Link href="/">{props.value4}</Link>
      </li>
      <li>
        <Link href="/">{props.value5}</Link>{" "}
      </li>
    </ul>
  );
}

export default FooterListGroup;
