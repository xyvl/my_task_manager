"use client";
import { MiddlewareLoading } from "@/components/MiddlewareLoading/MiddlewareLoading"
import { store } from "@/store/store";
import React from "react";
import { Provider } from "react-redux";

const ConnectionLibraries = ({ children }: any) => {

  return (
    <Provider store={store}>
      <MiddlewareLoading>
      <div>{children}</div>
      </MiddlewareLoading>
    </Provider>
  );
};

export default ConnectionLibraries;
