'use client'
import { useCustomSelector } from "@/hooks/redux";
import React from "react";

export const MainContent = () => {
  const id = useCustomSelector((state) => state.userReducer.user.id);
  return <>{id > 0 ? <div>Вы вошли</div> : <div>Вы не вошли</div>}</>;
};
