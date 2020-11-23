import Link from "next/link";
import style from "./ButtonCta.module.css";

export const ButtonCta = ({ link }) => {
  return (
    <Link href={`/${link}`}>
      <a className={style.buttonCta}>
        <span>Registrate</span>
      </a>
    </Link>
  );
};
