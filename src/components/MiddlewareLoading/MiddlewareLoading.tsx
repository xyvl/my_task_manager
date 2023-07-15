"use client";
import { useCustomDispatch, useCustomSelector } from "@/hooks/redux";
import Loading from "@/app/loading";
import { useLayoutEffect } from "react";
import { getValue } from "@/store/user/user";

export const MiddlewareLoading = ({ children }: any) => {
  const dispatch = useCustomDispatch();
  const loadingTheme = useCustomSelector(
    (state) => state.technicalReducer.theme.loading
  );
  useLayoutEffect(() => {
    dispatch(
      getValue(
        Number(localStorage.getItem("id")) > 0 &&
          String(localStorage.getItem("last_name")) &&
          String(localStorage.getItem("name"))
          ? {
              id: Number(localStorage.getItem("id")),
              last_name: String(localStorage.getItem("last_name")),
              name: String(localStorage.getItem("name")),
            }
          : { id: 0, name: "", last_name: "" }
      )
    );
  }, []);


  return (
    <>
      {loadingTheme === "loading" && <Loading />}
      <div>{children}</div>
    </>
  );
};
