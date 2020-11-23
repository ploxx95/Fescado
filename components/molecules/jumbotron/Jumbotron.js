import Image from "next/image";
import { ButtonCta } from "../../atoms/buttonCta/ButtonCta";
import style from "./Jumbotron.module.css";

export const Jumbotron = () => {
  return (
    <div className={style.jumbotron}>
      <Image
        className={style.nextimage}
        alt="cart-personal"
        src="/cart-personal.png"
        layout="fill"
      />
      <div className={style.gradient}></div>
      <div className={style.wrapper}>
        <h1 className={style.h1}>Loremp ipsum criying bo</h1>
        <div className={style.wrapperButton}>
          <ButtonCta link="aplication"></ButtonCta>
        </div>
      </div>
    </div>
  );
};
