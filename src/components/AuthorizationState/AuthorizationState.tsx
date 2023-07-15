import Link from "next/link";
import React from "react";
import styles from "./authorizationState.module.scss";
import { useCustomSelector } from "@/hooks/redux";

const AuthorizationState = () => {
  const id = useCustomSelector((state) => state.userReducer.user.id);
  if (id) {
    return (
      <div className={styles.main}>
        <Link href="/" className={styles.link}>
          Выйти
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <Link href="/sign_in" className={styles.link}>
        Войти
      </Link>
      <Link href="/sign_up" className={styles.link}>
        Зарегестрироваться
      </Link>
    </div>
  );
};

export default AuthorizationState;
