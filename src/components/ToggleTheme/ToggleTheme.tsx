'use client'
import React, { useLayoutEffect, useRef } from 'react'
import styles from './toggleTheme.module.scss'
import { useCustomDispatch } from "@/hooks/redux"
import { finishLoadingApplication } from "@/store/technicalSlice/theme"




export const ToggleTheme = () => {
  const dispatch = useCustomDispatch()

  const checkbox = useRef<HTMLInputElement>(null); 
  const circle = useRef<HTMLSpanElement>(null); 

  const getTheme = () => {
    if (localStorage.getItem("theme") === "dark") {
      document.querySelector("html")?.classList.add("dark");
      checkbox.current!.checked = true
    }
    setTimeout(() => {
      circle.current!.classList.add(`${styles.active}`)
    }, 0)
    dispatch(finishLoadingApplication())
    return false;
  };
  
  const changeTheme = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    if (!e.currentTarget.checked) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }

	useLayoutEffect(() => {
		getTheme();
	}, [])
  
	return (
		<label>
          <input
          ref={checkbox}
            onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => changeTheme(e)}
            className={`${styles.checkbox} theme`}
            type="checkbox"
          />
          <span ref={circle} className={styles.circle_checkbox}></span>
        </label>
	)
}
