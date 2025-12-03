"use client";
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export default function MyGoals() {
const [date, setDate] = React.useState(new Date());
  return (
    <>
      <h1>hello</h1>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm"
        captionLayout="dropdown"
      />
    </>
  );
}
